import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicComponent {
  name = new FormControl('Default Name');
  resetNotNull = new FormControl('Default NonNullable', { nonNullable: true });

  /**
   * Reset using explicit value
   */
  resetNewValue() {
    this.resetNotNull.reset('New Value');
  }

  /**
   * Reset form control that is created with nonNullable=true
   *
   * The effect will be - the form control value will be reset to it's initial value
   * which was provided while instantiating the form control
   */
  resetDefaultValue() {
    this.resetNotNull.reset();
  }

  /**
   * Reset the value of form control "name"
   */
  resetName() {
    this.name.reset();
  }

  /**
   * Assign a new value to a form control
   */
  setName() {
    this.name.setValue('Set New Value');
  }

  /**
   * Assign a new value to a form control
   *
   * w.r.t FormControl instances, this behaves the same as setName()
   * w.r.t FormGroup & FormArray, this behaves different
   */
  patchName() {
    this.name.patchValue('This too sets new value!');
  }

  /**
   * Demonstrate fetching value of a form control from the component.
   */
  getNameValue() {
    console.log(this.name.value);
  }
}
