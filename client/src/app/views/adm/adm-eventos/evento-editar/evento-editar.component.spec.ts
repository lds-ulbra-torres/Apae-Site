import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoEditarComponent } from './evento-editar.component';

describe('EventoEditarComponent', () => {
  let component: EventoEditarComponent;
  let fixture: ComponentFixture<EventoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
