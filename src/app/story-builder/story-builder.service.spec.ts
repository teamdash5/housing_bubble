import { TestBed, inject } from '@angular/core/testing';

import { StoryBuilderService } from './story-builder.service';

describe('StoryBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoryBuilderService]
    });
  });

  it('should ...', inject([StoryBuilderService], (service: StoryBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
