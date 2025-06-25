import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCompactComponentComponent } from './header-compact-component.component';

describe('HeaderCompactComponentComponent', () => {
  let component: HeaderCompactComponentComponent;
  let fixture: ComponentFixture<HeaderCompactComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCompactComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCompactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
