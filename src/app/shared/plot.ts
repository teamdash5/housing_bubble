import {Story} from './story';
import {LifeTime} from './life-time';

export class Plot {
  private _stories: Story[];

  public get stories(): Story[] {
    return this._stories;
  }

  public static createPlot(lifeTime: LifeTime): Plot {
    const plot = new Plot();
    //TODO: do something smart about plotting your lifetime.
    plot._stories = [
      Story.createStory("Born in "),
      Story.createStory("Growing up watching toy stories."),
      Story.createStory("Went to University"),
      Story.createStory("Hecs"),
      Story.createStory("Jobs"),
      Story.createStory("Got a deposit! $$$$"),
      Story.createStory("Buying a house with 10% interest rate, paying it off in 10 years"),
      Story.createStory("Oops, you are a female, Buying a house with 10% interest rate, pyaing it of in 20 years.")
    ];

    return plot;
  }
}
