import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPlayerComponent } from './first-player.component';

describe('FirstPlayerComponent', () => {
  let component: FirstPlayerComponent;
  let fixture: ComponentFixture<FirstPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
