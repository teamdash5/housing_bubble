type Job = 'Nurse' | 'Builder' | 'Teacher' | 'Lawyer';
type Gender = 'Male' | 'Female';
type PropertyType = 'House' | 'Unit';

export const JOBS = ['Nurse', 'Builder', 'Teacher', 'Lawyer'];
export const GENDER = ['Male', 'Female'];
export const PROPERTY_TYPES = ['House', 'Unit'];

export class LifeTime {
  private _job: Job;
  private _gender: Gender;
  private _propertyType: PropertyType;
  private _yob: number;

  public get job(): Job {
    return this._job;
  }

  public get gender(): Gender {
    return this._gender;
  }

  public get PropertyType(): PropertyType {
    return this._propertyType;
  }

  public get YearOfBirth(): number {
    return this._yob;
  }

  private get infoAboutLife(): InfoAboutLife {
    return this._yob < 1987 ? babyBoomerInfo : genXInfo;
  }

  public get name(): string {
    return this.infoAboutLife.name(this.gender)
  }

  public get gamesFromYouth(): string {
    return this.infoAboutLife.gamesFromYouth
  }

  public get pronounHeShe(): string {
    return this.gender === "Male" ? "he" : "she"
  }

  public get musicFromTeens(): string {
    return this.infoAboutLife.musicFromTeens
  }

  public get annoyingNewsEventFromLife(): string {
    return this.infoAboutLife.annoyingNewsEventFromLife
  }

  public get positiveNewsEventFromLife(): string {
    return this.infoAboutLife.positiveNewsEventFromLife
  }

  public static CreateLifeTime(job: Job, gender: Gender, propertyType: PropertyType, yob: number): LifeTime {
    const lifeTime = new LifeTime();
    lifeTime._job = job;
    lifeTime._gender = gender;
    lifeTime._propertyType = propertyType;
    lifeTime._yob = yob;
    return lifeTime;
  }
}

type InfoAboutLife = {
  gamesFromYouth: string, // "They grew up playing {{ gamesFromYouth }}..."
  musicFromTeens: string, // "... and listening to {{ musicFromTeens }}."
  annoyingNewsEventFromLife: string, // "They had the misfortune to be there for {{ annoyingNewsEventFromLife }}..."
  positiveNewsEventFromLife: string, // "... but they also witnessed {{ positiveNewsEventFromLife }}."
  name: (gender:Gender) => string, // Returns a common name for this generation.
}

const babyBoomerInfo:InfoAboutLife = {
  gamesFromYouth: "G.I. Joe and with Etch-a-Sketch",
  musicFromTeens: "The Beatles and Elvis",
  annoyingNewsEventFromLife: "the debut of Rick Astley's \"Never Gonna Give you up\"",
  positiveNewsEventFromLife: "the collapse of the Berlin Wall",
  name: (gender:Gender) => gender === "Male" ? "Daniel" : "Dora",
}

const genXInfo:InfoAboutLife = {
  gamesFromYouth: "Playstation and Nintendo",
  musicFromTeens: "Spice Girls and Nirvana",
  annoyingNewsEventFromLife: "Meat Loaf singing in the AFL grand final",
  positiveNewsEventFromLife: "the national apology to the stolen generation",
  name: (gender:Gender) => gender === "Female" ? "Laura" : "Pete",
}
