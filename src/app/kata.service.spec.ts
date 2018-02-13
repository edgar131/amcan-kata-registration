import { TestBed, inject } from '@angular/core/testing';

import { KataService } from './kata.service';

describe('KataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KataService]
    });
  });

  it('should be created', inject([KataService], (service: KataService) => {
    expect(service).toBeTruthy();
  }));
});
