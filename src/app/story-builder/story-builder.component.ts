import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StoriesService } from '../stories/stories.service';
import { LifeTime } from '../shared/life-time';
import { StoryBuilderQuestions, AnsweringProgress, StoryBuilderService } from './story-builder.service';
import { LifeTimeQuestion, EducationQuestion, GenderAgeQuestion, PropertyTypeQuestion, JobQuestion } from './shared/life-time-question';
import { GenderAge, GenderAgeAnswer, EducationAnswer, PropertyTypeAnswer } from './shared/life-time-answer';


@Component({
  selector: 'app-story-builder',
  templateUrl: './story-builder.component.html',
  styleUrls: ['./story-builder.component.css']
})
export class StoryBuilderComponent implements OnInit {
  questions: StoryBuilderQuestions;
  currentQuestion: GenderAgeQuestion | EducationQuestion | PropertyTypeQuestion;
  progress: AnsweringProgress;
  constructor(private _storiesService: StoriesService, private _storyBuilderService: StoryBuilderService, private _router: Router) { }

  ngOnInit() {
    this.questions = this._storyBuilderService.questions;

    this._storyBuilderService.fetchQuestionToAnswer().subscribe(
      question => this.currentQuestion = question
    );

    this._storyBuilderService.fetchAnsweringProgress.subscribe(
      progress => this.progress = progress
    );
  }

  triggerBuildStories(): void {
    if (this.progress !== 3) {
      return;
    }

    const job = 'Builder';
    const gender = this.questions.genderAge.selectedAnswer.label.gender;
    const age = +this.questions.genderAge.selectedAnswer.label.age;
    const propertyType = this.questions.propertyTypes.selectedAnswer.label;
    const education = this.questions.education.selectedAnswer.label;
    const lifeTime = LifeTime.CreateLifeTime(job, gender, propertyType, age, education);
    this._storiesService.buildStories(lifeTime);
    this._router.navigate(['/stories']);
  }

  pickAnswer($event: GenderAgeAnswer | EducationAnswer | PropertyTypeAnswer): void {
    this._storyBuilderService.selectAnswer($event);
    this._storyBuilderService.fetchQuestionToAnswer().subscribe(question => this.currentQuestion = question);
    this._storyBuilderService.fetchAnsweringProgress.subscribe(
      progress => {
        this.progress = progress;
        if (progress === 3) {
          this.triggerBuildStories();
        }
      }
    );
  }
}
