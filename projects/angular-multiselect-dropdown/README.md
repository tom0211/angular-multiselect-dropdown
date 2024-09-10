# Angular18 Multiselect Dropdown

A customizable Angular 18 multi-select dropdown component with support for filtering, selection limits, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Inputs](#inputs)
- [Outputs](#outputs)
- [Example](#example)
- [License](#license)

## Installation

To use this library in your Angular project, follow these steps:

1. **Install the package from npm**:

   ```npm install angular18-multiselect-dropdown```

2. **Import the library module in your Angular module**:
    
    ```
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { AngularMultiselectDropdownComponent } from 'angular18-multiselect-dropdown';

    @NgModule({
    declarations: [
        AppComponent,
        AngularMultiselectDropdownComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

## Usage

1. **Add the app-custom-multiselect component to your HTML template**:

    ```
    <app-custom-multiselect
        [options]="options"
        [selectedOptions]="selectedOptions"
        [placeholder]="'Select options'"
        [limitSelection]="5"
        [enableFilter]="true"
        [selectAll]="true"
        [disabled]="false"
        (selectionChange)="onSelectionChange($event)">
    </app-custom-multiselect>
    ```

2. **In your component TypeScript file, define the options and handle events**:

    ```
    import { Component } from '@angular/core';
    import { MultiSelectOption } from 'angular18-multiselect-dropdown';

    @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
    })
    export class AppComponent {
        options: MultiSelectOption[] = [
            { id: 1, text: 'Option 1' },
            { id: 2, text: 'Option 2' },
            { id: 3, text: 'Option 3', disabled: true }
        ];
        selectedOptions: MultiSelectOption[] = [];
        onSelectionChange(selectedOptions: MultiSelectOption[]) {
            console.log('Selection changed:', selectedOptions);
        }
    }
    ```

## Inputs

1. **options**: MultiSelectOption[] - List of options to display in the dropdown. Each option must have id and text properties, and can optionally have a disabled property.
2. **selectedOptions**: MultiSelectOption[] - List of currently selected options.
3. **placeholder**: string - Placeholder text for the dropdown button.
4. **limitSelection**: number | null - Maximum number of selections allowed. If null, no limit is enforced.
5. **enableFilter**: boolean - Whether to show the search/filter bar.
6. **selectAll**: boolean - Whether to show "Select All" and "Deselect All" buttons.
7. **disabled**: boolean - Whether the dropdown is disabled and cannot be interacted with.

## Outputs

**selectionChange**: 

    EventEmitter<MultiSelectOption[]> - Emits when the selection changes, including when selecting or deselecting options.

## Example

1. **HTML**

    ```
    <app-custom-multiselect
    [options]="[
        { id: 1, text: 'Option 1' },
        { id: 2, text: 'Option 2' },
        { id: 3, text: 'Option 3' }
    ]"
    [selectedOptions]="selectedOptions"
    placeholder="Select items"
    [limitSelection]="3"
    [enableFilter]="true"
    [selectAll]="true"
    (selectionChange)="handleSelectionChange($event)"
    </app-custom-multiselect>
    ```

2. **TS**

    ```
    import { Component } from '@angular/core';
    import { MultiSelectOption } from 'angular18-multiselect-dropdown';

    @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
    })
    export class AppComponent {
        options: MultiSelectOption[] = [
            { id: 1, text: 'Option 1' },
            { id: 2, text: 'Option 2' },
            { id: 3, text: 'Option 3' }
        ];
        selectedOptions: MultiSelectOption[] = [];

        handleSelectionChange(selectedOptions: MultiSelectOption[]) {
            console.log('Selection changed:', selectedOptions);
        }       
    }
    ```


## License

This library is licensed under the MIT License. See the LICENSE file for more details.
Feel free to modify any sections to better fit your needs or to add any additional information relevant to your library.
