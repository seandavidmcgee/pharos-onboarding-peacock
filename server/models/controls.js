import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const CollectionName = 'test_enterprise';

const controlsSchema = new Schema({
  name: { type: 'String', required: true },
  controls: [
      {
              "controlName": { type: 'String', required: true },
              "stateName": { type: 'String' , required: true },
              "type": { type: 'String' , required: true },
              "defaultValue": { type: 'Boolean', required: true },
              "providedValue": { type: 'Boolean', required: true },
              "capEx_defaultValue": { type: 'Number', required: true },
              "capEx_providedValue": { type: 'Number', required: true },
              "opEx_defaultValue": { type: 'Number', required: true },
              "opEx_providedValue": { type: 'Number', required: true },
              "employees_defaultValue": { type: 'Number', required: true },
              "employees_providedValue": { type: 'Number', required: true },
              "vendors_defaultValue": { type: 'Number', required: true },
              "vendors_providedValue": { type: 'Number', required: true }
      }
  ]
});

export default mongoose.model('Controls', controlsSchema, CollectionName);
