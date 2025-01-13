import { TestBed } from '@angular/core/testing';
import { TrustUrlPipe } from './trust-url.pipe';

describe('TrustUrlPipe', () => {
  let pipe: TrustUrlPipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    }).compileComponents();

    TestBed.runInInjectionContext(() => {
      pipe = new TrustUrlPipe();
    });
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
