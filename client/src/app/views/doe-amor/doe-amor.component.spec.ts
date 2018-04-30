import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoeAmorComponent } from './doe-amor.component';

describe('DoeAmorComponent', () => {
  let component: DoeAmorComponent;
  let fixture: ComponentFixture<DoeAmorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoeAmorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoeAmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
