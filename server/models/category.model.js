import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

export default mongoose.model('Category', CategorySchema);
