import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HildeGameZoneComponent } from './hilde-game-zone.component';

describe('HildeGameZoneComponent', () => {
  let component: HildeGameZoneComponent;
  let fixture: ComponentFixture<HildeGameZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HildeGameZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HildeGameZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
