import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageSellerProfileComponent } from './package-seller-profile.component';

describe('PackageSellerProfileComponent', () => {
  let component: PackageSellerProfileComponent;
  let fixture: ComponentFixture<PackageSellerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageSellerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageSellerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
