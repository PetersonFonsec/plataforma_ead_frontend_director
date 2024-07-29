import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThumbLoaderComponent } from './page-thumb-loader.component';

describe('PageThumbLoaderComponent', () => {
  let component: PageThumbLoaderComponent;
  let fixture: ComponentFixture<PageThumbLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageThumbLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageThumbLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
