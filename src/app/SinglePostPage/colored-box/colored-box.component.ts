import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colored-box',
  templateUrl: './colored-box.component.html',
  styleUrl: './colored-box.component.css',
})
export class ColoredBoxComponent {
  @Input() data: string = '';
}
