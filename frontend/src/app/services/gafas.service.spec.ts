import { TestBed } from '@angular/core/testing';

import { GafasService } from './gafas.service';

describe('GafasService', () => {
  let service: GafasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GafasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
