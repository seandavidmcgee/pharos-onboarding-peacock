import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const CollectionName = 'test_enterprise';

const territorySchema = new Schema({
  name: { type: 'String', required: true },
  territories: [
      {
          "territory": { type: 'String', required: true },
          "stateName": { type: 'String', required: true },
          "defaultValue": { type: 'Boolean', required: true },
          "providedValue": { type: 'Boolean', required: true }
       }
  ],
  "enterprise_defaultValue": { type: 'Number', required: true },
  "enterprise_providedValue": { type: 'Number', required: true },
  "territory_defaultValue": { type: 'Number', required: true },
  "territory_providedValue": { type: 'Number', required: true }
});

export default mongoose.model('Territory', territorySchema, CollectionName);
