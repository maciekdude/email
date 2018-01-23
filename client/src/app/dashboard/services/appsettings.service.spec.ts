import { TestBed, inject } from '@angular/core/testing';

import { AppsettingsService } from './appsettings.service';

describe('AppsettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppsettingsService]
    });
  });

  it('should be created', inject([AppsettingsService], (service: AppsettingsService) => {
    expect(service).toBeTruthy();
  }));
});
