import { Component } from '@angular/core';
import {BitmapService} from '../bitmap.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
   matrixRow: number;
   matrixColumn: number;

  constructor(private bitmapService: BitmapService, private router: Router) { }

  onSaveInputData(){
    if(this.matrixRow <= 0 || this.matrixColumn <= 0){
      alert("Bitmap size can't be negative, please enter positive numbers!");
      this.router.navigate(['/userInput']);
    }else {
      this.bitmapService.generateBitmap(this.matrixRow, this.matrixColumn);
    }
  }

  onRandomizeMatrix(){
    let row = Math.floor(Math.random()*20) + 1;
    let column = Math.floor(Math.random()*20) + 1;
    this.bitmapService.generateBitmap(row, column);
    console.log(this.bitmapService.matrix);
  }
}
