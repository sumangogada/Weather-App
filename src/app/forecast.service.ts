import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, switchMap, throwError } from 'rxjs';
import { WeatherDetails } from './shared/model/weatherDetails.model';
import { API_KEY, ENDPOINT_URL } from './shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  endpointUrl = ENDPOINT_URL;
  apiKey = API_KEY;
  onSearchClick = new Subject<WeatherDetails>();
  hasError = new Subject<HttpErrorResponse>();

  constructor(private http: HttpClient) { }

  getWeatherForecast() {
    return new Observable<GeolocationPosition>((observer) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position);
        }
      )
    }).pipe(
      catchError(this.handleError),
      map((value: GeolocationPosition) => {
        return new HttpParams()
          .set('lon', value.coords.longitude)
          .set('lat', value.coords.latitude)
          .set('units', 'imperial')
          .set('appid', this.apiKey)
      }),
      switchMap((values) => {
        return this.http.get<WeatherDetails>(this.endpointUrl, { params: values })
      },)
    )
  }

  getWeatherByCityName(city: string) {
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'imperial')
      .set('appid', this.apiKey);
    return this.http.get<WeatherDetails>(this.endpointUrl, { params }).pipe(
      catchError(this.handleError)
    );

  }


  private handleError(error: HttpErrorResponse) {

    let errorMessage = '';
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    errorMessage = 'Something bad happened; please try again later :-(';
    return throwError(() => new Error(errorMessage));
  }
}
