import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageOfferComponent } from './landing-page-offer.component';

describe('LandingPageOfferComponent', () => {
  let component: LandingPageOfferComponent;
  let fixture: ComponentFixture<LandingPageOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
