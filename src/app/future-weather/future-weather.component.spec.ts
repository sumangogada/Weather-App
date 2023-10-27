import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureComponent } from './future-weather.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('FutureComponent', () => {
    let component: FutureComponent;
    let fixture: ComponentFixture<FutureComponent>;
    let httpController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [FutureComponent]
        });
        httpController = TestBed.inject(HttpTestingController);
        fixture = TestBed.createComponent(FutureComponent);
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
