import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeItemLoaderComponent } from './college-item-loader.component';

describe('CollegeItemLoaderComponent', () => {
  let component: CollegeItemLoaderComponent;
  let fixture: ComponentFixture<CollegeItemLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeItemLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeItemLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
