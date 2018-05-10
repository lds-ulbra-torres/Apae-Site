import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmApaeTorresComponent } from './adm-apae-torres.component';

describe('AdmApaeTorresComponent', () => {
  let component: AdmApaeTorresComponent;
  let fixture: ComponentFixture<AdmApaeTorresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmApaeTorresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmApaeTorresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
