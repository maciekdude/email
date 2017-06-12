import { TestBed, inject } from '@angular/core/testing';

import { EmailsStorageService } from './emails-storage.service';

describe('EmailsStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailsStorageService]
    });
  });

  it('should be created', inject([EmailsStorageService], (service: EmailsStorageService) => {
    expect(service).toBeTruthy();
  }));
});
