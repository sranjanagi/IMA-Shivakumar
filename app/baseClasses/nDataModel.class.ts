import { datamodelsent } from '../src/app/models/datamodelsent.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
datamodelsent: datamodelsent;
//DECLARE NEW VARIABLE

constructor() {
this.datamodelsent = new datamodelsent();
//CREATE NEW DM INSTANCE
    }
}