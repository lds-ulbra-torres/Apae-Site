import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoieComponent } from './apoie.component';

describe('ApoieComponent', () => {
  let component: ApoieComponent;
  let fixture: ComponentFixture<ApoieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
