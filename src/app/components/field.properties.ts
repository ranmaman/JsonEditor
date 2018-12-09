import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';

export class FieldProperties{
    private _defaultValue: any;
    private _validators: ValidatorFn[];
    private _description: string;
    private _validationMsg: any;
    private _options: string[];

    constructor(defultValue: any, validators:ValidatorFn[], description:string, validationMessage:any, options?:string[]) {
        this.defaultValue = defultValue;
        this.validators = validators;
        this.description = description;
        this.validationMsg = validationMessage;
        if(options)
            this.options = options
    }

    public get options(): any {
        return this._options;
    }
    public set options(value: any) {
        this._options = value;
    }
    public get defaultValue(): any {
        return this._defaultValue;
    }
    public set defaultValue(value: any) {
        this._defaultValue = value;
    }
    public get validators(): ValidatorFn[] {
        return this._validators;
    }
    public set validators(value: ValidatorFn[]) {
        this._validators = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get validationMsg(): any {
        return this._validationMsg;
    }
    public set validationMsg(value: any) {
        this._validationMsg = value;
    }


}