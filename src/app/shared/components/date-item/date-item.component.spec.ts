import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateItemComponent } from './date-item.component';

describe('DateItemComponent', () => {
  let component: DateItemComponent;
  let fixture: ComponentFixture<DateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DateItemComponent);
    fixture.componentRef.setInput('date', new Date('2021/10/10'));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
