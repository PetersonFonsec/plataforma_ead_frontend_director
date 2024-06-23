import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoggedAreaComponent } from './logged-area.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { trigger } from '@angular/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


describe('LoggedAreaComponent', () => {
  let component: LoggedAreaComponent;
  let fixture: ComponentFixture<LoggedAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [LoggedAreaComponent, NoopAnimationsModule, RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
      .overrideComponent(LoggedAreaComponent, {
        set: {
          animations: [trigger('fade', [])]
        }
      })
      .compileComponents();

    fixture = TestBed.createComponent(LoggedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
