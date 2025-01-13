import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskChoiceComponent } from './task-choice.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { routes } from 'app/app.routes';

describe('LessonChoiceComponent', () => {
  let component: TaskChoiceComponent;
  let fixture: ComponentFixture<TaskChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskChoiceComponent],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
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
