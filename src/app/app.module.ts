import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { TemperatureSensorComponent } from './Componentes/temperature-comps/temperature-sensor/temperature-sensor.component';
import { PhSensorComponent } from './Componentes/ph-comps/ph-sensor/ph-sensor.component';
import { HumiditySensorComponent } from './Componentes/humidity-comps/humidity-sensor/humidity-sensor.component';
import { UltrasonicSensorComponent } from './Componentes/ultrasonic-sensor/ultrasonic-sensor.component';
import { LightSwitchComponent } from './Componentes/light-switch/light-switch.component';
import { FormsModule } from '@angular/forms';
import { VerticalTemperatureSliderComponent } from './Componentes/temperature-comps/vertical-temperature-slider/vertical-temperature-slider.component';
import { PhInputComponent } from './Componentes/ph-comps/ph-input/ph-input.component';
import { HumidityControlComponent } from './Componentes/humidity-comps/humidity-control/humidity-control.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TemperatureSensorComponent,
    PhSensorComponent,
    HumiditySensorComponent,
    UltrasonicSensorComponent,
    LightSwitchComponent,
    VerticalTemperatureSliderComponent,
    PhInputComponent,
    HumidityControlComponent,
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
