import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPackagesComponent } from './seller-packages.component';

describe('SellerPackagesComponent', () => {
  let component: SellerPackagesComponent;
  let fixture: ComponentFixture<SellerPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
