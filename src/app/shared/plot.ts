import {Story} from './story';
import {LifeTime} from './life-time';

export class Plot {
  private _stories: Story[];

  private _lifeTime: LifeTime

  public get stories(): Story[] {
    return this._stories;
  }

  public get lifeTime(): LifeTime {
    return this._lifeTime
  }

  public static createPlot(lifeTime: LifeTime): Plot {
    const plot = new Plot();
    // TODO: do something smart about plotting your lifetime.
    plot._stories = [
      Story.createStory(`Born in ${lifeTime.yearOfBirth}...`),
      Story.createStory(`... ${lifeTime.pronounHeShe} grew up playing ${lifeTime.gamesFromYouth}... `),
      Story.createStory(`... and listening to ${lifeTime.musicFromTeens}.`),
      Story.createStory(`${lifeTime.pronounHeShe} had the misfortune to be there for ${lifeTime.annoyingNewsEventFromLife}...`),
      Story.createStory(`... but ${lifeTime.pronounHeShe} also got witness ${lifeTime.positiveNewsEventFromLife}.`),
    ];

    plot._lifeTime = lifeTime

    return plot;
  }
}
