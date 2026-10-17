import { TestBed } from '@angular/core/testing';

import { ProductoJsonService } from './producto-json-service';

describe('ProductoJsonService', () => {
  let service: ProductoJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
