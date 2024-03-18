import { TestBed } from '@angular/core/testing';

import { ShowLayoutService } from './show-layout.service';

describe('ShowLayoutService', () => {
  let service: ShowLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
