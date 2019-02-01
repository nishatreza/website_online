import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesBlockComponent } from './advantages-block.component';

describe('AdvantagesBlockComponent', () => {
  let component: AdvantagesBlockComponent;
  let fixture: ComponentFixture<AdvantagesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvantagesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantagesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
