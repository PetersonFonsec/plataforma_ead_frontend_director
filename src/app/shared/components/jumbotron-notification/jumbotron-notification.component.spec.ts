import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronNotificationComponent } from './jumbotron-notification.component';

describe('JumbotronNotificationComponent', () => {
  let component: JumbotronNotificationComponent;
  let fixture: ComponentFixture<JumbotronNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JumbotronNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JumbotronNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
