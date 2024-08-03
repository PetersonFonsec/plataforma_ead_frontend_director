import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarProfileLoadingComponent } from './avatar-profile-loading.component';

describe('AvatarProfileLoadingComponent', () => {
  let component: AvatarProfileLoadingComponent;
  let fixture: ComponentFixture<AvatarProfileLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarProfileLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarProfileLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
