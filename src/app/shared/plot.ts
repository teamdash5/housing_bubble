import {Story} from './story';
import {LifeTime} from './life-time';

export class Plot {
  private _stories: Story[];

  public get stories(): Story[] {
    return this._stories;
  }

  public static createPlot(lifeTime: LifeTime): Plot {
    const plot = new Plot();
    // TODO: do something smart about plotting your lifetime.
    plot._stories = [
      Story.createStory(`Born in ${lifeTime.YearOfBirth}...`),
      Story.createStory(`... they grey up playing ${lifeTime.gamesFromYouth}... `),
      Story.createStory(`... and listening to ${lifeTime.musicFromTeens}.`),
      Story.createStory(`They had the misfortune to be there for ${lifeTime.annoyingNewsEventFromLife}...`),
      Story.createStory(`... but they also witnessed ${lifeTime.positiveNewsEventFromLife}.`),
    ];

    return plot;
  }
}
