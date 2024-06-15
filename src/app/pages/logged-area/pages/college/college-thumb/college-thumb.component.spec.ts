import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeThumbComponent } from './college-thumb.component';

describe('CollegeThumbComponent', () => {
  let component: CollegeThumbComponent;
  let fixture: ComponentFixture<CollegeThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeThumbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollegeThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
