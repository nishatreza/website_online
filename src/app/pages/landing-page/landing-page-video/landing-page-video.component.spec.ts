import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageVideoComponent } from './landing-page-video.component';

describe('LandingPageVideoComponent', () => {
  let component: LandingPageVideoComponent;
  let fixture: ComponentFixture<LandingPageVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
