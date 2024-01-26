import { TestBed } from '@angular/core/testing';

import { RiservatoService } from './riservato.service';

describe('RiservatoService', () => {
  let service: RiservatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiservatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
