import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { ForecastService } from "./forecast.service";
import { WeatherDetails } from "./shared/model/weatherDetails.model";


describe('forecast service', () => {

  let forecastService: ForecastService;
  let httpController: HttpTestingController;
  let weatherDetails: WeatherDetails;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ForecastService],
    });
    forecastService = TestBed.inject(ForecastService);
    httpController = TestBed.inject(HttpTestingController);
    weatherDetails = new WeatherDetails();
  });

  afterEach(() => {
    httpController.verify();
  });

  it('service created', () => {
    expect(forecastService).toBeDefined();
  });

  it('Get Weather By City Name', () => {

    const inputData = 'paris';
    forecastService
      .getWeatherByCityName(inputData)
      .subscribe((data) => expect(data).toEqual(weatherDetails));

    const weatherByCityname = httpController.expectOne('https://api.openweathermap.org/data/2.5/forecast?q=paris&units=imperial&appid=ad1373f8c6481b9a7b58a86160ca1ee3');

    expect(weatherByCityname.request.method).toEqual("GET");

    weatherByCityname.flush(weatherDetails);
  });

});