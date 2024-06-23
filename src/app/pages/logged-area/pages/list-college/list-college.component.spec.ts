import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ListCollegeComponent } from './list-college.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ListCollegeComponent', () => {
  let component: ListCollegeComponent;
  let fixture: ComponentFixture<ListCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ListCollegeComponent, RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
