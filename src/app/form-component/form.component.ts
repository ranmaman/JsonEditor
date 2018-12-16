import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { UserDetailsComponent, AccountDetailsComponent, EnvironmentGeneralComponent, SQLConnComponent, VerticaComponent } from '../components';
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

  VerticaForm: FormGroup;
  VerticaComponent = new VerticaComponent();

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
    this.VerticaForm = this.VerticaComponent.GetForm();
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
      this.EnvironmentGeneralComponent.patchValues(this.EnvironmentGeneralForm, this.filecontent)
      this.SQLConnComponent.patchValues(this.SQLConnForm, this.filecontent)
      this.VerticaComponent.patchValues(this.VerticaForm, this.filecontent)

    }
  }

  finishForm() {
    let json = {}
    json = this.EnvironmentGeneralComponent.setJson(json, this.EnvironmentGeneralForm);
    json = this.SQLConnComponent.setJson(json, this.SQLConnForm);
    json = this.VerticaComponent.setJson(json, this.VerticaForm);
    console.log("JSON: " + JSON.stringify(json))

  }

  // When the user clicks on div, open the popup
  infoPopUp(id: string) {
    var popup = document.getElementById(id);
    popup.classList.toggle("show");
  }

  addVerticaHost() {
    this.VerticaComponent.addVerticaHost(this.VerticaForm);
  }
  addInternalIP() {
    this.VerticaComponent.addInternalIP(this.VerticaForm);
  }

  removeVerticaHost() {
    const control = <FormArray>this.VerticaForm.controls['VerticaHosts'];
    console.log(control.length)
    if (control.length > 3) {
      control.removeAt(control.length - 1);
    }
  }

  removeInternalIP() {
    const control = <FormArray>this.VerticaForm.controls['InternalIPs'];
    console.log(control.length)
    if (control.length > 3) {
      control.removeAt(control.length - 1);
    }
  }



}
