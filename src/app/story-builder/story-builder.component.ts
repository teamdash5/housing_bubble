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
    
  }

  triggerBuildStories($event): void {
    const lifeTime = LifeTime.CreateLifeTime('Builder', 'Male', 'Unit', 1958, 'University');
    this._storiesService.buildStories(lifeTime);
    this._router.navigate(['/stories']);
  }
}
