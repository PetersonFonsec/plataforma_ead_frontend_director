import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CollegeService } from './college.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('CollegeService', () => {
  let service: CollegeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [CollegeService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(CollegeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
