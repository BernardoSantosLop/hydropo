import { Component } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css']
})
export class LightSwitchComponent {
  lightOn: boolean = false;

  toggleLight() {
    this.lightOn = !this.lightOn;
    // Aquí puedes agregar la lógica para controlar el estado de las luces
    console.log('Luces ' + (this.lightOn ? 'encendidas' : 'apagadas'));
  }
}

