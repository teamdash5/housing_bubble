import { LifeTimeQuestion } from './life-time-question';
import { JobAnswer } from './job-answer';
import { Job } from '../../shared/life-time';

export class JobQuestion extends LifeTimeQuestion<Job> {
  
  public static createQuestion(): LifeTimeQuestion<Job> {
    const lifeTimeQuestion = new JobQuestion();
    lifeTimeQuestion._answers = JobAnswer.createJobAnswers();
    lifeTimeQuestion._icon = '';
    return lifeTimeQuestion;
  }
}