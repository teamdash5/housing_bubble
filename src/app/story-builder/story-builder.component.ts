import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StoriesService } from '../stories/stories.service';
import { LifeTime } from '../shared/life-time';

@Component({
  selector: 'app-story-builder',
  templateUrl: './story-builder.component.html',
  styleUrls: ['./story-builder.component.css']
})
export class StoryBuilderComponent implements OnInit {

  constructor(private _storiesService: StoriesService, private _router: Router) { }

  ngOnInit() {
    const lifeTime = LifeTime.CreateLifeTime('Builder', 'Female', 'Unit', 1990);
    this._storiesService.buildStories(lifeTime);
  }

  triggerBuildStories($event): void {
    this._router.navigate(['/stories']);
  }
}
