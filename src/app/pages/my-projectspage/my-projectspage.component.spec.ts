import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectspageComponent } from './my-projectspage.component';

describe('MyProjectspageComponent', () => {
  let component: MyProjectspageComponent;
  let fixture: ComponentFixture<MyProjectspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProjectspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
