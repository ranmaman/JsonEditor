import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../validators';

import { FieldProperties } from '.';

export class RComponent {
  fb: FormBuilder = new FormBuilder();
  
  private _RHostField: FieldProperties = new FieldProperties('', [Validators.required, , Validators.pattern("^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$")], 'R Host', [{ type: 'required', message: 'this field is required' }, { type: 'pattern', message: 'value needs to be a valid ip address' }], ["default_attributes", "SimpleR", "hosts"]);
  private _RHostsField: FieldProperties = new FieldProperties(this._RHostField, [], 'R Hosts ip list', [], ["default_attributes", "SimpleR", "hosts"]);
  
  //Vertica Managment User
  private _MgmUserField: FieldProperties = new FieldProperties('', [Validators.required], 'R Managment user name', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "SimpleR", "managementUser","username"]);
  private _MgmPasswordField: FieldProperties = new FieldProperties('', [Validators.required], 'R Managment user password', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "SimpleR", "managementUser","password"]);
  private _MgmGroupField: FieldProperties = new FieldProperties('', [Validators.required], 'R Managment user password', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "SimpleR", "managementUser","group"]);
  private _MgmCreateField: FieldProperties = new FieldProperties(true, [], 'Create managment user if true', [], ["default_attributes", "SimpleR", "managementUser", "CREATE_IF_NOT_EXIST"]);

    /**
     * Getter RHostField
     * @return {FieldProperties }
     */
	public get RHostField(): FieldProperties  {
		return this._RHostField;
	}

    /**
     * Setter RHostField
     * @param {FieldProperties } value
     */
	public set RHostField(value: FieldProperties ) {
		this._RHostField = value;
	}

    /**
     * Getter RHostsField
     * @return {FieldProperties }
     */
	public get RHostsField(): FieldProperties  {
		return this._RHostsField;
	}

    /**
     * Setter RHostsField
     * @param {FieldProperties } value
     */
	public set RHostsField(value: FieldProperties ) {
		this._RHostsField = value;
	}
  

  /**
     * Getter MgmUserField
     * @return {FieldProperties }
     */
    public get MgmUserField(): FieldProperties  {
      return this._MgmUserField;
    }
  
      /**
       * Setter MgmUserField
       * @param {FieldProperties } value
       */
    public set MgmUserField(value: FieldProperties ) {
      this._MgmUserField = value;
    }
  
      /**
       * Getter MgmPasswordField
       * @return {FieldProperties }
       */
    public get MgmPasswordField(): FieldProperties  {
      return this._MgmPasswordField;
    }
  
      /**
       * Setter MgmPasswordField
       * @param {FieldProperties } value
       */
    public set MgmPasswordField(value: FieldProperties ) {
      this._MgmPasswordField = value;
    }
  
      /**
       * Getter MgmGroupField
       * @return {FieldProperties }
       */
    public get MgmGroupField(): FieldProperties  {
      return this._MgmGroupField;
    }
  
      /**
       * Setter MgmGroupField
       * @param {FieldProperties } value
       */
    public set MgmGroupField(value: FieldProperties ) {
      this._MgmGroupField = value;
    }
  
    /**
     * Getter MgmCreateField
     * @return {FieldProperties }
     */
	public get MgmCreateField(): FieldProperties  {
		return this._MgmCreateField;
	}

    /**
     * Setter MgmCreateField
     * @param {FieldProperties } value
     */
	public set MgmCreateField(value: FieldProperties ) {
		this._MgmCreateField = value;
	}


  
  
  GetForm(): FormGroup {

    return new FormGroup({
      MgmCreate: new FormControl(this.MgmCreateField.defaultValue, this.MgmCreateField.validators),
      MgmUser: new FormControl(this.MgmUserField.defaultValue, this.MgmUserField.validators),
      MgmPassword: new FormControl(this.MgmPasswordField.defaultValue, this.MgmPasswordField.validators),
      MgmGroup: new FormControl(this.MgmGroupField.defaultValue, this.MgmGroupField.validators),
      RHosts: new FormArray([this.fb.group({RHost : new FormControl(this.RHostField.defaultValue,this.RHostField.validators)})]),
    });
  }

  patchValues(form: FormGroup, filecontent: any) {
    this.updateFormArray(form,this.RHostsField.jsonInputMapping,'RHosts','RHost',this.fb.group({RHost : new FormControl(this.RHostField.defaultValue,this.RHostField.validators)}),filecontent)
    form.patchValue({ MgmCreate: FieldProperties.getValueFromJson(this.MgmCreateField.jsonInputMapping, filecontent)});
    form.patchValue({ MgmUser: FieldProperties.getValueFromJson(this.MgmUserField.jsonInputMapping, filecontent)});
    form.patchValue({ MgmPassword: FieldProperties.getValueFromJson(this.MgmPasswordField.jsonInputMapping, filecontent) });
    form.patchValue({ MgmGroup: FieldProperties.getValueFromJson(this.MgmGroupField.jsonInputMapping, filecontent) });


    
  }

  updateFormArray(form: FormGroup,jsonMapping:any[],parentControlName : string,childControlName : string,newControl: FormGroup,  filecontent: any){
    let RootElement = <FormArray>(form.controls[parentControlName]);
    console.log("Control array size:" + RootElement.length);
    console.log("Json Array size:" + FieldProperties.getValueFromJson(jsonMapping, filecontent).length);
    //Add nodes over the default size
    if (RootElement.length < FieldProperties.getValueFromJson(jsonMapping, filecontent).length){
      for (let index = RootElement.length; index < FieldProperties.getValueFromJson(jsonMapping, filecontent).length; index++) {
        console.log("UPDATE LENGTH");
        RootElement.push(newControl);
      }
    }
    //Update Nodes with values from Json
    for (let index = 0; index < RootElement.length; index++) {
      let element = RootElement.at(index).get(childControlName)
      console.log("BEFORE element:" + element.value)
      jsonMapping.push(index)
      element.setValue(FieldProperties.getValueFromJson(jsonMapping, filecontent));
      jsonMapping.pop();
      console.log("AFTER element:" + element.value)
      
    }

  }

  setJson(origJson: any, form: FormGroup){
    origJson['default_attributes']['SimpleR'] = {}
    origJson['default_attributes']['SimpleR']['managementUser'] = {}
    origJson['default_attributes']['SimpleR']['managementUser']['CREATE_IF_NOT_EXIST'] = form.get('MgmCreate').value
    origJson['default_attributes']['SimpleR']['managementUser']['username'] = form.get('MgmUser').value
    origJson['default_attributes']['SimpleR']['managementUser']['password'] = form.get('MgmPassword').value
    origJson['default_attributes']['SimpleR']['managementUser']['group'] = form.get('MgmGroup').value
    origJson['default_attributes']['SimpleR']['hosts'] = this.getFormArrayValues('RHost',<FormArray>form.get('RHosts'))
    return origJson
  }

  getFormArrayValues(childControlName: string, subform: FormArray){
    let childArray = []
    for (let index = 0; index < subform.length; index++) {
      childArray[index] = subform.at(index).get(childControlName).value
    }
    console.log("ARRAY:" + childArray)
    return childArray;
  }

  addRHost(form: FormGroup){
    const control = <FormArray>form.controls['RHosts'];
    control.push(this.fb.group({RHost : new FormControl(this.RHostField.defaultValue,this.RHostField.validators)}));
  }
 
}