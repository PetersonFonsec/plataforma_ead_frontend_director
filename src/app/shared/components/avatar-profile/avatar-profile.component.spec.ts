import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarProfileComponent } from './avatar-profile.component';

describe('AvatarProfileComponent', () => {
  let component: AvatarProfileComponent;
  let fixture: ComponentFixture<AvatarProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarProfileComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AvatarProfileComponent);
    fixture.componentRef.setInput("content", {
      src: "string",
      name: "string"
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
