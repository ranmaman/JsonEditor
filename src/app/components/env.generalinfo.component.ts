import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../validators';

import { FieldProperties } from '../components';

export class EnvironmentGeneralComponent {
  environmentTypes = [
    "Vertica",
    "Hadoop",
    "SQL"
  ];

  industries = [
    "Semi",
    "Electronics",
    "Both"
  ];

  RedHatCentos_versions = [
    "rhel6",
    "rhel7"
  ];

  private _nameField: FieldProperties = new FieldProperties('', [Validators.required], 'Environment name as mentined in the globals', [{ type: 'required', message: 'Environment name is required' }], ["name"]);
  private _environmentTypeField: FieldProperties = new FieldProperties(this.environmentTypes[0], [Validators.required], '', [{ type: 'required', message: 'Please select environment type' }], [], this.environmentTypes);
  private _industryField: FieldProperties = new FieldProperties(this.industries[0], [Validators.required], '', [{ type: 'required', message: 'Please select industry type' }], [], this.industries);
  private _chefWSField: FieldProperties = new FieldProperties('', [Validators.required, Validators.pattern("^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$")], 'Please specify Chef Workstation ip address', [
    { type: 'required', message: 'Chef Workstation address cannot be empty' },
    { type: 'pattern', message: 'Chef Workstation contains invalid ip address' }]
    , ["default_attributes", "ChefWs", "IP"]);
  private _linuxVersionField: FieldProperties = new FieldProperties(this.RedHatCentos_versions[0], [Validators.required], '', [{ type: 'required', message: 'Please select linux OS version' }], ["default_attributes", "linux_version"], this.RedHatCentos_versions);
  private _ntpField: FieldProperties = new FieldProperties('', [Validators.required], 'NTP server', [{ type: 'required', message: 'NTP server address is required' }], ["default_attributes", "ntp", "servers", 0]);
  private _OTTreeLocationField: FieldProperties = new FieldProperties('', [Validators.required, Validators.pattern("\/\/[a-zA-Z0-9\.\-_]{1,}(\/[a-zA-Z0-9\-_]{1,}){1,}[\$]{0,1}")], 'OTTree Location', [
    { type: 'required', message: 'OTTree is required' },
    { type: 'pattern', message: 'OTTree location must be valid UNC path' }]
    , ["default_attributes", "OTTree"]);
  private _RserverField: FieldProperties;



  GetForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(this.nameField.defaultValue, this.nameField.validators),
      environmenttype: new FormControl(this.environmentTypeField.defaultValue, this.environmentTypeField.validators),
      industries: new FormControl(this.industryField.defaultValue, this.industryField.validators),
      chefWSAddress: new FormControl(this.chefWSField.defaultValue, this.chefWSField.validators),
      linuxVersions: new FormControl(this.linuxVersionField.defaultValue, this.linuxVersionField.validators),
      ntpServers: new FormControl(this.ntpField.defaultValue, this.ntpField.validators),
      OTTree: new FormControl(this.OTTreeLocationField.defaultValue, this.OTTreeLocationField.validators),
      RserverIncluded: new FormControl('true')
    });
  }

  patchValues(form: FormGroup, filecontent: any) {
    form.patchValue({ name: FieldProperties.getValueFromJson(this.nameField.jsonInputMapping, filecontent) });
    form.patchValue({ chefWSAddress: FieldProperties.getValueFromJson(this.chefWSField.jsonInputMapping, filecontent) });
    form.patchValue({ linuxVersions: FieldProperties.getValueFromJson(this.linuxVersionField.jsonInputMapping, filecontent) });
    form.patchValue({ ntpServers: FieldProperties.getValueFromJson(this.ntpField.jsonInputMapping, filecontent) });
    form.patchValue({ OTTree: FieldProperties.getValueFromJson(this.OTTreeLocationField.jsonInputMapping, filecontent) });

  }

  public get RserverField(): FieldProperties {
    return this._RserverField;
  }
  public set RserverField(value: FieldProperties) {
    this._RserverField = value;
  }
  public get chefWSField(): FieldProperties {
    return this._chefWSField;
  }
  public set chefWSField(value: FieldProperties) {
    this._chefWSField = value;
  }
  public get industryField(): FieldProperties {
    return this._industryField;
  }
  public set industryField(value: FieldProperties) {
    this._industryField = value;
  }
  public get environmentTypeField(): FieldProperties {
    return this._environmentTypeField;
  }
  public set environmentTypeField(value: FieldProperties) {
    this._environmentTypeField = value;
  }
  public get nameField(): FieldProperties {
    return this._nameField;
  }
  public set nameField(value: FieldProperties) {
    this._nameField = value;
  }
  public get linuxVersionField(): FieldProperties {
    return this._linuxVersionField;
  }
  public set linuxVersionField(value: FieldProperties) {
    this._linuxVersionField = value;
  }

  public get ntpField(): FieldProperties {
    return this._ntpField;
  }
  public set ntpField(value: FieldProperties) {
    this._ntpField = value;
  }
  public get OTTreeLocationField(): FieldProperties {
    return this._OTTreeLocationField;
  }
  public set OTTreeLocationField(value: FieldProperties) {
    this._OTTreeLocationField = value;
  }


}