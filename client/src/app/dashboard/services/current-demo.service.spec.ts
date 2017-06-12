import { TestBed, inject } from '@angular/core/testing';

import { CurrentDemoService } from './current-demo.service';

describe('CurrentDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentDemoService]
    });
  });

  it('should be created', inject([CurrentDemoService], (service: CurrentDemoService) => {
    expect(service).toBeTruthy();
  }));
});
