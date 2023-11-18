// src/app/humidity-control/humidity-control.component.ts
// src/app/humidity-control/humidity-control.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-humidity-control',
  templateUrl: './humidity-control.component.html',
  styleUrls: ['./humidity-control.component.css']
})
export class HumidityControlComponent {
  @Input() humidity: number;
  @Output() humidityChange = new EventEmitter<number>();

  onHumidityChange(): void {
    this.humidityChange.emit(this.humidity);
  }
}

