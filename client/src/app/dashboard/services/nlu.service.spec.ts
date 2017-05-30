import { TestBed, inject } from '@angular/core/testing';

import { NluService } from './nlu.service';

describe('NluService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NluService]
    });
  });

  it('should be created', inject([NluService], (service: NluService) => {
    expect(service).toBeTruthy();
  }));
});
