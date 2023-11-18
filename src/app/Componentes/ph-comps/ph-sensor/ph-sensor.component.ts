import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ph-sensor',
  templateUrl: './ph-sensor.component.html',
  styleUrls: ['./ph-sensor.component.css']
})
export class PhSensorComponent {
  getRotation() {
  }
    @Input() ph: number | undefined;
  
    constructor() { }
  }
  