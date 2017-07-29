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
    this._storiesService.plot.subscribe(p => {
      this.plot = p;
    });  
  }
}
