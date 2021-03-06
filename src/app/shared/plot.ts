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

    const images:StoryImages = lifeTime.yearOfBirth < 1980 ? babyBoomerImages : (lifeTime.yearOfBirth < 2000 ? genXimages : futureImages)

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

      /*Story.createStory(
        `After school, ${lifeTime.pronounHeShe} went on an overseas trip to London...`
      
      ),

      Story.createStory(
        `... costing ${'TODO'}% of ${lifeTime.pronounHisHer} house deposit!`
      
      ),*/

      Story.createStory(
        `After getting a job, ${lifeTime.pronounHeShe} started saving for ${lifeTime.pronounHisHer} first house with a salary of ${lifeTime.salary}...`,
        images.house
      ),

      Story.createStory(
        `...it took ${lifeTime.weeksToSaveDeposit} weeks (without paying tax, rent, or eating!) to save a 20% deposit.`,
      
      ),

      Story.createStory(
        `Once purchased, ${lifeTime.pronounHeShe} spent ${lifeTime.percentageOfIncomeOnMortgage} of ${lifeTime.pronounHisHer} pre-tax income on mortgage repayments.`,
        images.moneySpent
      ),

      Story.createStory(
        `Thanks to an interest rate of ${lifeTime.interestRate}...`,
        images.interestRate
      ),
      
      Story.createStory(
        `... ${lifeTime.pronounHeShe} paid the bank ${lifeTime.totalHouseInterest} in interest, which is ${lifeTime.percentageHouseInterest} of all money ${lifeTime.pronounHeShe} generously paid the bank.`,

      ),
      
      Story.createStory(
        `Hmmm. It seems like it was pretty tough for ${lifeTime.name} to buy a house. I wonder if anyone else found it any easier?`,
      
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
  moneySpent: string,
  house: string,
  interestRate: string,
}

const babyBoomerImages:StoryImages = {
  gamesFromYouth: 'Etch-a-sketch.jpg',
  musicFromTeens: Math.random() > 0.5 ? 'Elvis.jpg' : 'The Beatles.jpg',
  annoyingNewsEventFromLife: 'Rick Astley.jpg',
  positiveNewsEventFromLife: 'Berlin Wall.jpg',
  moneySpent: 'big money pile.jpg',
  house: '80s house.jpg',
  interestRate: '1988 interest chart.png',
}

const genXimages:StoryImages = {
  gamesFromYouth: Math.random() > 0.5 ? 'PS1.jpg' : 'SNES.jpg',
  musicFromTeens: Math.random() > 0.5 ? 'Nirvana.jpg' : 'Spice Girls 2.jpg',
  annoyingNewsEventFromLife: 'Meatloaf.png',
  positiveNewsEventFromLife: 'Sorry_Day_poster.jpg',
  moneySpent: 'small money pile.jpeg',
  house: 'modern house.jpg',
  interestRate: '2017 interest chart.png',
}

const futureImages:StoryImages = {
  gamesFromYouth: 'ipad.png',
  musicFromTeens: 'justin bieber.jpg',
  annoyingNewsEventFromLife: 'kitten flu.jpg',
  positiveNewsEventFromLife: 'trump.png',
  moneySpent: 'trump.png',
  house: 'future house.jpg',
  interestRate: '2017 interest chart.png',
}