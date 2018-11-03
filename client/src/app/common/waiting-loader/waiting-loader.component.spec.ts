import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingLoaderComponent } from './waiting-loader.component';

describe('WaitingLoaderComponent', () => {
  let component: WaitingLoaderComponent;
  let fixture: ComponentFixture<WaitingLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
