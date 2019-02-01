import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageVideoHeaderComponent } from './landing-page-video-header.component';

describe('LandingPageVideoHeaderComponent', () => {
  let component: LandingPageVideoHeaderComponent;
  let fixture: ComponentFixture<LandingPageVideoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageVideoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageVideoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
