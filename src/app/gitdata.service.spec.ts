import { TestBed, inject } from '@angular/core/testing';

import { GitdataService } from './gitdata.service';

describe('GitdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitdataService]
    });
  });

  it('should be created', inject([GitdataService], (service: GitdataService) => {
    expect(service).toBeTruthy();
  }));
});
