import { LifeTimeAnswer } from './life-time-answer';
import { JOBS, Job } from '../../shared/life-time';
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
