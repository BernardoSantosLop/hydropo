import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { TemperatureSensorComponent } from './Componentes/temperature-sensor/temperature-sensor.component';
import { PhSensorComponent } from './Componentes/ph-sensor/ph-sensor.component';
import { HumiditySensorComponent } from './Componentes/humidity-sensor/humidity-sensor.component';
import { UltrasonicSensorComponent } from './Componentes/ultrasonic-sensor/ultrasonic-sensor.component';
import { LightSwitchComponent } from './Componentes/light-switch/light-switch.component';
import { FormsModule } from '@angular/forms';
import { TemperatureControlComponent } from './Componentes/temperature-control/temperature-control.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TemperatureSensorComponent,
    PhSensorComponent,
    HumiditySensorComponent,
    UltrasonicSensorComponent,
    LightSwitchComponent,
    TemperatureControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
