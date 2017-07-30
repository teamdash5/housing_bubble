import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StoriesService } from '../stories/stories.service';
import { LifeTime } from '../shared/life-time';
import { StoryBuilderQuestions, AnsweringProgress, StoryBuilderService } from './story-builder.service';
import { LifeTimeQuestion, EducationQuestion, GenderAgeQuestion, PropertyTypeQuestion, JobQuestion } from './shared/life-time-question';
import { GenderAge } from './shared/life-time-answer';

@Component({
  selector: 'app-story-builder',
  templateUrl: './story-builder.component.html',
  styleUrls: ['./story-builder.component.css']
})
export class StoryBuilderComponent implements OnInit {
  questions: StoryBuilderQuestions;
  currentQuestion: GenderAgeQuestion | EducationQuestion | PropertyTypeQuestion;
  constructor(private _storiesService: StoriesService, private _storyBuilderService: StoryBuilderService, private _router: Router) { }

  ngOnInit() {
    this.questions = this._storyBuilderService.questions;
    this._storyBuilderService.fetchQuestionToAnswer().subscribe(
      question => this.currentQuestion = question
    );
  }

  triggerBuildStories($event): void {
    const lifeTime = LifeTime.CreateLifeTime('Builder', 'Male', 'Unit', 1958, 'University');
    this._storiesService.buildStories(lifeTime);
    this._router.navigate(['/stories']);
  }

  public isGenderAgeQuestion(question: GenderAgeQuestion | EducationQuestion | PropertyTypeQuestion): boolean {
    return question instanceof GenderAgeQuestion;
  }
}
