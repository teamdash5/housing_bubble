import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GenderAgeQuestion, EducationQuestion, PropertyTypeQuestion } from '../story-builder/shared/life-time-question';
import { GenderAgeAnswer, EducationAnswer, PropertyTypeAnswer } from '../story-builder/shared/life-time-answer';

@Component({
  selector: 'app-life-time-question',
  templateUrl: './life-time-question.component.html',
  styleUrls: ['./life-time-question.component.css']
})
export class LifeTimeQuestionComponent implements OnInit {
  @Input() question: GenderAgeQuestion | EducationQuestion | PropertyTypeQuestion;
  @Output() answerPicked: EventEmitter<GenderAgeAnswer | EducationAnswer | PropertyTypeAnswer> = new EventEmitter<GenderAgeAnswer | EducationAnswer | PropertyTypeAnswer>();
  constructor() { }

  ngOnInit() {
  }

  onAnswerClicked($event: MouseEvent, answer: GenderAgeAnswer | EducationAnswer | PropertyTypeAnswer): void {
    $event.preventDefault();
    if ($event.which === 1) {// left click
      this.answerPicked.emit(answer);
    }
  }
}
