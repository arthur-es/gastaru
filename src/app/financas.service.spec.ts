import { TestBed } from '@angular/core/testing';

import { FinancasService } from './financas.service';

describe('FinancasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinancasService = TestBed.get(FinancasService);
    expect(service).toBeTruthy();
  });
});
