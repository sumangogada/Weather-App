import { waitForAsync } from "@angular/core/testing";
import { clouds } from "./clouds.model";
import { main } from "./main.model";
import { sys } from "./sys.model";
import { weather } from "./weather.model";
import { wind } from "./wind.model";

export class weatherData {

    public dt: number;
    public main: main;
    public weather: weather[];
    public clouds: clouds;
    public wind: wind;
    public visibility: number;
    public pop: number;
    public sys: sys;
    public dt_txt: string;

    constructor(dt: number, main: main, weather: weather[], clouds: clouds, wind: wind, visibility: number, pop: number, sys: sys, dt_txt: string) {
        this.dt = dt;
        this.main = main;
        this.weather = weather;
        this.clouds = clouds;
        this.wind = wind;
        this.visibility = visibility;
        this.pop = pop;
        this.sys = sys;
        this.dt_txt = dt_txt;
    }
}