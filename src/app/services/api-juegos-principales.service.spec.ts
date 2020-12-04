import { TestBed } from '@angular/core/testing';

import { ApiJuegosPrincipalesService } from './api-juegos-principales.service';

describe('ApiJuegosPrincipalesService', () => {
  let service: ApiJuegosPrincipalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiJuegosPrincipalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
