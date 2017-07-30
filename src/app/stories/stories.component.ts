import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { PageScrollService, PageScrollInstance, EasingLogic } from 'ng2-page-scroll'
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
  constructor(private _storiesService: StoriesService , private _pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this._storiesService.plot.subscribe(p => {
      this.plot = p;
    });
  }

  ngAfterViewInit() {
    let currentStory = 0;

    // https://github.com/Nolanus/ng2-page-scroll#readme
    const easeLogic: EasingLogic = {
        ease: (t: number, b: number, c: number, d: number): number => {
            // easeInOutExpo easing
            if (t === 0) return b;
            if (t === d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    };

    const scrollToNext = () => {
      console.log(`story-${currentStory}`);
      console.log(document.getElementById(`story-${currentStory}`));
      let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
        document: this.document,
        scrollTarget: `#story-${currentStory}`,
        pageScrollInterruptible: false,
        pageScrollDuration: 3000,
        pageScrollEasingLogic: easeLogic,
      });

      this._pageScrollService.start(pageScrollInstance);
      currentStory ++;
      console.log("End start scrolling")

      setTimeout(scrollToNext, 4000)
    }

    scrollToNext()
  }
}
