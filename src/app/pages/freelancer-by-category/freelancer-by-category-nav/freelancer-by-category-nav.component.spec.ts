import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import{AuthService} from '../../../shared/services/auth.service'

import { FreelancerByCategoryNavComponent } from './freelancer-by-category-nav.component';

describe('FreelancerByCategoryNavComponent', () => {
  let component: FreelancerByCategoryNavComponent;
  let fixture: ComponentFixture<FreelancerByCategoryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerByCategoryNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerByCategoryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
