import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedPageComponent } from './logged-page.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { routes } from 'app/app.routes';

describe('LoggedPageComponent', () => {
  let component: LoggedPageComponent;
  let fixture: ComponentFixture<LoggedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggedPageComponent],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoggedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
