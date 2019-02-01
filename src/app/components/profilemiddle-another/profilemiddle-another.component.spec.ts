import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilemiddleAnotherComponent } from './profilemiddle-another.component';

describe('ProfilemiddleAnotherComponent', () => {
  let component: ProfilemiddleAnotherComponent;
  let fixture: ComponentFixture<ProfilemiddleAnotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilemiddleAnotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilemiddleAnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
