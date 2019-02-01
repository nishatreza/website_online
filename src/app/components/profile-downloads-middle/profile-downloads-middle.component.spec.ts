import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDownloadsMiddleComponent } from './profile-downloads-middle.component';

describe('ProfileDownloadsMiddleComponent', () => {
  let component: ProfileDownloadsMiddleComponent;
  let fixture: ComponentFixture<ProfileDownloadsMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDownloadsMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDownloadsMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
