import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsFooterComponent } from './graphics-footer.component';

describe('GraphicsFooterComponent', () => {
  let component: GraphicsFooterComponent;
  let fixture: ComponentFixture<GraphicsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
