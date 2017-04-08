import { TestBed, inject } from '@angular/core/testing';

import { V3ServiceService } from './v3-service.service';

describe('V3ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [V3ServiceService]
    });
  });

  it('should ...', inject([V3ServiceService], (service: V3ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
