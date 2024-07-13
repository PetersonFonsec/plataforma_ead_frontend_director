import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskChoiceComponent } from './task-choice.component';

describe('LessonChoiceComponent', () => {
  let component: TaskChoiceComponent;
  let fixture: ComponentFixture<TaskChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskChoiceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
