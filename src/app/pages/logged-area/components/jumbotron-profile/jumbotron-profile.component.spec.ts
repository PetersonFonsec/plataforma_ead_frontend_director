import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { JumbotronProfileComponent } from './jumbotron-profile.component';

describe('JumbotronProfileComponent', () => {
  let component: JumbotronProfileComponent;
  let fixture: ComponentFixture<JumbotronProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JumbotronProfileComponent, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JumbotronProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
