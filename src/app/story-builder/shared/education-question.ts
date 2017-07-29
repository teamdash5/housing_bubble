import { LifeTimeQuestion } from './life-time-question';
import { EducationAnswer } from './education-answer';
import { Education } from '../../shared/life-time';

export class EducationQuestion extends LifeTimeQuestion<Education> {
  public static createEducationQuestion(): EducationQuestion {
    const question = new EducationQuestion();
    question._answers = EducationAnswer.createEducationAnswers();
    question._icon = '';
    return question;
  }
}
