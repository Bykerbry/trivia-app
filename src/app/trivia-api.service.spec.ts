import { TestBed } from '@angular/core/testing';

import { TriviaApiService } from './trivia-api.service';

describe('TriviaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TriviaApiService = TestBed.get(TriviaApiService);
    expect(service).toBeTruthy();
  });
});
