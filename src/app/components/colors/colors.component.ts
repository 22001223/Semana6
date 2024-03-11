import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [ToolbarComponent, FormsModule],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.css'
})
export class ColorsComponent {
  red = 0;
  green = 0;
  blue =  0;
  
  color = '';
  colors = signal<string[]>([]);

  addColor() {
    if(this.red === null || this.red < 0) this.red = 0;
    if(this.green === null || this.green < 0) this.green = 0;
    if(this.blue === null || this.blue < 0) this.blue = 0;

    if(this.red > 255) this.red = 255;
    if(this.green > 255) this.green = 255;
    if(this.blue > 255) this.blue = 255;

    this.color = '#' + 
      this.red.toString(16).padStart(2, '0') +
      this.green.toString(16).padStart(2, '0') +
      this.blue.toString(16).padStart(2, '0')
    ;
    
    this.colors.set( [...this.colors(), this.color]);
  }

}
