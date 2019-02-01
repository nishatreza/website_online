import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageNewNavComponent } from './landing-page-new-nav.component';

describe('LandingPageNewNavComponent', () => {
  let component: LandingPageNewNavComponent;
  let fixture: ComponentFixture<LandingPageNewNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageNewNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageNewNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
