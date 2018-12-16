import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../validators';

import { FieldProperties } from '.';

export class VerticaComponent {
  fb: FormBuilder = new FormBuilder();
  verticaVersion = [
    "9.1.0-4",
    "8.1.1-9",
    "7.2.3-5"
  ];

  
  private _versionField: FieldProperties = new FieldProperties(this.verticaVersion[0], [Validators.required], 'Vertica version to install', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "vertica", "verticaVersion"],this.verticaVersion);
  private _TZField: FieldProperties = new FieldProperties('', [Validators.required], 'Vertica Machine time zone', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "vertica", "TimeZone"]);
  private _dsnField: FieldProperties = new FieldProperties('vertica', [Validators.required], 'Vertica dsn', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "vertica", "verticaDsn"]);
  private _dbNameField: FieldProperties = new FieldProperties('OPVERTICA', [Validators.required], 'Vertica Data Base Name', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "vertica", "verticaDbName"]);
  private _schemaField: FieldProperties = new FieldProperties('', [Validators.required], 'Vertica Schema Name', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "vertica", "verticaSchemaName"]);
  private _dbPassField: FieldProperties = new FieldProperties('', [Validators.required], 'Vertica Data base password', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "vertica", "verticaDbPassword"]);
  private _workDirField: FieldProperties = new FieldProperties('/opt/ot', [Validators.required, Validators.pattern("^(/[^/ ]*)+/?$")], 'O+ Working directory', [{ type: 'required', message: 'this field is required' }, { type: 'pattern', message: 'value needs to be valid linux path' }], ["default_attributes", "vertica", "OPlus_working_dir_root"]);
  private _BroadcastField: FieldProperties = new FieldProperties('', [Validators.required, , Validators.pattern("^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$")], 'Broadcast ip between nodes', [{ type: 'required', message: 'this field is required' }, { type: 'pattern', message: 'value needs to be a valid ip address' }], ["default_attributes", "vertica", "BroadcastDataBetweenNodesIP"]);
  private _thresholdNoneField: FieldProperties = new FieldProperties(false, [], 'true in order to skip vertica installation warnings', [], ["default_attributes", "vertica", "apply_failure_threshold_none"]);
  private _isHdpCollocatedField: FieldProperties = new FieldProperties(false, [], 'true if Hadoop and Vertica installed on the same machines', [], ["default_attributes", "vertica", "IsHadoopCollocated"]);
  private _EnablePerfTestField: FieldProperties = new FieldProperties(false, [], 'execute vertica performance tests if true', [], ["default_attributes", "vertica", "vperf", "EnableVperfTests"]);
  
  //Vertica External IP's
  private _VerticaHostField: FieldProperties = new FieldProperties('', [Validators.required, , Validators.pattern("^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$")], 'Vertica Host', [{ type: 'required', message: 'this field is required' }, { type: 'pattern', message: 'value needs to be a valid ip address' }], ["default_attributes", "vertica", "hosts"]);
  private _VerticaHostsField: FieldProperties = new FieldProperties(this._VerticaHostField, [], 'Vertica Hosts External ip list', [], ["default_attributes", "vertica", "hosts"]);
  //Vertica Internal IP's
  private _InternalIPField: FieldProperties = new FieldProperties('', [Validators.required, , Validators.pattern("^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$")], 'Vertica Internal IP', [{ type: 'required', message: 'this field is required' }, { type: 'pattern', message: 'value needs to be a valid ip address' }], ["default_attributes", "vertica", "syncDataBetweenNodesIPs"]);
  private _InternalIPsField: FieldProperties = new FieldProperties(this._InternalIPField, [], 'Vertica Hosts Internal ip list', [], ["default_attributes", "vertica", "syncDataBetweenNodesIPs"]);
  
  public get InternalIPsField(): FieldProperties {
    return this._InternalIPsField;
  }
  public set InternalIPsField(value: FieldProperties) {
    this._InternalIPsField = value;
  }
  public get InternalIPField(): FieldProperties {
    return this._InternalIPField;
  }
  public set InternalIPField(value: FieldProperties) {
    this._InternalIPField = value;
  }
  public get VerticaHostField(): FieldProperties {
    return this._VerticaHostField;
  }
  public set VerticaHostField(value: FieldProperties) {
    this._VerticaHostField = value;
  }
  public get VerticaHostsField(): FieldProperties {
    return this._VerticaHostsField;
  }
  public set VerticaHostsField(value: FieldProperties) {
    this._VerticaHostsField = value;
  }
  public get BroadcastField(): FieldProperties {
    return this._BroadcastField;
  }
  public set BroadcastField(value: FieldProperties) {
    this._BroadcastField = value;
  }
  public get workDirField(): FieldProperties {
    return this._workDirField;
  }
  public set workDirField(value: FieldProperties) {
    this._workDirField = value;
  }
  public get EnablePerfTestField(): FieldProperties {
    return this._EnablePerfTestField;
  }
  public set EnablePerfTestField(value: FieldProperties) {
    this._EnablePerfTestField = value;
  }
  public get isHdpCollocatedField(): FieldProperties {
    return this._isHdpCollocatedField;
  }
  public set isHdpCollocatedField(value: FieldProperties) {
    this._isHdpCollocatedField = value;
  }
  public get thresholdNoneField(): FieldProperties {
    return this._thresholdNoneField;
  }
  public set thresholdNoneField(value: FieldProperties) {
    this._thresholdNoneField = value;
  }
  public get dbPassField(): FieldProperties {
    return this._dbPassField;
  }
  public set dbPassField(value: FieldProperties) {
    this._dbPassField = value;
  }
  public get schemaField(): FieldProperties {
    return this._schemaField;
  }
  public set schemaField(value: FieldProperties) {
    this._schemaField = value;
  }
  public get dbNameField(): FieldProperties {
    return this._dbNameField;
  }
  public set dbNameField(value: FieldProperties) {
    this._dbNameField = value;
  }
  public get dsnField(): FieldProperties {
    return this._dsnField;
  }
  public set dsnField(value: FieldProperties) {
    this._dsnField = value;
  }
  public get TZField(): FieldProperties {
    return this._TZField;
  }
  public set TZField(value: FieldProperties) {
    this._TZField = value;
  }
  public get versionField(): FieldProperties {
    return this._versionField;
  }
  public set versionField(value: FieldProperties) {
    this._versionField = value;
  }
  
  
  GetForm(): FormGroup {

    return new FormGroup({
      version: new FormControl(this.versionField.defaultValue, this.versionField.validators),
      TZ: new FormControl(this.TZField.defaultValue, this.TZField.validators),
      dsn: new FormControl(this.dsnField.defaultValue, this.dsnField.validators),
      dbName: new FormControl(this.dbNameField.defaultValue, this.dbNameField.validators),
      schema: new FormControl(this.schemaField.defaultValue, this.schemaField.validators),
      dbPass: new FormControl(this.dbPassField.defaultValue, this.dbPassField.validators),
      workDir: new FormControl(this.workDirField.defaultValue, this.workDirField.validators),
      Broadcast: new FormControl(this.BroadcastField.defaultValue, this.BroadcastField.validators),
      VerticaHosts: new FormArray([this.fb.group({VerticaHost : new FormControl(this.VerticaHostField.defaultValue,this.VerticaHostField.validators)}),this.fb.group({VerticaHost : new FormControl(this.VerticaHostField.defaultValue,this.VerticaHostField.validators)}),this.fb.group({VerticaHost : new FormControl(this.VerticaHostField.defaultValue,this.VerticaHostField.validators)})]),
      InternalIPs: new FormArray([this.fb.group({InternalIP : new FormControl(this.InternalIPField.defaultValue,this.InternalIPField.validators)}),this.fb.group({InternalIP : new FormControl(this.InternalIPField.defaultValue,this.InternalIPField.validators)}),this.fb.group({InternalIP : new FormControl(this.InternalIPField.defaultValue,this.InternalIPField.validators)})]),
      thresholdNone: new FormControl(this.thresholdNoneField.defaultValue, this.thresholdNoneField.validators),
      isHdpCollocated: new FormControl(this.isHdpCollocatedField.defaultValue, this.isHdpCollocatedField.validators),
      EnablePerfTest: new FormControl(this.EnablePerfTestField.defaultValue, this.EnablePerfTestField.validators),
    });
  }

  patchValues(form: FormGroup, filecontent: any) {
    this.updateFormArray(form,this.VerticaHostsField.jsonInputMapping,'VerticaHosts','VerticaHost',this.fb.group({VerticaHost : new FormControl(this.VerticaHostField.defaultValue,this.VerticaHostField.validators)}),filecontent)
    this.updateFormArray(form,this.InternalIPsField.jsonInputMapping,'InternalIPs','InternalIP',this.fb.group({InternalIP : new FormControl(this.InternalIPField.defaultValue,this.InternalIPField.validators)}),filecontent)
    form.patchValue({ version: FieldProperties.getValueFromJson(this.versionField.jsonInputMapping, filecontent) });
    form.patchValue({ TZ: FieldProperties.getValueFromJson(this.TZField.jsonInputMapping, filecontent) });
    form.patchValue({ dsn: FieldProperties.getValueFromJson(this.dsnField.jsonInputMapping, filecontent) });
    form.patchValue({ dbName: FieldProperties.getValueFromJson(this.dbNameField.jsonInputMapping, filecontent) });
    form.patchValue({ schema: FieldProperties.getValueFromJson(this.schemaField.jsonInputMapping, filecontent) });
    form.patchValue({ dbPass: FieldProperties.getValueFromJson(this.dbPassField.jsonInputMapping, filecontent) });
    form.patchValue({ workDir: FieldProperties.getValueFromJson(this.workDirField.jsonInputMapping, filecontent) });
    form.patchValue({ Broadcast: FieldProperties.getValueFromJson(this.BroadcastField.jsonInputMapping, filecontent) });
    form.patchValue({ thresholdNone: FieldProperties.getValueFromJson(this.thresholdNoneField.jsonInputMapping, filecontent) });
    form.patchValue({ isHdpCollocated: FieldProperties.getValueFromJson(this.isHdpCollocatedField.jsonInputMapping, filecontent) });
    form.patchValue({ EnablePerfTest: FieldProperties.getValueFromJson(this.EnablePerfTestField.jsonInputMapping, filecontent) });

    
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

    origJson['default_attributes']['vertica'] = {}
    origJson['default_attributes']['vertica']['verticaVersion'] = form.get('version').value
    origJson['default_attributes']['vertica']['TimeZone'] = form.get('TZ').value
    origJson['default_attributes']['vertica']['verticaDsn'] = form.get('dsn').value
    origJson['default_attributes']['vertica']['verticaDbName'] = form.get('dbName').value
    origJson['default_attributes']['vertica']['verticaSchemaName'] = form.get('schema').value
    origJson['default_attributes']['vertica']['verticaDbPassword'] = form.get('dbPass').value
    origJson['default_attributes']['vertica']['OPlus_working_dir_root'] = form.get('workDir').value
    origJson['default_attributes']['vertica']['BroadcastDataBetweenNodesIP'] = form.get('Broadcast').value
    origJson['default_attributes']['vertica']['apply_failure_threshold_none'] = form.get('thresholdNone').value
    origJson['default_attributes']['vertica']['IsHadoopCollocated'] = form.get('isHdpCollocated').value
    origJson['default_attributes']['vertica']['vperf'] = {}
    origJson['default_attributes']['vertica']['vperf']['EnableVperfTests'] = form.get('EnablePerfTest').value
    origJson['default_attributes']['vertica']['hosts'] = this.getFormArrayValues('VerticaHost',<FormArray>form.get('VerticaHosts'))
    origJson['default_attributes']['vertica']['syncDataBetweenNodesIPs'] = this.getFormArrayValues('InternalIP',<FormArray>form.get('InternalIPs'))


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

  addVerticaHost(form: FormGroup){
    const control = <FormArray>form.controls['VerticaHosts'];
    control.push(this.fb.group({VerticaHost : new FormControl(this.VerticaHostField.defaultValue,this.VerticaHostField.validators)}));
  }
  addInternalIP(form: FormGroup){
    const control = <FormArray>form.controls['InternalIPs'];
    control.push(this.fb.group({InternalIP : new FormControl(this.InternalIPField.defaultValue,this.InternalIPField.validators)}));
  }

}