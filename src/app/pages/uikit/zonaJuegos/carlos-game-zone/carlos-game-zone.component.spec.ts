import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlosGameZoneComponent } from './carlos-game-zone.component';

describe('CarlosGameZoneComponent', () => {
  let component: CarlosGameZoneComponent;
  let fixture: ComponentFixture<CarlosGameZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarlosGameZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarlosGameZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
