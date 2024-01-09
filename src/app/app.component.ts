import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestCalculatorComponent } from './test-calculator/test-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  imports: [CommonModule, RouterOutlet, TestCalculatorComponent],
})
export class AppComponent {
  public title = 'angular-practic';

  protected tooltip = 'Help';

  public alert() {
    console.log('Learning angular');
  }
}
