import { TestBed, inject } from '@angular/core/testing';

import { MasterFeedbackService } from './master-feedback.service';

describe('MasterFeedbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterFeedbackService]
    });
  });

  it('should be created', inject([MasterFeedbackService], (service: MasterFeedbackService) => {
    expect(service).toBeTruthy();
  }));
});
