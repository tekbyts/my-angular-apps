import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  /**
   * Top level Form Model
   */
  userInfoForm: FormGroup = new FormGroup({});

  standaloneCtl: FormControl = new FormControl();

  /**
   *
   */
  constructor() {}

  /**
   * Builds the form model
   */
  buildUserInfoForm(): void {
    this.userInfoForm = new FormGroup({
      standaloneCtl: new FormControl('Standalone'),
      credentials: new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
      }),
      name: new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
      }),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      }),
    });
  }

  ngOnInit(): void {
    this.buildUserInfoForm();
  }

  /**
   * Handle form submit
   */
  onSubmitUserInfo(): void {
    console.log(this.userInfoForm.value);
  }

  getUserInfoObjShortFrmGrpNames(): any {
    var value = {
      creds: {
        email: 'sample1@email.com',
        password: 'sample1password',
      },
      nm: {
        firstName: 'sample1 firstname',
        lastName: 'sample1 firstname',
      },
      addr: {
        street: 'sample 1 street',
        city: 'sample 1 city',
        state: 'sample 1 state',
        zip: 'sample 1 zip',
      },
    };
  }

  getUserInfoObj(): any {
    var value = {
      credentials: {
        email: 'sample1@email.com',
        password: 'sample1password',
      },
      name: {
        firstName: 'sample1 firstname',
        lastName: 'sample1 firstname',
      },
      address: {
        street: 'sample 1 street',
        city: 'sample 1 city',
        state: 'sample 1 state',
        zip: 'sample 1 zip',
      },
    };

    return value;
  }

  /**
   * Assign a value to the user info form(top level form)
   */
  setValueUserInfoForm() {
    // this.userInfoForm.setValue(this.getUserInfoObjShortFrmGrpNames());
    var value = this.getUserInfoObj();
    console.log(this.getUserInfoObj());
    console.log(value);
    this.userInfoForm.setValue(value);
    // this.userInfoForm.setValue({
    //   credentials: {
    //     email: 'Email',
    //     password: 'Password',
    //   },
    //   name: {
    //     firstName: 'FirstName',
    //     lastName: 'LastName',
    //   },
    //   address: {
    //     street: 'Street',
    //     city: 'City',
    //     state: 'State',
    //     zip: 'Zip',
    //   },
    // });
  }

  /**
   * Assign a value to a subset of the user info form
   * the 'name' form group in this case
   */
  setValueName() {
    this.userInfoForm.get('name')?.setValue({
      firstName: 'Set Value First Name',
      lastName: 'Set Value Last Name',
    });
  }

  /**
   * Assign a value to a subset of the user info form
   * the 'name' form group in this case
   */
  setValueNameFail() {
    this.userInfoForm.get('name')?.setValue({
      firstName: 'Set Value First Name',
    });
  }

  /**
   * Assign a value to a subset of the user info form
   * the 'name' form group in this case
   */
  patchValueName() {
    this.userInfoForm.get('name')?.patchValue({
      firstName: 'Patch Value First Name',
      lastName: 'Patch Value Last Name',
    });
  }

  /**
   * Assign a value to a subset of the user info form
   * the 'credentials' form group in this case
   */
  patchValueNameWorks() {
    this.userInfoForm.get('name')?.patchValue({
      firstName: 'Patch Value First Name Works',
    });
  }

  patchValueTopLevelForm() {
    this.userInfoForm.patchValue({
      credentials: {
        email: 'Top level form group patch value',
      },
    });
  }
}
