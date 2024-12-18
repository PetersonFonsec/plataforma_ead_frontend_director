import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonFormLoadingComponent } from './lesson-form-loading.component';

describe('LessonFormLoadingComponent', () => {
  let component: LessonFormLoadingComponent;
  let fixture: ComponentFixture<LessonFormLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonFormLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonFormLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
