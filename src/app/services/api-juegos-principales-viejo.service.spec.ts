import { TestBed } from '@angular/core/testing';

import { ApiJuegosPrincipalesVIEJOService } from './api-juegos-principales-viejo.service';

describe('ApiJuegosPrincipalesVIEJOService', () => {
  let service: ApiJuegosPrincipalesVIEJOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiJuegosPrincipalesVIEJOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
