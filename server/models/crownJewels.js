import mongoose from 'mongoose';
import CrownJewel from './crownJewel';
const Schema = mongoose.Schema;

const crownJewelsSchema = new Schema({
  categoryName: { type: 'String', required: true },
  jewels: [
      "jewel": { type: 'String', required: true },
      "description": { type: 'String', required: true }
  ]
});

export default mongoose.model('CrownJewels', crownJewelsSchema);
