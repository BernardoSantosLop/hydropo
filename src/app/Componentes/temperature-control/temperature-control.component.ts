// src/app/temperature-control/temperature-control.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature-control',
  templateUrl: './temperature-control.component.html',
  styleUrls: ['./temperature-control.component.css']
})
export class TemperatureControlComponent {
  temperature: number = 25; // Valor inicial

  onTemperatureChange(): void {
    // Puedes realizar acciones adicionales cuando cambia la temperatura
    console.log('Nueva temperatura:', this.temperature);
  }
}
