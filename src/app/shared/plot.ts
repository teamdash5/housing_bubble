import {Story} from './story';
import {LifeTime} from './life-time';

export class Plot {
  private _stories: Story[];

  public get stories(): Story[] {
    return this._stories;
  }

  public static createPlot(lifeTime: LifeTime): Plot {
    const plot = new Plot();
    plot._stories = [
      Story.createStory("Born in ")
    ];

    return plot;
  }
}
