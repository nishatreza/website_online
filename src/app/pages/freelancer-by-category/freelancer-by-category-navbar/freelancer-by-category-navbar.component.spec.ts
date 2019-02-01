import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerByCategoryNavbarComponent } from './freelancer-by-category-navbar.component';

describe('FreelancerByCategoryNavbarComponent', () => {
  let component: FreelancerByCategoryNavbarComponent;
  let fixture: ComponentFixture<FreelancerByCategoryNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerByCategoryNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerByCategoryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
