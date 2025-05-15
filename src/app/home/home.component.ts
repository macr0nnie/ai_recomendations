import { Component } from '@angular/core';
interface Square {
  filled: boolean;
  id: number;
}
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // fixed typo: styleUrl -> styleUrls
  // standalone: true, // uncomment if using standalone components
})

export class HomeComponent {
  squares: Square[] = [];
  max_squares: number = 356;
  total_filled_squares: number = 0;
  total_unfilled_squares: number = 0;
  constructor() {
    this.CreateSquares();
    this.total_unfilled_squares = this.max_squares;
  }
  CreateSquares() {
    for (let i = 0; i < this.max_squares; i++) {
      this.squares.push({
        filled: false,
        id: i
      });
    }
  }
  RenderSquares(): void {
    for (let i = 0; i < this.squares.length; i++) {
      this.squares[i].filled = false;
      this.squares[i].id = i;
    }
    this.total_filled_squares = 0;
    this.total_unfilled_squares = this.max_squares;
  }

  MarkSquare(id: number) {
    if (this.squares[id].filled == false) {
      this.squares[id].filled = true;
      this.total_filled_squares++;
      this.total_unfilled_squares--;
    }
    else {
      this.squares[id].filled = false;
      this.total_filled_squares--;
      this.total_unfilled_squares++;
    }
  }  
}