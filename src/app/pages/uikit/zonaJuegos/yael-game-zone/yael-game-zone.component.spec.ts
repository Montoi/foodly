import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YaelGameZoneComponent } from './yael-game-zone.component';

describe('YaelGameZoneComponent', () => {
  let component: YaelGameZoneComponent;
  let fixture: ComponentFixture<YaelGameZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YaelGameZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YaelGameZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
