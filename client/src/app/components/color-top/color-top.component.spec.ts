import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTopComponent } from './color-top.component';

describe('ColorTopComponent', () => {
  let component: ColorTopComponent;
  let fixture: ComponentFixture<ColorTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
