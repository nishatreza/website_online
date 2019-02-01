import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerByCategoryHeaderComponent } from './freelancer-by-category-header.component';

describe('FreelancerByCategoryHeaderComponent', () => {
  let component: FreelancerByCategoryHeaderComponent;
  let fixture: ComponentFixture<FreelancerByCategoryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerByCategoryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerByCategoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
