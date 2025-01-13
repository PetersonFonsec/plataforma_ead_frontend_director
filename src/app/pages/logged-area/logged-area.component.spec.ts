import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { trigger } from '@angular/animations';

import { mockUser, mockUserLogged } from '@shared/services/user-logged/user-logged.mock';
import { AsideMenuComponent } from '@shared/components/aside-menu/aside-menu.component';
import { UserLoggedService } from '@shared/services/user-logged/user-logged.service';
import { LoggedAreaComponent } from './logged-area.component';
import { routes } from 'app/app.routes';

describe('LoggedAreaComponent', () => {
  let component: LoggedAreaComponent;
  let fixture: ComponentFixture<LoggedAreaComponent>;
  let userLoggedService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggedAreaComponent, NoopAnimationsModule, AsideMenuComponent],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
    })
      .overrideComponent(LoggedAreaComponent, {
        set: {
          animations: [trigger('fade', [])]
        }
      })
      .compileComponents();

    fixture = TestBed.createComponent(LoggedAreaComponent);
    component = fixture.componentInstance;
    userLoggedService = TestBed.inject(UserLoggedService);
    userLoggedService.seUserLogged(mockUserLogged);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
