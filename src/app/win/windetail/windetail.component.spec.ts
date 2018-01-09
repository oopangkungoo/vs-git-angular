import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindetailComponent } from './windetail.component';

describe('WindetailComponent', () => {
  let component: WindetailComponent;
  let fixture: ComponentFixture<WindetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
