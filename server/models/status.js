import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const CollectionName = 'test_enterprise';

const statusSchema = new Schema({
  name: { type: 'String', required: true },
  statuses : [
        {
            "status" : { type: 'String', required: true },
            "statusName" : { type: 'String', required: true },
            "defaultValue" : { type: 'String', required: true },
            "providedValue" : { type: 'String', required: true }
        }
    ]
});

export default mongoose.model('Status', statusSchema, CollectionName);
