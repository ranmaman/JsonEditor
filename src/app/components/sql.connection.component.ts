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
    form.patchValue({ SQLHostName: FieldProperties.getValueFromJson(this.HostField.jsonInputMapping, filecontent) });
    form.patchValue({ SQLinstanceName: FieldProperties.getValueFromJson(this.InstanceNameField.jsonInputMapping, filecontent) });
    form.patchValue({ SQLDBName: FieldProperties.getValueFromJson(this.DBNameField.jsonInputMapping, filecontent) });
    form.patchValue({ AdminDomain: FieldProperties.getValueFromJson(this.AdminDomainField.jsonInputMapping, filecontent) });
    form.patchValue({ AdminUser: FieldProperties.getValueFromJson(this.AdminUserField.jsonInputMapping, filecontent) });
    form.patchValue({ AdminPassword: FieldProperties.getValueFromJson(this.AdminPasswordField.jsonInputMapping, filecontent) });
    form.patchValue({ AppDomain: FieldProperties.getValueFromJson(this.AppDomainField.jsonInputMapping, filecontent) });
    form.patchValue({ AppUser: FieldProperties.getValueFromJson(this.AppUserField.jsonInputMapping, filecontent) });
    form.patchValue({ AppPassword: FieldProperties.getValueFromJson(this.AppPasswordField.jsonInputMapping, filecontent) });
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