import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeItemComponent } from './college-item.component';
import { collageMock } from '../../../services/college/collage.mock';

describe('CollegeItemComponent', () => {
  let component: CollegeItemComponent;
  let fixture: ComponentFixture<CollegeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CollegeItemComponent);
    component = fixture.componentInstance;
    component.college = collageMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
