import { TestBed } from '@angular/core/testing';

import { FolderInfoService } from './folder-info.service';

describe('FolderInfoService', () => {
  let service: FolderInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FolderInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
