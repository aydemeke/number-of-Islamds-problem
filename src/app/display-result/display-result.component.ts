import { Component, OnInit } from '@angular/core';
import {BitmapService} from '../bitmap.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent {
  private _matrix: number[][];
  count: number = 0;
  isSolveClicked = false;

  constructor(private bitmapService: BitmapService, private router: Router) { }

  get matrix(): number[][] {
    this._matrix = this.bitmapService.matrix;
    return this._matrix;
  }

  onSolveClick(){
    this.count = this.numIslands();
    this.isSolveClicked = true;
  }

  /*
  * Number of Islands problem solution
  * */
  numIslands(): number {
    if(!this.matrix  == null || this.matrix.length < 1){
      return 0;
    }

    for(let i = 0; i < this.matrix.length; i++){
      for(let j = 0; j < this.matrix[i].length; j++){
        if(this.matrix[i][j] == 1){
          this.count += this.DFSIterateIsland(this.matrix, i, j);
        }
      }
    }

    return this.count;
  }

  DFSIterateIsland(matrix: number[][], i: number, j: number) {
    if(i < 0 || i >= matrix.length || j < 0 || j >= matrix[i].length || matrix[i][j] != 1){
      return 0;
    }
    let row: number[] = [-1, -1, -1, 0, 1, 0, 1, 1];
    let col: number[] = [-1, 1, 0, -1, -1, 1, 0, 1];

    matrix[i][j] = 2;
    for(let k=0; k<8; k++){
      this.DFSIterateIsland(matrix, i + row[k], j + col[k]);
    }
    return 1;
  }
}
