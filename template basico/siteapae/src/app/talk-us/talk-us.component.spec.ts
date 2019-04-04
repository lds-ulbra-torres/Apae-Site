import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkUsComponent } from './talk-us.component';

describe('TalkUsComponent', () => {
  let component: TalkUsComponent;
  let fixture: ComponentFixture<TalkUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
