// src/app/vertical-temperature-slider/vertical-temperature-slider.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vertical-temperature-slider',
  templateUrl: './vertical-temperature-slider.component.html',
  styleUrls: ['./vertical-temperature-slider.component.css']
})
export class VerticalTemperatureSliderComponent {
  @Input() temperature: number;
  @Output() temperatureChange = new EventEmitter<number>();

  onTemperatureChange(): void {
    this.temperatureChange.emit(this.temperature);
  }
}
