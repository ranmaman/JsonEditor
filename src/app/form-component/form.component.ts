import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../validators';

import { UserDetailsComponent, AccountDetailsComponent } from '../components';

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
  
  filecontent: any;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForms();
  }

  createForms() {

    this.userDetailsForm = this.userDetailsComponent.GetUserDetailsForm();
    this.accountDetailsForm = this.accountDetailsComponent.GetAccountDetailsForm();



  }

  onSubmitAccountDetails(value){
    console.log(value);
  }

  onSubmitUserDetails(value){
    console.log(value);
  }
  onSelectFile(event) {
      var reader = new FileReader();

      reader.readAsText(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed

        this.filecontent = JSON.parse(reader.result.toString());
        this.accountDetailsComponent.patchValues(this.accountDetailsForm,this.filecontent)
        this.userDetailsComponent.patchValues(this.userDetailsForm,this.filecontent)

        
      }
  }


}
