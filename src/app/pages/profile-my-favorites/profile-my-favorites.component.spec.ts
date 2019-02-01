import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMyFavoritesComponent } from './profile-my-favorites.component';

describe('ProfileMyFavoritesComponent', () => {
  let component: ProfileMyFavoritesComponent;
  let fixture: ComponentFixture<ProfileMyFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMyFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMyFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
