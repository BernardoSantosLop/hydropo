// src/app/ph-input/ph-input.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ph-input',
  templateUrl: './ph-input.component.html',
  styleUrls: ['./ph-input.component.css']
})
export class PhInputComponent {
  @Input() phValue: number;
  @Output() phChange = new EventEmitter<number>();

  onPhChange(): void {
    this.phChange.emit(this.phValue);
  }
}

