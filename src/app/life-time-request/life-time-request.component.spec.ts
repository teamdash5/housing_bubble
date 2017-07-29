import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeTimeRequestComponent } from './life-time-request.component';

describe('LifeTimeRequestComponent', () => {
  let component: LifeTimeRequestComponent;
  let fixture: ComponentFixture<LifeTimeRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeTimeRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeTimeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
