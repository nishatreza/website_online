import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDesignTopComponent } from './logo-design-top.component';

describe('LogoDesignTopComponent', () => {
  let component: LogoDesignTopComponent;
  let fixture: ComponentFixture<LogoDesignTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoDesignTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoDesignTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
