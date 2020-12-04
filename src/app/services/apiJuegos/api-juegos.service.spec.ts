import { TestBed } from '@angular/core/testing';

import { ApiJuegosService } from './api-juegos.service';

describe('ApiJuegosService', () => {
  let service: ApiJuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiJuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
