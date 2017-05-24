import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const CollectionName = 'test_enterprise';

const investmentSchema = new Schema({
  name: { type: 'String', required: true },
  investments : [
        {
            "investment" : { type: 'String', required: true },
            "stateName" : { type: 'String', required: true },
            "defaultValue" : { type: 'Number', required: true },
            "providedValue" : { type: 'Number', required: true }
        }
    ]
});

export default mongoose.model('Investment', investmentSchema, CollectionName);
