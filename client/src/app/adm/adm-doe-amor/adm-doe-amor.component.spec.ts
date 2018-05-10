import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDoeAmorComponent } from './adm-doe-amor.component';

describe('AdmDoeAmorComponent', () => {
  let component: AdmDoeAmorComponent;
  let fixture: ComponentFixture<AdmDoeAmorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDoeAmorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDoeAmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
