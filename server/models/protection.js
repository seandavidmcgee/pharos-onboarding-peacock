import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const CollectionName = 'test_enterprise';

const protectionSchema = new Schema({
  name: { type: 'String', required: true },
  protections : [
        {
            "protection" : { type: 'String', required: true },
            "stateName": { type: 'String', required: true },
            "extCyberDefault" : { type: 'Number', required: true },
            "extCyberProvided" : { type: 'Number', required: true },
            "extPhysicalDefault" : { type: 'Number', required: true },
            "extPhysicalProvided" : { type: 'Number', required: true },
            "extSocialDefault" : { type: 'Number', required: true },
            "extSocialProvided" : { type: 'Number', required: true },
            "extThirdDefault" : { type: 'Number', required: true },
            "extThirdProvided" : { type: 'Number', required: true },
            "intCyberDefault" : { type: 'Number', required: true },
            "intCyberProvided" : { type: 'Number', required: true },
            "intPhysicalDefault" : { type: 'Number', required: true },
            "intPhysicalProvided" : { type: 'Number', required: true },
            "intSocialDefault" : { type: 'Number', required: true },
            "intSocialProvided" : { type: 'Number', required: true },
            "intPrivDefault" : { type: 'Number', required: true },
            "intPrivProvided" : { type: 'Number', required: true }
        }
    ]
});

export default mongoose.model('Protection', protectionSchema, CollectionName);
