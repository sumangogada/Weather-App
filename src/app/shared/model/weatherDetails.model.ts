import { city } from "./city.model";
import { weatherData } from "./weatherData.model";


export class WeatherDetails {

    public cod: string;
    public message: string;
    public cnt: number;
    public list: weatherData[];
    public city: city;

    constructor(cod: string, message: string, cnt: number, list: weatherData[], city: city) {
        this.cod = cod;
        this.message = message;
        this.cnt = cnt;
        this.list = list;
        this.city = city;
    }
}