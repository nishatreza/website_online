import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFavoriteMiddleComponent } from './profile-favorite-middle.component';

describe('ProfileFavoriteMiddleComponent', () => {
  let component: ProfileFavoriteMiddleComponent;
  let fixture: ComponentFixture<ProfileFavoriteMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFavoriteMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFavoriteMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
