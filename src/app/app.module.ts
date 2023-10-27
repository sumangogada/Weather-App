import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { WeatherComponent } from './weather/weather.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TodayComponent } from './today-weather/today-weather.component';
import { FutureComponent } from './future-weather/future-weather.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    TodayComponent,
    FutureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
