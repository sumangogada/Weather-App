import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayComponent } from './today-weather.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';



describe('TodayComponent', () => {
    let component: TodayComponent;
    let fixture: ComponentFixture<TodayComponent>;
    let httpController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [TodayComponent]
        });
        httpController = TestBed.inject(HttpTestingController);
        fixture = TestBed.createComponent(TodayComponent);
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
