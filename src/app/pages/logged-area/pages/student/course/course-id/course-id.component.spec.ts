import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseIdComponent } from './course-id.component';

describe('CourseIdComponent', () => {
  let component: CourseIdComponent;
  let fixture: ComponentFixture<CourseIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
