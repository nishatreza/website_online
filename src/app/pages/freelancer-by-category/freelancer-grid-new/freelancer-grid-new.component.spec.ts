import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerGridNewComponent } from './freelancer-grid-new.component';

describe('FreelancerGridNewComponent', () => {
  let component: FreelancerGridNewComponent;
  let fixture: ComponentFixture<FreelancerGridNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerGridNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerGridNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
