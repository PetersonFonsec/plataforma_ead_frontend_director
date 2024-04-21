import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeItemComponent } from './college-item.component';

describe('CollegeItemComponent', () => {
  let component: CollegeItemComponent;
  let fixture: ComponentFixture<CollegeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollegeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
