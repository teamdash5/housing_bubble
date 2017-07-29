import { LifeTimeAnswer } from './life-time-answer';

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

  public constructor() {}
}
