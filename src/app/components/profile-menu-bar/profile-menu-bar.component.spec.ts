import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMenuBarComponent } from './profile-menu-bar.component';

describe('ProfileMenuBarComponent', () => {
  let component: ProfileMenuBarComponent;
  let fixture: ComponentFixture<ProfileMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
