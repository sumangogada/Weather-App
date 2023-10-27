import { Component, OnInit } from '@angular/core';

import { weatherData } from '../shared/model/weatherData.model';
import { WeatherDetails } from '../shared/model/weatherDetails.model';

import { ForecastService } from '../forecast.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-future-weather',
  templateUrl: './future-weather.component.html',
  styleUrls: ['./future-weather.component.css']
})
export class FutureComponent implements OnInit {
  weatherData: weatherData[] = [];
  constructor(private forecastService: ForecastService) { }

  errorMessage!: HttpErrorResponse;

  ngOnInit(): void {
    this.forecastService.getWeatherForecast().subscribe(
      {
        next: (data) => {
          this.futureForecast(data);
        },

        error: (data) => {
          this.errorMessage = data;
        }

      });

    this.forecastService.onSearchClick.subscribe(
      {
        next: (value) => {
          this.weatherData = [];
          this.futureForecast(value);
        }
      }
    );

    this.forecastService.hasError.subscribe({
      next: (errorVal) => {
        this.errorMessage = errorVal;
      }
    });

  }

  futureForecast(data: WeatherDetails) {
    for (let i = 1; i < data.list.length; i = i + 8) {
      this.weatherData.push(data.list[i])
    }

  }

  key = 0;
  reverse = false;
  onSort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}



