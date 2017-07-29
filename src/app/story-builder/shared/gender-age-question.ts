import { LifeTimeQuestion } from './life-time-question';
import { GenderAgeAnswer } from './gender-age-answer';
import { GenderAge } from './gender-age-answer';

export class GenderAgeQuestion extends LifeTimeQuestion<GenderAge> {
  public static createGenderAgeQuestions(): GenderAgeQuestion {
    const lifeTimeQuestion = new GenderAgeQuestion();
    lifeTimeQuestion._answers = GenderAgeAnswer.createGenderAgeAnswers();
    lifeTimeQuestion._icon = '';
    return lifeTimeQuestion;
  }
}
