import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApaeComponent } from './apae.component';

describe('ApaeComponent', () => {
  let component: ApaeComponent;
  let fixture: ComponentFixture<ApaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
