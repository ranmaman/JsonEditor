import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../validators';

import { FieldProperties } from '.';

export class SQLConnComponent {

  private _HostField: FieldProperties = new FieldProperties('', [Validators.required], 'O+ SQL Server Host Name', [{ type: 'required', message: 'SQL Server name is required' }], ["default_attributes", "sql_server", "Hostname"]);
  private _InstanceNameField: FieldProperties = new FieldProperties('', [], 'O+ SQL Instance Name', [], ["default_attributes", "sql_server", "Instance_Name"]);
  private _DBNameField: FieldProperties = new FieldProperties('', [Validators.required], 'O+ Data Base Name', [
    { type: 'required', message: 'Data Base name is required' }]
    , ["default_attributes", "sql_server", "DB_Name"]);
  private _AdminUserField: FieldProperties = new FieldProperties('', [Validators.required], 'O+ SQL Admin Account user', [{ type: 'required', message: 'This field is required' }], ["default_attributes", "sql_server", "admin_account", "user"]);
  private _AdminDomainField: FieldProperties = new FieldProperties('', [], 'O+ SQL Admin Account domain', [], ["default_attributes", "sql_server", "admin_account", "domain"]);
  private _AdminPasswordField: FieldProperties = new FieldProperties('', [Validators.required], 'O+ SQL Admin Account password', [{ type: 'required', message: 'This field is required' }], ["default_attributes", "sql_server", "admin_account", "password"]);
  private _AppUserField: FieldProperties = new FieldProperties('', [Validators.required], 'O+ SQL App Account user', [{ type: 'required', message: 'This field is required' }], ["default_attributes", "sql_server", "app_account", "user"]);
  private _AppDomainField: FieldProperties = new FieldProperties('', [], 'O+ SQL App Account domain', [], ["default_attributes", "sql_server", "app_account", "domain"]);
  private _AppPasswordField: FieldProperties = new FieldProperties('', [Validators.required], 'O+ SQL App Account password', [{ type: 'required', message: 'This field is required' }], ["default_attributes", "sql_server", "app_account", "password"]);




  GetForm(): FormGroup {
    return new FormGroup({
      SQLHostName: new FormControl(this.HostField.defaultValue, this.HostField.validators),
      SQLinstanceName: new FormControl(this.InstanceNameField.defaultValue, this.InstanceNameField.validators),
      SQLDBName: new FormControl(this.DBNameField.defaultValue, this.DBNameField.validators),
      AdminDomain: new FormControl(this.AdminDomainField.defaultValue, this.AdminDomainField.validators),
      AdminUser: new FormControl(this.AdminUserField.defaultValue, this.AdminUserField.validators),
      AdminPassword: new FormControl(this.AdminPasswordField.defaultValue, this.AdminPasswordField.validators),
      AppDomain: new FormControl(this.AppDomainField.defaultValue, this.AppDomainField.validators),
      AppUser: new FormControl(this.AppUserField.defaultValue, this.AppUserField.validators),
      AppPassword: new FormControl(this.AppPasswordField.defaultValue, this.AppPasswordField.validators)
    });
  }

  patchValues(form: FormGroup, filecontent: any) {
    form.patchValue({ SQLHostName: this.HostField.getValueFromJson( filecontent) });
    form.patchValue({ SQLinstanceName: this.InstanceNameField.getValueFromJson( filecontent) });
    form.patchValue({ SQLDBName: this.DBNameField.getValueFromJson( filecontent) });
    form.patchValue({ AdminDomain: this.AdminDomainField.getValueFromJson( filecontent) });
    form.patchValue({ AdminUser: this.AdminUserField.getValueFromJson( filecontent) });
    form.patchValue({ AdminPassword: this.AdminPasswordField.getValueFromJson( filecontent) });
    form.patchValue({ AppDomain: this.AppDomainField.getValueFromJson( filecontent) });
    form.patchValue({ AppUser: this.AppUserField.getValueFromJson( filecontent) });
    form.patchValue({ AppPassword: this.AppPasswordField.getValueFromJson( filecontent) });
  }

  setJson(origJson:any, form: FormGroup){
    origJson['default_attributes']['sql_server'] = {}
    origJson['default_attributes']['sql_server']['Hostname'] = form.get('SQLHostName').value
    origJson['default_attributes']['sql_server']['Instance_Name'] = form.get('SQLinstanceName').value
    origJson['default_attributes']['sql_server']['DB_Name'] = form.get('SQLDBName').value
    origJson['default_attributes']['sql_server']['admin_account'] = {}
    origJson['default_attributes']['sql_server']['admin_account']['user'] = form.get('AdminUser').value
    origJson['default_attributes']['sql_server']['admin_account']['domain'] = form.get('AdminDomain').value
    origJson['default_attributes']['sql_server']['admin_account']['password'] = form.get('AdminPassword').value
    origJson['default_attributes']['sql_server']['app_account'] = {}
    origJson['default_attributes']['sql_server']['app_account']['user'] = form.get('AppUser').value
    origJson['default_attributes']['sql_server']['app_account']['domain'] = form.get('AppDomain').value
    origJson['default_attributes']['sql_server']['app_account']['password'] = form.get('AppPassword').value
    return origJson;
    
  }

  public get HostField(): FieldProperties {
    return this._HostField;
  }
  public set HostField(value: FieldProperties) {
    this._HostField = value;
  }
  public get InstanceNameField(): FieldProperties {
    return this._InstanceNameField;
  }
  public set InstanceNameField(value: FieldProperties) {
    this._InstanceNameField = value;
  }
  public get DBNameField(): FieldProperties {
    return this._DBNameField
  }
  public set DBNameField(value: FieldProperties) {
    this._DBNameField = value;
  }
  public get AdminUserField(): FieldProperties {
    return this._AdminUserField;
  }
  public set AdminUserField(value: FieldProperties) {
    this._AdminUserField = value;
  }
  public get AdminDomainField(): FieldProperties {
    return this._AdminDomainField;
  }
  public set AdminDomainField(value: FieldProperties) {
    this._AdminDomainField = value;
  }
  public get AdminPasswordField(): FieldProperties {
    return this._AdminPasswordField;
  }
  public set AdminPasswordField(value: FieldProperties) {
    this._AdminPasswordField = value;
  }
  public get AppUserField(): FieldProperties {
    return this._AppUserField;
  }
  public set AppUserField(value: FieldProperties) {
    this._AppUserField = value;
  }
  public get AppDomainField(): FieldProperties {
    return this._AppDomainField;
  }
  public set AppDomainField(value: FieldProperties) {
    this._AppDomainField = value;
  }
  public get AppPasswordField(): FieldProperties {
    return this._AppPasswordField;
  }
  public set AppPasswordField(value: FieldProperties) {
    this._AppPasswordField = value;
  }


}