import { Education, EDUCATIONS } from '../../shared/life-time';
import { LifeTimeAnswer } from './life-time-answer';
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
