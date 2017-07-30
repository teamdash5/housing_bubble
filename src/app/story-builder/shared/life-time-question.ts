import { LifeTimeAnswer, PropertyTypeAnswer, JobAnswer,
         GenderAgeAnswer, GenderAge, EducationAnswer } from './life-time-answer';
import { PropertyType, Job, Education } from '../../shared/life-time';

export class LifeTimeQuestion<T> {
  protected _answers: LifeTimeAnswer<T>[];
  protected _selectedAnswer: LifeTimeAnswer<T>;
  protected _icon: string;

  public get answers(): LifeTimeAnswer<T>[] {
    return this._answers;
  }

  public get selectedAnswer(): LifeTimeAnswer<T> {
    return this._selectedAnswer;
  }

  public get icon(): string {
    return this._icon;
  }

  public selectAnswer(answer: LifeTimeAnswer<T>) {
    this._selectedAnswer = answer;
  }

  public constructor() {}
}

export class PropertyTypeQuestion extends LifeTimeQuestion<PropertyType> {
  public static createPropertyTypeQuestion(): PropertyTypeQuestion {
    const question = new PropertyTypeQuestion();
    question._answers = PropertyTypeAnswer.createPropertyTypeAnswers();
    question._icon = '';
    return question;
  }

  public selectAnswer(answer: PropertyTypeAnswer): void {
    super.selectAnswer(answer);
  }
}

export class JobQuestion extends LifeTimeQuestion<Job> {
  
  public static createQuestion(): LifeTimeQuestion<Job> {
    const lifeTimeQuestion = new JobQuestion();
    lifeTimeQuestion._answers = JobAnswer.createJobAnswers();
    lifeTimeQuestion._icon = '';
    return lifeTimeQuestion;
  }

  public selectAnswer(answer: JobAnswer): void {
    super.selectAnswer(answer);
  }
}

export class GenderAgeQuestion extends LifeTimeQuestion<GenderAge> {
  public static createGenderAgeQuestions(): GenderAgeQuestion {
    const lifeTimeQuestion = new GenderAgeQuestion();
    lifeTimeQuestion._answers = GenderAgeAnswer.createGenderAgeAnswers();
    lifeTimeQuestion._icon = '';
    return lifeTimeQuestion;
  }

  public static createFutureGenderAgeQuestions(): GenderAgeQuestion {
    const lifeTimeQuestion = new GenderAgeQuestion();
    lifeTimeQuestion._answers = GenderAgeAnswer.createGenderAgeAnswers().concat(GenderAgeAnswer.createFutureGenderAgeAnswers());
    lifeTimeQuestion._icon = 'gender-question';
    return lifeTimeQuestion;
  }

  public selectAnswer(answer: GenderAgeAnswer): void {
    super.selectAnswer(answer);
  }
}

export class EducationQuestion extends LifeTimeQuestion<Education> {
  public static createEducationQuestion(): EducationQuestion {
    const question = new EducationQuestion();
    question._answers = EducationAnswer.createEducationAnswers();
    question._icon = '';
    return question;
  }

  public selectAnswere(answer: EducationAnswer): void {
    super.selectAnswer(answer);
  }
}
