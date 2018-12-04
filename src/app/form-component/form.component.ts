import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserDetailsComponent, AccountDetailsComponent, EnvironmentGeneralComponent } from '../components';

@Component({
  selector: 'app-forms-page',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

  userDetailsForm: FormGroup;
  userDetailsComponent = new UserDetailsComponent();

  accountDetailsForm: FormGroup;
  accountDetailsComponent = new AccountDetailsComponent();

  EnvironmentGeneralForm: FormGroup;
  EnvironmentGeneralComponent = new EnvironmentGeneralComponent();

  filecontent: any;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForms();
  }

  createForms() {

    this.userDetailsForm = this.userDetailsComponent.GetUserDetailsForm();
    this.accountDetailsForm = this.accountDetailsComponent.GetAccountDetailsForm();
    this.EnvironmentGeneralForm = this.EnvironmentGeneralComponent.GetEnvironmentGeneralForm();
  }

  onSubmitAccountDetails(value) {
    console.log(value);
  }

  onSubmitUserDetails(value) {
    console.log(value);
  }
  onSelectFile(event) {
    var reader = new FileReader();

    reader.readAsText(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed

      this.filecontent = JSON.parse(reader.result.toString());
      this.accountDetailsComponent.patchValues(this.accountDetailsForm, this.filecontent)
      this.userDetailsComponent.patchValues(this.userDetailsForm, this.filecontent)
      this.EnvironmentGeneralComponent.patchValues(this.EnvironmentGeneralForm, this.filecontent)


    }
  }


}
