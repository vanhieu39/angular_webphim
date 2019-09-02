import { TestBed } from '@angular/core/testing';

import { QuanLyUserService } from './quan-ly-user.service';

describe('QuanLyUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuanLyUserService = TestBed.get(QuanLyUserService);
    expect(service).toBeTruthy();
  });
});
