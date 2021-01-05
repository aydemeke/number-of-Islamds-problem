import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BitmapService {

  private _matrix: number[][];

  constructor() { }

  get matrix(): number[][] {
    return this._matrix;
  }

  generateBitmap(row: number, column: number){
    this._matrix = new Array();
    for (let i=0; i<row; i++){
      this.matrix[i] = new Array();
      for (let j=0; j<column; j++){
        let rand = Math.floor(Math.random()*2);
        this.matrix[i][j] = rand;
      }
    }
  }
}
