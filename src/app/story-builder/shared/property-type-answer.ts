import { LifeTimeAnswer } from './life-time-answer';
import { PropertyType, PROPERTY_TYPES } from '../../shared/life-time';
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
