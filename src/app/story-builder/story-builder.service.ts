import { Injectable } from '@angular/core';
import { LifeTimeQuestion, EducationQuestion, GenderAgeQuestion, PropertyTypeQuestion, JobQuestion } from './shared/life-time-question';
import { LifeTimeAnswer, EducationAnswer, GenderAgeAnswer, PropertyTypeAnswer } from './shared/life-time-answer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';

export type StoryBuilderQuestions = {
  genderAge: GenderAgeQuestion,
  education: EducationQuestion,
  propertyTypes: PropertyTypeQuestion
};

export type AnsweringProgress = 0 | 1 | 2 | 3;

@Injectable()
export class StoryBuilderService {
  private _questions: StoryBuilderQuestions;
  private _answeringProgress: Observable<AnsweringProgress>;

  constructor() {
    this.init();
  }

  public init(withFuture: boolean = true): void {
    this._questions = {
      genderAge: withFuture ? GenderAgeQuestion.createFutureGenderAgeQuestions() : GenderAgeQuestion.createGenderAgeQuestions(),
      education: EducationQuestion.createEducationQuestion(),
      propertyTypes: PropertyTypeQuestion.createPropertyTypeQuestion()
    };
    this._answeringProgress = Observable.of(0 as AnsweringProgress);
  }

  public get questions(): StoryBuilderQuestions {
    return this._questions;
  }

  public fetchQuestionToAnswer(): Observable<GenderAgeQuestion | EducationQuestion | PropertyTypeQuestion> {
    return this.fetchAnsweringProgress.map(progress => {
      switch (progress) {
        case 0:
          return this.questions.genderAge;
        case 1:
          return this.questions.education;
        case 2:
          return this.questions.propertyTypes
        default:
          return null;
      }
    });
  }

  private updateAnsweringProgress(): void {
    let progress: AnsweringProgress = 0;
    if (this.questions.genderAge.selectedAnswer) {
      progress++;
    }

    if (this.questions.education.selectedAnswer) {
      progress++;
    }

    if (this.questions.propertyTypes.selectedAnswer) {
      progress++;
    }

    this._answeringProgress = Observable.of(progress as AnsweringProgress);
  }

  public get fetchAnsweringProgress(): Observable<AnsweringProgress> {
    return this._answeringProgress;
  }

  public selectAnswer($event: GenderAgeAnswer | EducationAnswer | PropertyTypeAnswer): void {
    if ($event instanceof GenderAgeAnswer) {
      this.questions.genderAge.selectAnswer($event);
    }

    if ($event instanceof EducationAnswer) {
      this.questions.education.selectAnswer($event);
    }

    if ($event instanceof PropertyTypeAnswer) {
      this.questions.propertyTypes.selectAnswer($event);
    }

    this.updateAnsweringProgress();
  }
}
