import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFollowingMiddleComponent } from './profile-following-middle.component';

describe('ProfileFollowingMiddleComponent', () => {
  let component: ProfileFollowingMiddleComponent;
  let fixture: ComponentFixture<ProfileFollowingMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFollowingMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFollowingMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
