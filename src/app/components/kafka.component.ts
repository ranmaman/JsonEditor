import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../validators';

import { FieldProperties } from '.';

export class KafkaComponent {
  fb: FormBuilder = new FormBuilder();

  private _KafkaHostField: FieldProperties = new FieldProperties('', [Validators.required, , Validators.pattern("^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$")], 'Kafka Host', [{ type: 'required', message: 'this field is required' }, { type: 'pattern', message: 'value needs to be a valid ip address' }], ["default_attributes", "opKafka", "Kafka_Hosts"]);
  private _KafkaHostsField: FieldProperties = new FieldProperties(this._KafkaHostField, [], 'Kafka Hosts ip list', [], ["default_attributes", "opKafka", "Kafka_Hosts"]);

  private _ZKHostField: FieldProperties = new FieldProperties('', [Validators.required, , Validators.pattern("^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$")], 'Zookeeper Host', [{ type: 'required', message: 'this field is required' }, { type: 'pattern', message: 'value needs to be a valid ip address' }], ["default_attributes", "opKafka", "ZooKeeper_Hosts"]);
  private _ZKHostsField: FieldProperties = new FieldProperties(this._KafkaHostField, [], 'Zookeeper Hosts ip list', [], ["default_attributes", "opKafka", "ZooKeeper_Hosts"]);

