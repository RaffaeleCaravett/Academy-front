import { TestBed } from '@angular/core/testing';

import { ConfermaService } from './conferma.service';

describe('ConfermaService', () => {
  let service: ConfermaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfermaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
