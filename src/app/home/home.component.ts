import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //define it
  squareStatus = {
    filled: false,
    color: 'blue',
    id: 1
  };
  //loop for squares
  //squares :number = 0;
  total_filled_squares: number = 0;
  total_unfilled_squares: number = 0;
  //need an object to store if the square is filled or not
  RenderSquares() {
    //map the squares to the dom
    //dom element
  }
  MarkSquare(id: number) {
    //check if the square is filled or not
    if (this.squareStatus.filled) {
      this.squareStatus.filled = false;
      this.total_filled_squares--;
      this.total_unfilled_squares++;
    } else {
      this.squareStatus.filled = true;
      this.total_filled_squares++;
      this.total_unfilled_squares--;
    }
  }
}
