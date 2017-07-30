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

    const images:StoryImages = lifeTime.yearOfBirth < 1990 ? earlyImages : lateImages

    plot._stories = [
      Story.createStory(`Born in ${lifeTime.yearOfBirth}...`),
      
      Story.createStory(
        `... ${lifeTime.pronounHeShe} grew up playing ${lifeTime.gamesFromYouth}... `,
        images.gamesFromYouth
      ),
      
      Story.createStory(
        `... and listening to ${lifeTime.musicFromTeens}.`,
        images.musicFromTeens
      ),

      Story.createStory(
        `${lifeTime.pronounHeShe} had the misfortune to be there for ${lifeTime.annoyingNewsEventFromLife}...`,
        images.annoyingNewsEventFromLife
      ),

      Story.createStory(
        `... but ${lifeTime.pronounHeShe} also got to witness ${lifeTime.positiveNewsEventFromLife}.`,
        images.positiveNewsEventFromLife
      ),
    ];

    plot._lifeTime = lifeTime

    return plot;
  }
}

type StoryImages = {
  gamesFromYouth: string,
  musicFromTeens: string,
  annoyingNewsEventFromLife: string,
  positiveNewsEventFromLife: string,
}

const earlyImages:StoryImages = {
  gamesFromYouth: 'Etch-a-sketch.jpg',
  musicFromTeens: 'Elvis.jpg',
  annoyingNewsEventFromLife: 'Rick Astley.jpg',
  positiveNewsEventFromLife: 'Berlin Wall.jpg',
}

const lateImages:StoryImages = {
  gamesFromYouth: 'Etch-a-sketch.jpg',
  musicFromTeens: 'Elvis.jpg',
  annoyingNewsEventFromLife: 'Rick Astley.jpg',
  positiveNewsEventFromLife: 'Berlin Wall.jpg',
}