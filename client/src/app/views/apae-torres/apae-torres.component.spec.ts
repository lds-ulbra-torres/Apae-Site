import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApaeTorresComponent } from './apae-torres.component';

describe('ApaeTorresComponent', () => {
  let component: ApaeTorresComponent;
  let fixture: ComponentFixture<ApaeTorresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApaeTorresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApaeTorresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
