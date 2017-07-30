export type Job = 'Nurse' | 'Builder' | 'Teacher' | 'Lawyer';
export type Gender = 'Male' | 'Female';
export type PropertyType = 'House' | 'Unit';
export type Education = 'TAFE' | 'High School' | 'Primary School' | 'University';

export const JOBS = ['Nurse', 'Builder', 'Teacher', 'Lawyer'];
export const GENDER = ['Male', 'Female'];
export const PROPERTY_TYPES = ['House', 'Unit'];
export const EDUCATIONS = ['TAFE', 'High School', 'Primary School', 'University'];

export class LifeTime {
  private _job: Job;
  private _gender: Gender;
  private _propertyType: PropertyType;
  private _yob: number;
  private _education: Education;

  public get job(): Job {
    return this._job;
  }

  public get gender(): Gender {
    return this._gender;
  }

  public get propertyType(): PropertyType {
    return this._propertyType;
  }

  public get yearOfBirth(): number {
    return this._yob;
  }

  public get education(): Education {
    return this._education;
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

  public get pronounHisHer(): string {
    return this.gender === "Male" ? "his" : "her"
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

  public get totalHouseInterest(): string {
    return this.infoAboutLife.totalHouseInterest
  }

  public get percentageHouseInterest(): string {
    return this.infoAboutLife.percentageHouseInterest
  }

  public get interestRate(): string {
    return this.infoAboutLife.interestRate
  }

  public get salary(): string {
    return this.infoAboutLife.salary(this.gender)
  }

  public get percentageOfIncomeOnMortgage(): string {
    return this.infoAboutLife.percentageOfIncomeOnMortgage(this.gender)
  }

  public get weeksToSaveDeposit(): number {
    return this.infoAboutLife.weeksToSaveDeposit(this.gender)
  }

  public static CreateLifeTime(job: Job, gender: Gender, propertyType: PropertyType, yob: number, education: Education): LifeTime {
    const lifeTime = new LifeTime();
    lifeTime._job = job;
    lifeTime._gender = gender;
    lifeTime._propertyType = propertyType;
    lifeTime._yob = yob;
    lifeTime._education = education;
    return lifeTime;
  }
}

type InfoAboutLife = {
  gamesFromYouth: string, // "They grew up playing {{ gamesFromYouth }}..."
  musicFromTeens: string, // "... and listening to {{ musicFromTeens }}."
  annoyingNewsEventFromLife: string, // "They had the misfortune to be there for {{ annoyingNewsEventFromLife }}..."
  positiveNewsEventFromLife: string, // "... but they also witnessed {{ positiveNewsEventFromLife }}."
  name: (gender:Gender) => string, // Returns a common name for this generation.
  salary: (gender:Gender) => string, // Include '$' at start, and commas between thousands.
  percentageOfIncomeOnMortgage: (gender:Gender) => string, // Include '%' at the end
  weeksToSaveDeposit: (gender:Gender) => number,
  totalHouseInterest: string,
  percentageHouseInterest: string,
  interestRate: string,
}

const babyBoomerInfo:InfoAboutLife = {
  gamesFromYouth: "G.I. Joe and with Etch-a-Sketch",
  musicFromTeens: "The Beatles and Elvis",
  annoyingNewsEventFromLife: "the debut of Rick Astley's \"Never Gonna Give you up\"",
  positiveNewsEventFromLife: "the collapse of the Berlin Wall",
  name: (gender) => gender === "Male" ? "Daniel" : "Dora",
  salary: (gender) => gender === 'Male' ? '$27,164' : '$21,434',
  percentageOfIncomeOnMortgage: (gender) => gender === 'Male' ? '40%' : '',
  weeksToSaveDeposit: (gender) => gender === 'Male' ? 36.37 : 46.09,
  totalHouseInterest: '$67,308.65',
  percentageHouseInterest: '70.85%',
  interestRate: '14.08%',
}

const genXInfo:InfoAboutLife = {
  gamesFromYouth: "Playstation and Nintendo",
  musicFromTeens: "Spice Girls and Nirvana",
  annoyingNewsEventFromLife: "Meat Loaf singing in the AFL grand final",
  positiveNewsEventFromLife: "the national apology to the stolen generation",
  name: (gender:Gender) => gender === "Female" ? "Laura" : "Pete",
  salary: (gender) => gender === 'Male' ? '$83,902' : '$70,392',
  percentageOfIncomeOnMortgage: (gender) => gender == 'Male' ? '34%' : '',
  weeksToSaveDeposit: (gender) => gender === 'Male' ? 68.17 : 81.26,
  totalHouseInterest: '$196,671.18',
  percentageHouseInterest: '35.76%',
  interestRate: '5.06%',
}
