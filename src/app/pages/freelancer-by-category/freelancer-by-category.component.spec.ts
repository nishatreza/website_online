import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerByCategoryComponent } from './freelancer-by-category.component';

describe('FreelancerByCategoryComponent', () => {
  let component: FreelancerByCategoryComponent;
  let fixture: ComponentFixture<FreelancerByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
