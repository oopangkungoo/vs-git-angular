import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPlayerComponent } from './confirm-player.component';

describe('ConfirmPlayerComponent', () => {
  let component: ConfirmPlayerComponent;
  let fixture: ComponentFixture<ConfirmPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
