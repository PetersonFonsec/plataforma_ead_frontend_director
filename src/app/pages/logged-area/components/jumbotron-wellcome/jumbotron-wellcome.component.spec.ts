import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';


import { JumbotronWellcomeComponent } from './jumbotron-wellcome.component';

describe('JumbotronWellcomeComponent', () => {
  let component: JumbotronWellcomeComponent;
  let fixture: ComponentFixture<JumbotronWellcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JumbotronWellcomeComponent, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JumbotronWellcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
