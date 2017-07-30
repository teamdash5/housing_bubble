import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { PageScrollService, PageScrollInstance, EasingLogic } from 'ng2-page-scroll'
import { StoriesService } from './stories.service';
import { StoryBuilderService } from '../story-builder/story-builder.service'
import { Plot } from '../shared/plot';
import { LifeTime } from '../shared/life-time';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  
  plot: Plot;
  constructor(private _storyBuilderService:StoryBuilderService, private _storiesService: StoriesService, private _router: Router, private _pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this._storiesService.plot.subscribe(p => {
      this.plot = p;
    });
  }

  tryAgain($event) {
      this._storyBuilderService.init();
      this._router.navigate(['/buildyourstories']);
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

    window.scrollTo(0, 0)

    const scrollToNext = () => {
      let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
        document: this.document,
        scrollTarget: `#story-${currentStory}`,
        pageScrollInterruptible: false,
        pageScrollDuration: 3000,
        pageScrollOffset: 150,
        pageScrollEasingLogic: easeLogic,
      });

      this._pageScrollService.start(pageScrollInstance);
      currentStory ++;

      setTimeout(scrollToNext, 4000)
    }

     scrollToNext()
  }
}
