import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMiddleComponent } from './profile-middle.component';

describe('ProfileMiddleComponent', () => {
  let component: ProfileMiddleComponent;
  let fixture: ComponentFixture<ProfileMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
