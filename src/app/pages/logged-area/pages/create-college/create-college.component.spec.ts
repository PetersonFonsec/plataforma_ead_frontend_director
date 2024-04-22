import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CreateCollegeComponent } from './create-college.component';

describe('CreateCollegeComponent', () => {
  let component: CreateCollegeComponent;
  let fixture: ComponentFixture<CreateCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCollegeComponent, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
