import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageNewNavbarComponent } from './landing-page-new-navbar.component';

describe('LandingPageNewNavbarComponent', () => {
  let component: LandingPageNewNavbarComponent;
  let fixture: ComponentFixture<LandingPageNewNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageNewNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageNewNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
