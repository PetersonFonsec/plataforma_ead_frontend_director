import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMsgErrorComponent } from './input-msg-error.component';
import { FormControl, NgModel } from '@angular/forms';

describe('InputMsgErrorComponent', () => {
  let component: InputMsgErrorComponent;
  let fixture: ComponentFixture<InputMsgErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputMsgErrorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputMsgErrorComponent);
    fixture.componentRef.setInput('controler', new FormControl());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
