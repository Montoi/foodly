import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationItemComponentComponent } from './notification-item-component.component';

describe('NotificationItemComponentComponent', () => {
  let component: NotificationItemComponentComponent;
  let fixture: ComponentFixture<NotificationItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationItemComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
