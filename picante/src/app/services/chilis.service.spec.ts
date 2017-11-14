import { TestBed, inject } from '@angular/core/testing';

import { ChilisService } from './chilis.service';

describe('ChilisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChilisService]
    });
  });

  it('should be created', inject([ChilisService], (service: ChilisService) => {
    expect(service).toBeTruthy();
  }));
});
