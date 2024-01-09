import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test-calculator.component.html',
  styleUrl: './test-calculator.component.sass',
})
export class TestCalculatorComponent {
  public first: number = 1;
  public second: number = 1;

  public operation?: string;
  public operations: string[] = ['+', '-', '*'];
  public result?: number;
  public calc() {
    switch (this.operation) {
      case '+':
        this.result = this.first + this.second;
        break;
      default:
        this.result = 0;
        break;
    }
  }
}
