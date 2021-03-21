import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let GallerySchema = new Schema({
  image: {
    type: String
  },
  imagetitle:  {
    type: String
  },
  imagedesc:  {
    type: String
  },
  created: {type: Date, default: Date.now}
});


export default mongoose.model('Gallery', GallerySchema);