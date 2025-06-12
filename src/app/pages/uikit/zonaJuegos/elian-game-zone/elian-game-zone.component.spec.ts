import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElianGameZoneComponent } from './elian-game-zone.component';

describe('ElianGameZoneComponent', () => {
  let component: ElianGameZoneComponent;
  let fixture: ComponentFixture<ElianGameZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElianGameZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElianGameZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
