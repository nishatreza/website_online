import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerCategoryFooterComponent } from './freelancer-category-footer.component';

describe('FreelancerCategoryFooterComponent', () => {
  let component: FreelancerCategoryFooterComponent;
  let fixture: ComponentFixture<FreelancerCategoryFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerCategoryFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerCategoryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
