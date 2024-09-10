import { TestBed } from '@angular/core/testing';

import { AngularMultiselectDropdownService } from './angular-multiselect-dropdown.service';

describe('AngularMultiselectDropdownService', () => {
  let service: AngularMultiselectDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularMultiselectDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
