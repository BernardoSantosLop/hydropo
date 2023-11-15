import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temperature-sensor',
  templateUrl: './temperature-sensor.component.html',
  styleUrls: ['./temperature-sensor.component.css']
})
export class TemperatureSensorComponent {
getRotation() {
}
  @Input() temperature: number | undefined;

  constructor() { }
}


