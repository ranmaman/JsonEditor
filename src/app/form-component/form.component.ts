import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { UserDetailsComponent, AccountDetailsComponent, EnvironmentGeneralComponent, SQLConnComponent, VerticaComponent, RComponent, KafkaComponent } from '../components';
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

  RForm: FormGroup;
  RComponent = new RComponent();

  KafkaForm: FormGroup;
  KafkaComponent = new KafkaComponent();

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
    this.RForm = this.RComponent.GetForm();
    this.KafkaForm = this.KafkaComponent.GetForm();
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
      if(this.EnvironmentGeneralForm.controls['RserverIncluded'].value == true){
        this.RComponent.patchValues(this.RForm, this.filecontent)
      }
      if(this.EnvironmentGeneralForm.controls['industries'].value != 'semi'){
        this.KafkaComponent.patchValues(this.KafkaForm, this.filecontent)
      }

    }
  }

  finishForm() {
    let json = {    "description": "OptimalPlus Environment",
    "json_class": "Chef::Environment",
    "chef_type": "environment"}

    json = this.EnvironmentGeneralComponent.setJson(json, this.EnvironmentGeneralForm);
    json = this.SQLConnComponent.setJson(json, this.SQLConnForm);
    json = this.VerticaComponent.setJson(json, this.VerticaForm);

    if(this.EnvironmentGeneralForm.controls['RserverIncluded'].value == true){
      json = this.RComponent.setJson(json, this.RForm);
    }
    if(this.EnvironmentGeneralForm.controls['industries'].value != 'semi'){
      json = this.KafkaComponent.setJson(json, this.KafkaForm);
    }
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

  addRHost() {
    this.RComponent.addRHost(this.RForm);
  }

  addKafkaHost() {
    this.KafkaComponent.addKafkaHost(this.KafkaForm);
  }

  addZKHost() {
    this.KafkaComponent.addZKHost(this.KafkaForm);
  }

  removeVerticaHost() {
    const externalControl = <FormArray>this.VerticaForm.controls['VerticaHosts'];
    const internalControl = <FormArray>this.VerticaForm.controls['InternalIPs'];
    if (externalControl.length > 3) {
      externalControl.removeAt(externalControl.length - 1);
      internalControl.removeAt(internalControl.length - 1);
    }
  }
  
  removeRHost() {
    const control = <FormArray>this.RForm.controls['RHosts'];
    console.log(control.length)
    if (control.length > 1) {
      control.removeAt(control.length - 1);
    }
  }

  removeKafkaHost() {
    const control = <FormArray>this.KafkaForm.controls['KafkaHosts'];
    console.log(control.length)
    if (control.length > 3) {
      control.removeAt(control.length - 1);
    }
  }

  removeZKHost() {
    const control = <FormArray>this.KafkaForm.controls['ZKHosts'];
    console.log(control.length)
    if (control.length > 3) {
      control.removeAt(control.length - 1);
    }
  }



}
