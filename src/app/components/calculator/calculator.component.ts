import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from "@angular/router";

import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ToolbarComponent, FormsModule, RouterLinkWithHref],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  operator1 = 0;
  operator2 = 0;
  result = 0;

  sum() {
    this.result = this.operator1 + this.operator2;
  }

  subtract() {
    this.result = this.operator1 - this.operator2;
  }

  multiply() {
    this.result = this.operator1 * this.operator2;
  }

  divide() {
    if(this.operator2 === 0) this.operator2 = 0;
    this.result = this.operator1 / this.operator2;
  }

  exponent() {
    this.result = this.operator1 ** this.operator2;
  }

}
