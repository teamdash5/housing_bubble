import { LifeTimeQuestion } from './life-time-question';
import { PropertyTypeAnswer } from './property-type-answer';
import { PropertyType } from '../../shared/life-time';
export class PropertyTypeQuestion extends LifeTimeQuestion<PropertyType> {
  public static createPropertyTypeQuestion(): PropertyTypeQuestion {
    const question = new PropertyTypeQuestion();
    question._answers = PropertyTypeAnswer.createPropertyTypeAnswers();
    question._icon = '';
    return question;
  }
}
