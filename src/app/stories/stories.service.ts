import { Injectable } from '@angular/core';
import { Plot } from '../shared/plot';
import { LifeTime } from '../shared/life-time';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class StoriesService {

  private _lifeTime: LifeTime;
  private _plot: Observable<Plot>;

  public get plot(): Observable<Plot> {
    return this._plot;
  }

  public get lifeTime(): LifeTime {
    return this._lifeTime;
  }

  constructor() {
    
  }

  public buildStories(lifeTime: LifeTime): void {
    const plot = Plot.createPlot(lifeTime);
    this._plot = Observable.of(plot);
    this._lifeTime = lifeTime;
  }
}
