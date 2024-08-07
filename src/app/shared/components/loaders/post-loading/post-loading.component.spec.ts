import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoadingComponent } from './post-loading.component';

describe('PostLoadingComponent', () => {
  let component: PostLoadingComponent;
  let fixture: ComponentFixture<PostLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
