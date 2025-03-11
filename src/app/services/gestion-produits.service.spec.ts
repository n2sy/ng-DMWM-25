import { TestBed } from '@angular/core/testing';

import { GestionProduitsService } from './gestion-produits.service';

describe('GestionProduitsService', () => {
  let service: GestionProduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionProduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
