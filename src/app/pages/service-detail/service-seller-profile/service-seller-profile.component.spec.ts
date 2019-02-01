import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSellerProfileComponent } from './service-seller-profile.component';

describe('ServiceSellerProfileComponent', () => {
  let component: ServiceSellerProfileComponent;
  let fixture: ComponentFixture<ServiceSellerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSellerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSellerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
