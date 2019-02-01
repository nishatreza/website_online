import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsNavbarComponent } from './graphics-navbar.component';

describe('GraphicsNavbarComponent', () => {
  let component: GraphicsNavbarComponent;
  let fixture: ComponentFixture<GraphicsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
