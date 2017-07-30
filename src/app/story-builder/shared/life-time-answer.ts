import { JOBS, Job, GENDER, Gender,
         Education, EDUCATIONS, PropertyType,
         PROPERTY_TYPES, getName } from '../../shared/life-time';

export class LifeTimeAnswer<T> {
  protected _icon: string;
  protected _label: T;

  public get label(): T {
    return this._label;
  }

  public get description(): string {
    return this._label.toString();
  }

  public get icon(): string {
    return this._icon;
  }
}

export class JobAnswer extends LifeTimeAnswer<Job> {
  public static createJobAnswers(): JobAnswer[] {
    return JOBS.map(job => {
      const answer = new JobAnswer();
      answer._label = job as Job;
      answer._icon = '';
      return answer;
    });
  }
}

export type YearOfPurchase = 1988 | 2017 | 2050;
export const YEAR_OF_PURCHASES:YearOfPurchase[] = [1988, 2017];
export const FUTURE_YEAR_OF_PURCHAES:YearOfPurchase = 2050;
export type GenderAge = {
  gender: Gender,
  age: YearOfPurchase
};

export class GenderAgeAnswer extends LifeTimeAnswer<GenderAge> {

  public static createGenderAgeAnswers(): GenderAgeAnswer[] {
    const answers1: GenderAgeAnswer[] = this.buildGenderAgeAnswers(YEAR_OF_PURCHASES[0] as YearOfPurchase);
    const answers2: GenderAgeAnswer[] = this.buildGenderAgeAnswers(YEAR_OF_PURCHASES[1] as YearOfPurchase);
    return answers1.concat(answers2);
  }

  public static createFutureGenderAgeAnswers(): GenderAgeAnswer[] {
    return this.buildGenderAgeAnswers(FUTURE_YEAR_OF_PURCHAES);
  }

  private static buildGenderAgeAnswers(yearOfPurchase: YearOfPurchase): GenderAgeAnswer[] {
    return GENDER.map(g => {
        const answer = new GenderAgeAnswer();
        answer._label = { gender: g as Gender, age: yearOfPurchase } as GenderAge;
        answer._icon = `${g}-${yearOfPurchase}`;
        return answer;
      });
  }

  public get description(): string {
    return getName(this._label.gender, this._label.age - 30) + ", buying a house in " + this._label.age;
  }

  constructor() {
    super();
  }
}

export class EducationAnswer extends LifeTimeAnswer<Education> {
  public static createEducationAnswers(): EducationAnswer[] {
    return EDUCATIONS.map(e => {
      const answer = new EducationAnswer();
      answer._label = e as Education;
      answer._icon = '';
      return answer;
    });
  }
}

export class PropertyTypeAnswer extends LifeTimeAnswer<PropertyType> {
  public static createPropertyTypeAnswers(): PropertyTypeAnswer[] {
    return PROPERTY_TYPES.map(p => {
      const answer = new PropertyTypeAnswer();
      answer._label = p as PropertyType;
      answer._icon = '';
      return answer;
    });
  }
}
