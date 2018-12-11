import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserDetailsComponent, AccountDetailsComponent, EnvironmentGeneralComponent,SQLConnComponent } from '../components';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
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

  SQLConnForm: FormGroup;
  SQLConnComponent = new SQLConnComponent();

  filecontent: any;


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.createForms();
    iconRegistry.addSvgIcon(
      'info',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-info-24px.svg'));
      
  }

  ngOnInit() {
    
  }

  createForms() {
    this.SQLConnForm = this.SQLConnComponent.GetForm();
    this.EnvironmentGeneralForm = this.EnvironmentGeneralComponent.GetForm();
    this.userDetailsForm = this.userDetailsComponent.GetForm();
    this.accountDetailsForm = this.accountDetailsComponent.GetForm();

    
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
      this.SQLConnComponent.patchValues(this.SQLConnForm, this.filecontent)



    }
  }

  // When the user clicks on div, open the popup
  infoPopUp(id: string) {
    var popup = document.getElementById(id);
    popup.classList.toggle("show");
  }


}
