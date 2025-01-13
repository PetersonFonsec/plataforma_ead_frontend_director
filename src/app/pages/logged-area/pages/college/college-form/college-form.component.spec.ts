import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeFormComponent } from './college-form.component';
import { CollegeForm } from '../model/college.model';

describe('CollegeFormComponent', () => {
  let component: CollegeFormComponent;
  let fixture: ComponentFixture<CollegeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CollegeFormComponent);
    component = fixture.componentInstance;
    component.payload = new CollegeForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
