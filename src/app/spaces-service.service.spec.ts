import { TestBed } from '@angular/core/testing';

import { SpacesServiceService } from './spaces-service.service';

describe('SpacesServiceService', () => {
  let service: SpacesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
