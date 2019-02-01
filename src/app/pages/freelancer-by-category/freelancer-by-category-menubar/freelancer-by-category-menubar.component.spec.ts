import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerByCategoryMenubarComponent } from './freelancer-by-category-menubar.component';

describe('FreelancerByCategoryMenubarComponent', () => {
  let component: FreelancerByCategoryMenubarComponent;
  let fixture: ComponentFixture<FreelancerByCategoryMenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerByCategoryMenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerByCategoryMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
