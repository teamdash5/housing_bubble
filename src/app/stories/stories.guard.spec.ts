import { TestBed, async, inject } from '@angular/core/testing';

import { StoriesGuard } from './stories.guard';

describe('StoriesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoriesGuard]
    });
  });

  it('should ...', inject([StoriesGuard], (guard: StoriesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
