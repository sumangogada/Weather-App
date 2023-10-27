export class main {
    public temp: number;
    public feels_like: number;
    public temp_min: number;
    public temp_max: number;
    public pressure: number;
    public sea_level: number;
    public grnd_level: number;
    public humidity: number;
    public temp_kf: number;

    constructor(temp: number, feels_like: number, temp_min: number, temp_max: number, pressure: number, sea_level: number, grnd_level: number, humidity: number, temp_kf: number) {

        this.temp = temp;
        this.feels_like = feels_like;
        this.temp_min = temp_min;
        this.temp_max = temp_max;
        this.pressure = pressure;
        this.sea_level = sea_level;
        this.grnd_level = grnd_level;
        this.humidity = humidity;
        this.temp_kf = temp_kf;

    }
}