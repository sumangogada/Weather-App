import { coord } from "./coord.model";

export class city {

    public id: number;
    public name: string;
    public coord: coord;
    public country: string;
    public population: number;
    public timezone: number;
    public sunrise: number;
    public sunset: number;

    constructor(id: number, name: string, coord: coord, country: string, population: number, timezone: number, sunrise: number, sunset: number) {
        this.id = id;
        this.name = name;
        this.coord = coord;
        this.country = country;
        this.population = population;
        this.timezone = timezone;
        this.sunrise = sunrise;
        this.sunset = sunset;
    }
}