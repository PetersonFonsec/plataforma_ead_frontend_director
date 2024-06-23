import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { CreateCollegeComponent } from './create-college.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('CreateCollegeComponent', () => {
  let component: CreateCollegeComponent;
  let fixture: ComponentFixture<CreateCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CreateCollegeComponent, RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
