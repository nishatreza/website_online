import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageWebsiteProComponent } from './landing-page-website-pro.component';

describe('LandingPageWebsiteProComponent', () => {
  let component: LandingPageWebsiteProComponent;
  let fixture: ComponentFixture<LandingPageWebsiteProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageWebsiteProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageWebsiteProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
