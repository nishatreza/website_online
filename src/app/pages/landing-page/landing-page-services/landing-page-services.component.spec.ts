import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageServicesComponent } from './landing-page-services.component';

describe('LandingPageServicesComponent', () => {
  let component: LandingPageServicesComponent;
  let fixture: ComponentFixture<LandingPageServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
