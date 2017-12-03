import { TestBed, inject } from '@angular/core/testing';

import { ProdutoClienteService } from './produto-cliente.service';

describe('ProdutoClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutoClienteService]
    });
  });

  it('should be created', inject([ProdutoClienteService], (service: ProdutoClienteService) => {
    expect(service).toBeTruthy();
  }));
});
