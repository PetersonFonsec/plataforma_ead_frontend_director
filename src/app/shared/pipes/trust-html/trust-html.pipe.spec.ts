import { TestBed } from '@angular/core/testing';

import { TrustHtmlPipe } from './trust-html.pipe';

describe('TrustHtmlPipe', () => {
  let pipe: TrustHtmlPipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    }).compileComponents();

    TestBed.runInInjectionContext(() => {
      pipe = new TrustHtmlPipe();
    });
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
