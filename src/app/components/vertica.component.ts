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
  //External Storage
  private _UNCPathField: FieldProperties = new FieldProperties('', [Validators.required, Validators.pattern("\\\\\\\\[a-zA-Z0-9\\.\\-_]{1,}(\\\\[a-zA-Z0-9\\-_]{1,}){1,}[\\$]{0,1}")], 'UNC path for CSV', [{ type: 'required', message: 'this field is required' }, { type: 'pattern', message: 'value needs to be valid UNC path' }], ["default_attributes", "CSV_Data_Mount_CIFS", "unc_path"]);
  private _SMBUserField: FieldProperties = new FieldProperties('', [Validators.required], 'Samba user name to access csv files location', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "CSV_Data_Mount_CIFS", "SMB_User"]);

  
  private _SMBPasswordField: FieldProperties = new FieldProperties('', [Validators.required], 'Samba password to access csv files location', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "CSV_Data_Mount_CIFS", "SMB_Pass"]);
  private _SMBDomainField: FieldProperties = new FieldProperties('', [Validators.required], 'Samba user name domain to access csv files location', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "CSV_Data_Mount_CIFS", "SMB_Domain"]);
  private _MountDirField: FieldProperties = new FieldProperties('/opt/op/csv_data', [Validators.required, Validators.pattern("^(/[^/ ]*)+/?$")], 'linux folder location for CSV', [{ type: 'required', message: 'this field is required' }, { type: 'pattern', message: 'value needs to be valid linux path' }], ["default_attributes", "CSV_Data_Mount_CIFS", "mount_dir"]);
  //Version Tree Samba
  private _VTUNCPathField: FieldProperties = new FieldProperties('', [Validators.required, Validators.pattern("\\\\\\\\[a-zA-Z0-9\\.\\-_]{1,}(\\\\[a-zA-Z0-9\\-_]{1,}){1,}[\\$]{0,1}")], 'UNC path for Deployment Center location', [{ type: 'required', message: 'this field is required' }, { type: 'pattern', message: 'value needs to be valid UNC path' }], ["default_attributes","vertica", "versionTreeSmbShare", "UncPath"]);
  private _VTUserField: FieldProperties = new FieldProperties('', [Validators.required, Validators.pattern("^[a-zA-Z][a-zA-Z0-9\\-\\.]{0,61}[a-zA-Z]\\\\[\\w\\.\\- ]*$")], 'User name to access deplyment center', [{ type: 'required', message: 'this field is required' }, { type: 'pattern', message: "value needs to be: 'Domain\\userName'" }], ["default_attributes", "vertica", "versionTreeSmbShare", "DomainUser"]);
  private _VTPasswordField: FieldProperties = new FieldProperties('', [Validators.required], 'User password to access deployment center', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "vertica", "versionTreeSmbShare", "Password"]);
  //Vertica Managment User
  private _MgmUserField: FieldProperties = new FieldProperties('', [Validators.required], 'Verica Managment user name', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "vertica", "managementUser","dbadmin_user"]);
  private _MgmPasswordField: FieldProperties = new FieldProperties('', [Validators.required], 'Verica Managment user password', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "vertica", "managementUser","dbadmin_pass"]);
  private _MgmGroupField: FieldProperties = new FieldProperties('', [Validators.required], 'Verica Managment user password', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "vertica", "managementUser","dbadmin_group"]);
  private _MgmHomeField: FieldProperties = new FieldProperties('', [Validators.required, Validators.pattern("^(/[^/ ]*)+/?$")], 'Verica Managment user home folder', [{ type: 'required', message: 'this field is required' }, { type: 'pattern', message: 'value needs to be valid linux path' }], ["default_attributes", "vertica", "managementUser","home_folder"]);
  private _MgmCreateField: FieldProperties = new FieldProperties(true, [], 'Create managment user if true', [], ["default_attributes", "vertica", "managementUser", "CREATE_IF_NOT_EXIST"]);
  

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
       * Getter MgmHomeField
       * @return {FieldProperties }
       */
    public get MgmHomeField(): FieldProperties  {
      return this._MgmHomeField;
    }
  
      /**
       * Setter MgmHomeField
       * @param {FieldProperties } value
       */
    public set MgmHomeField(value: FieldProperties ) {
      this._MgmHomeField = value;
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


  public get VTUNCPathField(): FieldProperties {
    return this._VTUNCPathField;
  }
  public set VTUNCPathField(value: FieldProperties) {
    this._VTUNCPathField = value;
  }
  public get VTUserField(): FieldProperties {
    return this._VTUserField;
  }
  public set VTUserField(value: FieldProperties) {
    this._VTUserField = value;
  }
  public get VTPasswordField(): FieldProperties {
    return this._VTPasswordField;
  }
  public set VTPasswordField(value: FieldProperties) {
    this._VTPasswordField = value;
  }

  public get MountDirField(): FieldProperties {
    return this._MountDirField;
  }
  public set MountDirField(value: FieldProperties) {
    this._MountDirField = value;
  }
  public get SMBDomainField(): FieldProperties {
    return this._SMBDomainField;
  }
  public set SMBDomainField(value: FieldProperties) {
    this._SMBDomainField = value;
  }
  public get SMBPasswordField(): FieldProperties {
    return this._SMBPasswordField;
  }
  public set SMBPasswordField(value: FieldProperties) {
    this._SMBPasswordField = value;
  }
  public get SMBUserField(): FieldProperties {
    return this._SMBUserField;
  }
  public set SMBUserField(value: FieldProperties) {
    this._SMBUserField = value;
  }
  public get UNCPathField(): FieldProperties {
    return this._UNCPathField;
  }
  public set UNCPathField(value: FieldProperties) {
    this._UNCPathField = value;
  }
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
      UNCPath: new FormControl(this.UNCPathField.defaultValue, this.UNCPathField.validators),
      SMBDomain: new FormControl(this.SMBDomainField.defaultValue, this.SMBDomainField.validators),
      SMBUser: new FormControl(this.SMBUserField.defaultValue, this.SMBUserField.validators),
      SMBPassword: new FormControl(this.SMBPasswordField.defaultValue, this.SMBPasswordField.validators),
      MountDir: new FormControl(this.MountDirField.defaultValue, this.MountDirField.validators),
      VTUNCPath: new FormControl(this.VTUNCPathField.defaultValue, this.VTUNCPathField.validators),
      VTUser: new FormControl(this.VTUserField.defaultValue, this.VTUserField.validators),
      VTPassword: new FormControl(this.VTPasswordField.defaultValue, this.VTPasswordField.validators),
      MgmCreate: new FormControl(this.MgmCreateField.defaultValue, this.MgmCreateField.validators),
      MgmUser: new FormControl(this.MgmUserField.defaultValue, this.MgmUserField.validators),
      MgmPassword: new FormControl(this.MgmPasswordField.defaultValue, this.MgmPasswordField.validators),
      MgmGroup: new FormControl(this.MgmGroupField.defaultValue, this.MgmGroupField.validators),
      MgmHome: new FormControl(this.MgmHomeField.defaultValue, this.MgmHomeField.validators),

    });
  }

  patchValues(form: FormGroup, filecontent: any) {
    this.updateFormArray(form,this.VerticaHostsField,'VerticaHosts','VerticaHost',this.fb.group({VerticaHost : new FormControl(this.VerticaHostField.defaultValue,this.VerticaHostField.validators)}),filecontent)
    this.updateFormArray(form,this.InternalIPsField,'InternalIPs','InternalIP',this.fb.group({InternalIP : new FormControl(this.InternalIPField.defaultValue,this.InternalIPField.validators)}),filecontent)
    form.patchValue({ version: this.versionField.getValueFromJson(filecontent) });
    form.patchValue({ TZ: this.TZField.getValueFromJson(filecontent) });
    form.patchValue({ dsn: this.dsnField.getValueFromJson(filecontent) });
    form.patchValue({ dbName: this.dbNameField.getValueFromJson(filecontent) });
    form.patchValue({ schema: this.schemaField.getValueFromJson(filecontent) });
    form.patchValue({ dbPass: this.dbPassField.getValueFromJson(filecontent) });
    form.patchValue({ workDir: this.workDirField.getValueFromJson(filecontent) });
    form.patchValue({ Broadcast: this.BroadcastField.getValueFromJson(filecontent) });
    form.patchValue({ thresholdNone: this.thresholdNoneField.getValueFromJson(filecontent) });
    form.patchValue({ isHdpCollocated: this.isHdpCollocatedField.getValueFromJson(filecontent) });
    form.patchValue({ EnablePerfTest: this.EnablePerfTestField.getValueFromJson(filecontent) });
    form.patchValue({ UNCPath: this.UNCPathField.getValueFromJson(filecontent).split('/').join('\\') });
    form.patchValue({ SMBUser: this.SMBUserField.getValueFromJson(filecontent) });
    form.patchValue({ SMBPassword: this.SMBPasswordField.getValueFromJson(filecontent) });
    form.patchValue({ SMBDomain: this.SMBDomainField.getValueFromJson(filecontent) });
    form.patchValue({ MountDir: this.MountDirField.getValueFromJson(filecontent) });
    form.patchValue({ VTUNCPath: this.VTUNCPathField.getValueFromJson(filecontent).split('/').join('\\') });
    form.patchValue({ VTUser: this.VTUserField.getValueFromJson(filecontent).split('/').join('\\') });
    form.patchValue({ VTPassword: this.VTPasswordField.getValueFromJson(filecontent) });
    form.patchValue({ MgmCreate: this.MgmCreateField.getValueFromJson(filecontent)});
    form.patchValue({ MgmUser: this.MgmUserField.getValueFromJson(filecontent)});
    form.patchValue({ MgmPassword: this.MgmPasswordField.getValueFromJson(filecontent) });
    form.patchValue({ MgmGroup: this.MgmGroupField.getValueFromJson(filecontent) });
    form.patchValue({ MgmHome: this.MgmHomeField.getValueFromJson(filecontent) });


    
  }

  updateFormArray(form: FormGroup,field: FieldProperties,parentControlName : string,childControlName : string,newControl: FormGroup,  filecontent: any){
    let RootElement = <FormArray>(form.controls[parentControlName]);
    console.log("Control array size:" + RootElement.length);
    console.log("Json Array size:" + field.getValueFromJson(filecontent).length);
    //Add nodes over the default size
    if (RootElement.length < field.getValueFromJson(filecontent).length){
      for (let index = RootElement.length; index < field.getValueFromJson(filecontent).length; index++) {
        console.log("UPDATE LENGTH");
        RootElement.push(newControl);
      }
    }
    //Update Nodes with values from Json
    for (let index = 0; index < RootElement.length; index++) {
      let element = RootElement.at(index).get(childControlName)
      console.log("BEFORE element:" + element.value)
      field.jsonInputMapping.push(index)
      element.setValue(field.getValueFromJson(filecontent));
      field.jsonInputMapping.pop();
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
    origJson['default_attributes']['CSV_Data_Mount_CIFS'] = {}
    origJson['default_attributes']['CSV_Data_Mount_CIFS']['unc_path'] = form.get('UNCPath').value.split('\\').join('/')
    origJson['default_attributes']['CSV_Data_Mount_CIFS']['SMB_User'] = form.get('SMBUser').value
    origJson['default_attributes']['CSV_Data_Mount_CIFS']['SMB_Pass'] = form.get('SMBPassword').value
    origJson['default_attributes']['CSV_Data_Mount_CIFS']['SMB_Domain'] = form.get('SMBDomain').value
    origJson['default_attributes']['CSV_Data_Mount_CIFS']['mount_dir'] = form.get('MountDir').value

    origJson['default_attributes']['vertica']['versionTreeSmbShare'] = {}
    origJson['default_attributes']['vertica']['versionTreeSmbShare']['UncPath'] = form.get('VTUNCPath').value.split('\\').join('/')
    origJson['default_attributes']['vertica']['versionTreeSmbShare']['DomainUser'] = form.get('VTUser').value.split('\\').join('/')
    origJson['default_attributes']['vertica']['versionTreeSmbShare']['Password'] = form.get('VTPassword').value

    origJson['default_attributes']['vertica']['managementUser'] = {}
    origJson['default_attributes']['vertica']['managementUser']['CREATE_IF_NOT_EXIST'] = form.get('MgmCreate').value
    origJson['default_attributes']['vertica']['managementUser']['dbadmin_user'] = form.get('MgmUser').value
    origJson['default_attributes']['vertica']['managementUser']['dbadmin_pass'] = form.get('MgmPassword').value
    origJson['default_attributes']['vertica']['managementUser']['dbadmin_group'] = form.get('MgmGroup').value
    origJson['default_attributes']['vertica']['managementUser']['home_folder'] = form.get('MgmHome').value

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
    const externalControl = <FormArray>form.controls['VerticaHosts'];
    const internalControl = <FormArray>form.controls['InternalIPs'];
    externalControl.push(this.fb.group({VerticaHost : new FormControl(this.VerticaHostField.defaultValue,this.VerticaHostField.validators)}));
    internalControl.push(this.fb.group({InternalIP : new FormControl(this.InternalIPField.defaultValue,this.InternalIPField.validators)}));
  }
  
}