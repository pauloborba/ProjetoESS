import { TestBed, inject } from '@angular/core/testing';

import { HomeClienteService } from './home-cliente.service';

describe('HomeClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeClienteService]
    });
  });

  it('should be created', inject([HomeClienteService], (service: HomeClienteService) => {
    expect(service).toBeTruthy();
  }));
});
