import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FieldProperties } from './field.properties';
import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../validators';

export class UserDetailsComponent {
  



  genders = [
    "Male",
    "Female",
    "Other"
  ];

  countries = [
    new Country('UY', 'Uruguay'),
    new Country('US', 'United States'),
    new Country('AR', 'Argentina')
  ];

  validation_messages = {
    'fullname': [
      { type: 'required', message: 'Full name is required' }
    ],
    'bio': [
      { type: 'maxlength', message: 'Bio cannot be more than 256 characters long' },
    ],
    'gender': [
      { type: 'required', message: 'Please select your gender' },
    ],
    'birthday': [
      { type: 'required', message: 'Please insert your birthday' },
    ],
    'phone': [
      { type: 'required', message: 'Phone is required' },
      { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
    ]
  };

  descriptions = {
    'fullname':
    { message: 'fullname description' }
    ,
    'bio':
    { message: 'bio description' },

    'gender':
    { message: 'gender description' },

    'birthday':
    { message: 'birthday description' },
    'country':
    { message: 'country description' },
    'phone':
    { message: 'phone description' }
  };

  GetForm(): FormGroup {
    return new FormGroup({
      fullname: new FormControl('', Validators.required),
      bio: new FormControl('', Validators.maxLength(256)),
      birthday: new FormControl('', Validators.required),
      gender: new FormControl(this.genders[0], Validators.required),
      country_phone: new FormGroup({
        country: new FormControl(this.countries[0], Validators.required),
        phone: new FormControl('', {
          validators: Validators.compose([
            Validators.required
          ])
        })
      })
    })
  }

  GetValidationMessages() {
    return this.validation_messages
  }

  GetGenders() {
    return this.genders
  }

  GetCountries() {
    return this.countries
  }

  GetDescriptions() {
    return this.descriptions
  }

  patchValues(form: FormGroup, filecontent: any) {
    form.patchValue({ fullname: filecontent.default_attributes.linux_version });
    form.patchValue({ bio: filecontent.default_attributes.vertica.verticaVersion });

  }

}