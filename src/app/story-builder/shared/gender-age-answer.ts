import { GENDER, Gender } from '../../shared/life-time';
import { LifeTimeAnswer } from './life-time-answer';

export type YearOfPurchase = '1988' | '2017' | 'Future';
export const YEAR_OF_PURCHASES = ['1988', '2017'];
export const FUTURE_YEAR_OF_PURCHAES = 'Future';
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
        answer._icon = '';
        return answer;
      });
  }
}
