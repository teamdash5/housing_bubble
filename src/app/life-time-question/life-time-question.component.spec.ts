import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeTimeQuestionComponent } from './life-time-question.component';

describe('LifeTimeQuestionComponent', () => {
  let component: LifeTimeQuestionComponent;
  let fixture: ComponentFixture<LifeTimeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeTimeQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeTimeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
