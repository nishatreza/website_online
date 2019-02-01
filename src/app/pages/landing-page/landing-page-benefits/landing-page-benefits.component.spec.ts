import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageBenefitsComponent } from './landing-page-benefits.component';

describe('LandingPageBenefitsComponent', () => {
  let component: LandingPageBenefitsComponent;
  let fixture: ComponentFixture<LandingPageBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
