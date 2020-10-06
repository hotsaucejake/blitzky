import { TestBed } from '@angular/core/testing';

import { BitcloudsService } from './bitclouds.service';

describe('BitcloudsService', () => {
  let service: BitcloudsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitcloudsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
