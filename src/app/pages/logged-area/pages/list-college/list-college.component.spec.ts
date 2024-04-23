import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ListCollegeComponent } from './list-college.component';

describe('ListCollegeComponent', () => {
  let component: ListCollegeComponent;
  let fixture: ComponentFixture<ListCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCollegeComponent, HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
