import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThumbComponent } from './page-thumb.component';

describe('PageThumbComponent', () => {
  let component: PageThumbComponent;
  let fixture: ComponentFixture<PageThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageThumbComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageThumbComponent);
    fixture.componentRef.setInput('college', { name: 'Test College', logo: 'test-logo.png' });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
