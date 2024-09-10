import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularMultiselectDropdownComponent } from 'angular-multiselect-dropdown';
import { MultiSelectOption } from 'angular-multiselect-dropdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularMultiselectDropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  options: MultiSelectOption[] = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2', disabled: true },
    { id: 3, text: 'Option 3' }
  ];

  selectedOptions: MultiSelectOption[] = [];

  onSelectedOptionsChange(selected: MultiSelectOption[]) {
    console.log('Selected Options:', selected);
    this.selectedOptions = selected;
  }
}
