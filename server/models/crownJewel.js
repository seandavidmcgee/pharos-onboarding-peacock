import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const crownJewelSchema = new Schema({
    jewel: { type: 'String', required: true },
    description: { type: 'String', required: true }
});

export default mongoose.model('CrownJewel', crownJewelSchema);
