type Job = 'Nurse' | 'Builder' | 'Teacher' | 'Lawyer';
type Gender = 'Male' | 'Female';
type PropertyType = 'House' | 'Unit';

export const JOBS = ['Nurse', 'Builder', 'Teacher', 'Lawyer'];
export const GENDER = ['Male', 'Female'];
export const PROPERTY_TYPES = ['House', 'Unit'];

export class LifeTime {
  private _job: Job;
  private _gender: Gender;
  private _propertyType: PropertyType;
  private _yob: number;

  public get job(): Job {
    return this._job;
  }

  public get gender(): Gender {
    return this._gender;
  }

  public get PropertyType(): PropertyType {
    return this._propertyType;
  }

  public get YearOfBirth(): number {
    return this._yob;
  }

  public static CreateLifeTime(job: Job, gender: Gender, propertyType: PropertyType, yob: number): LifeTime {
    const lifeTime = new LifeTime();
    lifeTime._job = job;
    lifeTime._gender = gender;
    lifeTime._propertyType = propertyType;
    lifeTime._yob = yob;
    return lifeTime;
  }
}

