import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDownloadsComponent } from './profile-downloads.component';

describe('ProfileDownloadsComponent', () => {
  let component: ProfileDownloadsComponent;
  let fixture: ComponentFixture<ProfileDownloadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDownloadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
