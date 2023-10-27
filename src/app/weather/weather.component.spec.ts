import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { TodayComponent } from '../today-weather/today-weather.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FutureComponent } from '../future-weather/future-weather.component';

describe('WeatherComponent', () => {
    let component: WeatherComponent;
    let fixture: ComponentFixture<WeatherComponent>;
    let httpController: HttpTestingController;
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [
                WeatherComponent,
                TodayComponent,
                FutureComponent
            ]
        });
        httpController = TestBed.inject(HttpTestingController);
        fixture = TestBed.createComponent(WeatherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        httpController.verify();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
