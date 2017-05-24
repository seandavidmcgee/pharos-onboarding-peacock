import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const CollectionName = 'uploads';

const UploadItem = new Schema({
    img: { data: Buffer, contentType: String }
  });

export default mongoose.model('Upload', UploadItem, CollectionName);
