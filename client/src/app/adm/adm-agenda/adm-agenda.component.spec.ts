import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAgendaComponent } from './adm-agenda.component';

describe('AdmAgendaComponent', () => {
  let component: AdmAgendaComponent;
  let fixture: ComponentFixture<AdmAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
