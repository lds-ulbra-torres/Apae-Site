import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceirosPorCategoriaComponent } from './parceiros-por-categoria.component';

describe('ParceirosPorCategoriaComponent', () => {
  let component: ParceirosPorCategoriaComponent;
  let fixture: ComponentFixture<ParceirosPorCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParceirosPorCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParceirosPorCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