  private _LogsField: FieldProperties = new FieldProperties('/opt/op/kafka-logs', [Validators.required, Validators.pattern("^(/[^/ ]*)+/?$")], 'Kafka logs location', [{ type: 'required', message: 'this field is required' }, { type: 'pattern', message: 'value needs to be valid linux path' }], ["default_attributes", "opKafka", "kafka_conf", "log.dirs"]);
  private _TopicLogsField: FieldProperties = new FieldProperties('/opt/kafka/topics', [Validators.required, Validators.pattern("^(/[^/ ]*)+/?$")], 'Kafka logs location per topic', [{ type: 'required', message: 'this field is required' }, { type: 'pattern', message: 'value needs to be valid linux path' }], ["default_attributes", "opKafka", "kafka_logs_dir"]);
  private _ReplicationFactorField: FieldProperties = new FieldProperties(1, [Validators.required], 'Kafka replication factor', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "opKafka", "replication_factor"]);
  private _RunningZkIdField: FieldProperties = new FieldProperties(1, [Validators.required], 'Running zookeeper id', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "opKafka", "RunningZkId"]);
  private _TopicPartitionsField: FieldProperties = new FieldProperties(1, [Validators.required], 'Topic partitions number', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "opKafka", "topic_partitions"]);
  private _ClientPortField: FieldProperties = new FieldProperties(9092, [Validators.required], 'Kafka client port', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "opKafka", "kafka_client_port"]);
  private _ZKClientPortField: FieldProperties = new FieldProperties(2181, [Validators.required], 'Zookeeper client port', [{ type: 'required', message: 'this field is required' }], ["default_attributes", "opKafka", "zookeeper_client_port"]);

    /**
     * Getter ZKClientPortField
     * @return {FieldProperties }
     */
	public get ZKClientPortField(): FieldProperties  {
		return this._ZKClientPortField;
	}

    /**
     * Setter ZKClientPortField
     * @param {FieldProperties } value
     */
	public set ZKClientPortField(value: FieldProperties ) {
		this._ZKClientPortField = value;
	}
  
  /**
     * Getter ClientPortField
     * @return {FieldProperties }
     */
	public get ClientPortField(): FieldProperties  {
		return this._ClientPortField;
	}

    /**
     * Setter ClientPortField
     * @param {FieldProperties } value
     */
	public set ClientPortField(value: FieldProperties ) {
		this._ClientPortField = value;
	}
  

    /**
     * Getter TopicLogsField
     * @return {FieldProperties }
     */
	public get TopicLogsField(): FieldProperties  {
		return this._TopicLogsField;
	}

    /**
     * Setter TopicLogsField
     * @param {FieldProperties } value
     */
	public set TopicLogsField(value: FieldProperties ) {
		this._TopicLogsField = value;
	}

    /**
     * Getter ZKHostField
     * @return {FieldProperties }
     */
	public get ZKHostField(): FieldProperties  {
		return this._ZKHostField;
	}

    /**
     * Setter ZKHostField
     * @param {FieldProperties } value
     */
	public set ZKHostField(value: FieldProperties ) {
		this._ZKHostField = value;
	}

    /**
     * Getter ZKHostsField
     * @return {FieldProperties }
     */
	public get ZKHostsField(): FieldProperties  {
		return this._ZKHostsField;
	}

    /**
     * Setter ZKHostsField
     * @param {FieldProperties } value
     */
	public set ZKHostsField(value: FieldProperties ) {
		this._ZKHostsField = value;
	}

    /**
     * Getter LogsField
     * @return {FieldProperties }
     */
	public get LogsField(): FieldProperties  {
		return this._LogsField;
	}

    /**
     * Setter LogsField
     * @param {FieldProperties } value
     */
	public set LogsField(value: FieldProperties ) {
		this._LogsField = value;
	}

    /**
     * Getter ReplicationFactorField
     * @return {FieldProperties }
     */
	public get ReplicationFactorField(): FieldProperties  {
		return this._ReplicationFactorField;
	}

    /**
     * Setter ReplicationFactorField
     * @param {FieldProperties } value
     */
	public set ReplicationFactorField(value: FieldProperties ) {
		this._ReplicationFactorField = value;
	}

    /**
     * Getter RunningZkIdField
     * @return {FieldProperties }
     */
	public get RunningZkIdField(): FieldProperties  {
		return this._RunningZkIdField;
	}

    /**
     * Setter RunningZkIdField
     * @param {FieldProperties } value
     */
	public set RunningZkIdField(value: FieldProperties ) {
		this._RunningZkIdField = value;
	}

    /**
     * Getter TopicPartitionsField
     * @return {FieldProperties }
     */
	public get TopicPartitionsField(): FieldProperties  {
		return this._TopicPartitionsField;
	}

    /**
     * Setter TopicPartitionsField
     * @param {FieldProperties } value
     */
	public set TopicPartitionsField(value: FieldProperties ) {
		this._TopicPartitionsField = value;
	}
  
    /**
     * Getter KafkaHostField
     * @return {FieldProperties }
     */
	public get KafkaHostField(): FieldProperties  {
		return this._KafkaHostField;
	}

    /**
     * Setter KafkaHostField
     * @param {FieldProperties } value
     */
	public set KafkaHostField(value: FieldProperties ) {
		this._KafkaHostField = value;
	}

    /**
     * Getter KafkaHostsField
     * @return {FieldProperties }
     */
	public get KafkaHostsField(): FieldProperties  {
		return this._KafkaHostsField;
	}

    /**
     * Setter KafkaHostsField
     * @param {FieldProperties } value
     */
	public set KafkaHostsField(value: FieldProperties ) {
		this._KafkaHostsField = value;
	}
  

  
  
  GetForm(): FormGroup {

    return new FormGroup({
      ReplicationFactor: new FormControl(this.ReplicationFactorField.defaultValue, this.ReplicationFactorField.validators),
      KafkaHosts: new FormArray([this.fb.group({KafkaHost : new FormControl(this.KafkaHostField.defaultValue,this.KafkaHostField.validators)}),this.fb.group({KafkaHost : new FormControl(this.KafkaHostField.defaultValue,this.KafkaHostField.validators)}),this.fb.group({KafkaHost : new FormControl(this.KafkaHostField.defaultValue,this.KafkaHostField.validators)})]),
      ZKHosts: new FormArray([this.fb.group({ZKHost : new FormControl(this.ZKHostField.defaultValue,this.ZKHostField.validators)}),this.fb.group({ZKHost : new FormControl(this.ZKHostField.defaultValue,this.ZKHostField.validators)}),this.fb.group({ZKHost : new FormControl(this.ZKHostField.defaultValue,this.ZKHostField.validators)})]),
      Logs: new FormControl(this.LogsField.defaultValue, this.LogsField.validators),
      RunningZkId: new FormControl(this.RunningZkIdField.defaultValue, this.RunningZkIdField.validators),
      TopicPartitions: new FormControl(this.TopicPartitionsField.defaultValue, this.TopicPartitionsField.validators),
      TopicLogs: new FormControl(this.TopicLogsField.defaultValue, this.TopicLogsField.validators),
      ClientPort: new FormControl(this.ClientPortField.defaultValue, this.ClientPortField.validators),
      ZKClientPort: new FormControl(this.ZKClientPortField.defaultValue, this.ZKClientPortField.validators),
    });
  }

  patchValues(form: FormGroup, filecontent: any) {
    this.updateFormArray(form,this.KafkaHostsField,'KafkaHosts','KafkaHost',this.fb.group({KafkaHost : new FormControl(this.KafkaHostField.defaultValue,this.KafkaHostField.validators)}),filecontent)
    this.updateFormArray(form,this.ZKHostsField,'ZKHosts','ZKHost',this.fb.group({ZKHost : new FormControl(this.ZKHostField.defaultValue,this.ZKHostField.validators)}),filecontent)
    form.patchValue({ ReplicationFactor: this.ReplicationFactorField.getValueFromJson(filecontent)});
    form.patchValue({ Logs: this.LogsField.getValueFromJson(filecontent)});
    form.patchValue({ RunningZkId: this.RunningZkIdField.getValueFromJson(filecontent) });
    form.patchValue({ TopicPartitions: this.TopicPartitionsField.getValueFromJson(filecontent) });
    form.patchValue({ TopicLogs: this.TopicLogsField.getValueFromJson(filecontent) });
    form.patchValue({ ClientPort: this.ClientPortField.getValueFromJson( filecontent) });
    form.patchValue({ ZKClientPort: this.ZKClientPortField.getValueFromJson( filecontent) });
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

    origJson['default_attributes']['OPKafka'] = {}
    origJson['default_attributes']['OPKafka']['kafka_conf'] = {}
    origJson['default_attributes']['OPKafka']['kafka_conf']['log.dirs'] = form.get('Logs').value
    origJson['default_attributes']['OPKafka']['Zookeeper_Hosts'] = this.getFormArrayValues('ZKHost',<FormArray>form.get('ZKHosts'))
    origJson['default_attributes']['OPKafka']['Kafka_Hosts'] = this.getFormArrayValues('KafkaHost',<FormArray>form.get('KafkaHosts'))
    origJson['default_attributes']['OPKafka']['replication_factor'] = form.get('ReplicationFactor').value
    origJson['default_attributes']['OPKafka']['RunningZkId'] = form.get('RunningZkId').value
    origJson['default_attributes']['OPKafka']['topic_partitions'] = form.get('TopicPartitions').value
    origJson['default_attributes']['OPKafka']['kafka_logs_dir'] = form.get('TopicLogs').value
    origJson['default_attributes']['OPKafka']['kafka_client_port'] = form.get('ClientPort').value
    origJson['default_attributes']['OPKafka']['zookeeper_client_port'] = form.get('ZKClientPort').value
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

  addKafkaHost(form: FormGroup){
    const control = <FormArray>form.controls['KafkaHosts'];
    control.push(this.fb.group({KafkaHost : new FormControl(this.KafkaHostField.defaultValue,this.KafkaHostField.validators)}));
  }

  addZKHost(form: FormGroup){
    const control = <FormArray>form.controls['ZKHosts'];
    control.push(this.fb.group({ZKHost : new FormControl(this.ZKHostField.defaultValue,this.ZKHostField.validators)}));
  }
 
}