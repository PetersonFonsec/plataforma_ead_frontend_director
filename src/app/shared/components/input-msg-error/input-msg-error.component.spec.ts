import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMsgErrorComponent } from './input-msg-error.component';

describe('InputMsgErrorComponent', () => {
  let component: InputMsgErrorComponent;
  let fixture: ComponentFixture<InputMsgErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputMsgErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMsgErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
