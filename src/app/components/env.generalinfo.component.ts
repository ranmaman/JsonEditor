import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../validators';

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

  validation_messages = {
    'name': [
      { type: 'required', message: 'Environment name is required' }
    ],
    'environmenttype': [
      { type: 'maxlength', message: 'Please select environment type' }
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
      name: new FormControl('', Validators.required),
      environmenttype: new FormControl(this.environmentTypes[0], Validators.required),
      industries: new FormControl(this.industries[0], Validators.required),
      chefWSAddress: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$")])),
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


}