import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMultiselectDropdownComponent } from './angular-multiselect-dropdown.component';

describe('AngularMultiselectDropdownComponent', () => {
  let component: AngularMultiselectDropdownComponent;
  let fixture: ComponentFixture<AngularMultiselectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularMultiselectDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMultiselectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
