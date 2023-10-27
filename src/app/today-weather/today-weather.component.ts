import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ForecastService } from '../forecast.service';
import { WeatherDetails } from '../shared/model/weatherDetails.model';

import { HttpErrorResponse } from '@angular/common/http';
import { weatherData } from '../shared/model/weatherData.model';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.css']
})
export class TodayComponent implements OnInit {
  weatherNow!: weatherData;
  currentTime = new Date(); //return the date and time of your current deveice/country
  city = '';
  country = '';
  errorMessage!: HttpErrorResponse;

  @ViewChild('f', { static: false })
  searchForm!: NgForm;

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.forecastService.getWeatherForecast().subscribe(
      {
        next: (data) => {
          this.getTodayForecast(data);
        },
        error: (error) => {
          this.errorMessage = error;
        }
      });
  }

  getTodayForecast(today: WeatherDetails) {
    this.city = today.city.name;
    this.country = today.city.country;
    for (const forecast of today.list.slice(1, 7)) {
      this.weatherNow = forecast;
    }
  }

  onSearch() {
    const searchCityOrCountry = this.searchForm.value.input;
    if (searchCityOrCountry != '') {
      this.forecastService.getWeatherByCityName(searchCityOrCountry).subscribe(
        {
          next: (data) => {
            this.getSearchCityForecast(data);
          },
          error: (error) => {
            this.errorMessage = error;
            console.log(this.errorMessage.message);
            this.forecastService.hasError.next(error);
          }
        });
    }
  }

  getSearchCityForecast(response: WeatherDetails) {
    this.forecastService.onSearchClick.next(response);
    this.city = response.city.name;
    this.country = response.city.country;
    for (const searchForecast of response.list) {
      this.weatherNow = searchForecast;
    }
    this.searchForm.reset();
  }
}
