import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CollegeService } from './college.service';

describe('CollegeService', () => {
  let service: CollegeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CollegeService]
    });
    service = TestBed.inject(CollegeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
