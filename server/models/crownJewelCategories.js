import mongoose from 'mongoose';
import CrownJewels from '../models/crownJewels';
const Schema = mongoose.Schema;
const CollectionName = 'test_enterprise';

const crownJewelCategorySchema = new Schema({
  name: { type: 'String', required: true },
  categories: [
      {
          "categoryName": { type: 'String', required: true },
          "jewels": [
              "jewel": { type: 'String', required: true },
              "description": { type: 'String', required: true }
          ]
      }
  ]
});

export default mongoose.model('CrownJewelCategories', crownJewelCategorySchema, CollectionName);
