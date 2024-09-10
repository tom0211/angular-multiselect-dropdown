import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MultiSelectOption } from './multi-select-option';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-angular-multiselect-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'angular-multiselect-dropdown.component.html',
  styleUrl: 'angular-multiselect-dropdown.component.scss'
})
export class AngularMultiselectDropdownComponent {
  @Input() options: MultiSelectOption[] = [];
  @Input() selectedOptions: MultiSelectOption[] = [];
  @Input() placeholder = 'Select options'; // Placeholder for dropdown button
  @Input() limitSelection: number | null = null; // Limit on number of selections
  @Input() enableFilter = true; // Enable or disable filter search bar
  @Input() selectAll = true; // Enable or disable select all button
  @Input() disabled = false; // Disable the dropdown functionality
  @Output() selectionChange = new EventEmitter<MultiSelectOption[]>(); // Output for selected options
  @Output() selectedOptionsChange = new EventEmitter<MultiSelectOption[]>();

  dropdownOpen = false; // Track the dropdown state
  searchText = ''; // Track the search/filter input

  constructor(private elementRef: ElementRef) {}

  // Toggle dropdown open/close
  toggleDropdown() {
    if (this.disabled) return; // Prevent dropdown from opening if disabled
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Handle search input changes
  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchText = input.value;
  }

  // Handle option selection
  onOptionSelect(option: MultiSelectOption) {
    if (option.disabled) return; // Don't allow selection of disabled options

    const isSelected = this.isSelected(option);

    if (isSelected) {
      // Remove from selected options if already selected
      const index = this.selectedOptions.findIndex(o => o.id === option.id);
      if (index > -1) {
        this.selectedOptions.splice(index, 1);
      }
    } else {
      // Add to selected options if not already selected and within limit
      if (!this.limitSelection || this.selectedOptions.length < this.limitSelection) {
        this.selectedOptions.push(option);
      } else {
        // Optionally, you can notify the user that the limit has been reached
        console.warn(`Selection limit of ${this.limitSelection} reached`);
        const checkbox = document.querySelector(`input[type='checkbox'][value='${option.id}']`) as HTMLInputElement;
        if (checkbox) {
          checkbox.checked = false;
        }
      }
    }
    this.selectedOptionsChange.emit(this.selectedOptions); // Emit change for two-way binding
    this.selectionChange.emit(this.selectedOptions);
  }

  // Check if the option is selected
  isSelected(option: MultiSelectOption): boolean {
    return this.selectedOptions.some(o => o.id === option.id);
  }

  // Filter options based on search input
  filterOptions(): MultiSelectOption[] {
    if (!this.searchText) return this.options;
    return this.options.filter(option =>
      option.text.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Remove a selected option
  removeSelected(option: MultiSelectOption, event: MouseEvent) {
    event.stopPropagation(); // Prevent the click from propagating to document click event
    const index = this.selectedOptions.findIndex(o => o.id === option.id);
    if (index > -1) {
      this.selectedOptions.splice(index, 1);
      this.selectedOptionsChange.emit(this.selectedOptions); // Emit change for two-way binding
      this.selectionChange.emit(this.selectedOptions);
    }
  }

  // Select all options if allowed
  selectAllOptions() {
    const filteredOptions = this.filterOptions(); // Get filtered options
    if (this.limitSelection) {
      // Select up to the limit, excluding disabled options
      this.selectedOptions = filteredOptions
        .filter(option => !option.disabled) // Exclude disabled options
        .slice(0, this.limitSelection); // Limit selection
    } else {
      // Select all filtered options if no limit is set
      this.selectedOptions = filteredOptions.filter(option => !option.disabled);
    }
    this.selectionChange.emit(this.selectedOptions); // Emit updated selection
    this.selectedOptionsChange.emit(this.selectedOptions); // Emit change for two-way binding
  }
  // De Select all optiones
  deselectAllOptions() {
    const filteredOptions = this.filterOptions(); // Get filtered options
    this.selectedOptions = this.selectedOptions.filter(option => !filteredOptions.includes(option));
    this.selectionChange.emit(this.selectedOptions); // Emit updated selection
    this.selectedOptionsChange.emit(this.selectedOptions); // Emit change for two-way binding
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.dropdownOpen = false; // Close dropdown if clicked outside
    }
  }
}
