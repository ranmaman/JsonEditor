import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../validators';

import { FieldProperties} from '../components';

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

  private _nameField: FieldProperties = new FieldProperties('',[Validators.required],'Environment name as mentined in the globals',[{ type: 'required', message: 'Environment name is required' }]);
  private _environmentTypeField: FieldProperties = new FieldProperties(this.environmentTypes[0],[Validators.required],'',[{ type: 'required', message: 'Please select environment type' }],this.environmentTypes);
  private _industryField: FieldProperties = new FieldProperties(this.industries[0],[Validators.required],'',[{ type: 'required', message: 'Please select industry type' }],this.industries);
  private _chefWSField: FieldProperties = new FieldProperties('',[Validators.required, Validators.pattern("^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$")],'Please specify Chef Workstation ip address',[
    { type: 'required', message: 'Chef Workstation address cannot be empty' },
    { type: 'pattern', message: 'Chef Workstation contains invalid ip address' }
  ]);
  private _RserverField: FieldProperties;



  validation_messages = {
    'name': [
      { type: 'required', message: 'Environment name is required' }
    ],
    'environmenttype': [
      { type: 'required', message: 'Please select environment type' }
    ],
    'industries': [
      { type: 'required', message: 'Please select industry' }
    ],
    'chefWSAddress': [
      { type: 'required', message: 'Chef Workstation address cannot be empty' },
      { type: 'pattern', message: 'Chef Workstation contains invalid ip address' }
    ]
  };

  descriptions = {
    'name':
    { message: 'Environment name as mentined in the globals' }
    ,
    'environmenttype':
    { message: '' },

    'industries':
    { message: '' },

    'chefWSAddress':
    { message: 'Please specify Chef Workstation ip address' }
  };

  GetEnvironmentTypes() {
    return this.environmentTypes
  }

  GetIndustries() {
    return this.industries
  }

  GetEnvironmentGeneralForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(this.nameField.defaultValue, this.nameField.validators),
      environmenttype: new FormControl(this.environmentTypeField.defaultValue, this.environmentTypeField.validators),
      industries: new FormControl(this.industryField.defaultValue, this.industryField.validators),
      chefWSAddress: new FormControl(this.chefWSField.defaultValue, this.chefWSField.validators),
      RserverIncluded: new FormControl('true')
    });
  }

  GetDescriptions() {
    return this.descriptions
  }

  GetValidationMessages() {
    return this.validation_messages
  }

  patchValues(form: FormGroup, filecontent: any) {
    form.patchValue({ name: filecontent.name });
    form.patchValue({ chefWSAddress: filecontent.default_attributes.ChefWs.IP });

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


}