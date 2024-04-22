import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';


import { AuthComponent } from './auth.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { trigger } from '@angular/animations';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthComponent, NoopAnimationsModule, RouterTestingModule]
    })
      .overrideComponent(AuthComponent, {
        set: {
          animations: [trigger('fade', [])]
        }
      })
      .compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
