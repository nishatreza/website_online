import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMiddleNewComponent } from './profile-middle-new.component';

describe('ProfileMiddleNewComponent', () => {
  let component: ProfileMiddleNewComponent;
  let fixture: ComponentFixture<ProfileMiddleNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMiddleNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMiddleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
