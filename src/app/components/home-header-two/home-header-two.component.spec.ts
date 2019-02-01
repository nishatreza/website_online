import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeaderTwoComponent } from './home-header-two.component';

describe('HomeHeaderTwoComponent', () => {
  let component: HomeHeaderTwoComponent;
  let fixture: ComponentFixture<HomeHeaderTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHeaderTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeaderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
