import { Component, OnInit } from '@angular/core';
import { StoriesService } from './stories.service';
import { Plot } from '../shared/plot';
import { LifeTime } from '../shared/life-time';
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  
  plot: Plot;
  constructor(private _storiesService: StoriesService) { }

  ngOnInit() {
    const lifeTime = LifeTime.CreateLifeTime('Builder', 'Female', 'Unit', 1990);
    this._storiesService.buildStories(lifeTime);
    this._storiesService.plot.subscribe(p => {
      this.plot = p;
    });
    
  }
}
