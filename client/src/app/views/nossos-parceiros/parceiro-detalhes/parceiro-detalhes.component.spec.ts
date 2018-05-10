import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceiroDetalhesComponent } from './parceiro-detalhes.component';

describe('ParceiroDetalhesComponent', () => {
  let component: ParceiroDetalhesComponent;
  let fixture: ComponentFixture<ParceiroDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParceiroDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParceiroDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
