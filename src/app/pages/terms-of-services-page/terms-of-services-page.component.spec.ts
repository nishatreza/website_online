import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOfServicesPageComponent } from './terms-of-services-page.component';

describe('TermsOfServicesPageComponent', () => {
  let component: TermsOfServicesPageComponent;
  let fixture: ComponentFixture<TermsOfServicesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsOfServicesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsOfServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
