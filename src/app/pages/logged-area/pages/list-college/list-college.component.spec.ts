import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCollegeComponent } from './list-college.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListCollegeComponent', () => {
  let component: ListCollegeComponent;
  let fixture: ComponentFixture<ListCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCollegeComponent, HttpClientTestingModule]
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
