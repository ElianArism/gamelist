import { TestBed } from '@angular/core/testing';

import { ApiJuegos2.0Service } from './api-juegos2.0.service';

describe('ApiJuegos2.0Service', () => {
  let service: ApiJuegos2.0Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiJuegos2.0Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
