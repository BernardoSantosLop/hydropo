import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-humidity-sensor',
  templateUrl: './humidity-sensor.component.html',
  styleUrls: ['./humidity-sensor.component.css']
})
export class HumiditySensorComponent {
  getRotation() {
  }
    @Input() hr: number | undefined;
  
    constructor() { }
  }

