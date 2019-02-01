import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorymenubarComponent } from './categorymenubar.component';

describe('CategorymenubarComponent', () => {
  let component: CategorymenubarComponent;
  let fixture: ComponentFixture<CategorymenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorymenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorymenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
