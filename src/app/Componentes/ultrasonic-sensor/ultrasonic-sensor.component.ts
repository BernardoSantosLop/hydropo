import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ultrasonic-sensor',
  templateUrl: './ultrasonic-sensor.component.html',
  styleUrls: ['./ultrasonic-sensor.component.css']
})
export class UltrasonicSensorComponent {
  getRotation() {
  }
    @Input() cm: number | undefined;
  
    constructor() { }
  }
  

