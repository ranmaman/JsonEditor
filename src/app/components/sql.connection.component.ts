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

  private _HostField: FieldProperties = new FieldProperties('', [Validators.required], 'O+ SQL Server Host Name', [{ type: 'required', message: 'SQL Server name name is required' }], ["default_attributes", "sql_server", "Hostname"]);
  private _InstanceNameField: FieldProperties = new FieldProperties('', [], 'O+ SQL Instance Name', [], ["default_attributes", "sql_server", "Instance_Name"]);
  private _DBNameField: FieldProperties = new FieldProperties('', [Validators.required], 'O+ Data Base Name', [
    { type: 'required', message: 'Data Base name is required' }]
    , ["default_attributes", "sql_server", "DB_Name"]);




  GetForm(): FormGroup {
    return new FormGroup({
      SQLHostName: new FormControl(this.HostField.defaultValue, this.HostField.validators),
      SQLinstanceName: new FormControl(this.InstanceNameField.defaultValue, this.InstanceNameField.validators),
      SQLDBName: new FormControl(this.DBNameField.defaultValue, this.DBNameField.validators)
    });
  }

  patchValues(form: FormGroup, filecontent: any) {
    form.patchValue({ SQLHostName: FieldProperties.getValueFromJson(this.HostField.jsonInputMapping, filecontent) });
    form.patchValue({ SQLinstanceName: FieldProperties.getValueFromJson(this.InstanceNameField.jsonInputMapping, filecontent) });
    form.patchValue({ SQLDBName: FieldProperties.getValueFromJson(this.DBNameField.jsonInputMapping, filecontent) });
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


}