import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';

export class FieldProperties{
    private _defaultValue: any;
    private _validators: ValidatorFn[];
    private _description: string;
    private _validationMsg: any;
    private _options: string[];
    private _jsonInputMapping: any[];


    constructor(defultValue: any, validators:ValidatorFn[], description:string, validationMessage:any,jsonInputMapping?:any[], options?:string[]) {
        this.defaultValue = defultValue;
        this.validators = validators;
        this.description = description;
        this.validationMsg = validationMessage;
        this.jsonInputMapping = jsonInputMapping
        if(options)
            this.options = options
    }

    public static getValueFromJson(fields:string[], json:any){
        for(let f of fields){
            json = json[f]
        }
        console.log(fields + ' ' + json)
        return json;
    }

    public getValueFromJson1(json:any){
        for(let f of this.jsonInputMapping){
            json = json[f]
        }
        console.log(this.jsonInputMapping + ' ' + json)
        return json != undefined ? json : this.defaultValue
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
    public get jsonInputMapping(): any[] {
        return this._jsonInputMapping;
    }
    public set jsonInputMapping(value: any[]) {
        this._jsonInputMapping = value;
    }


}