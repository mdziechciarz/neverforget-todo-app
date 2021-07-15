import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  deadline: {
    type: Date,
    default: null
  },
  priority: {
    type: Number,
    default: 0
  },
  isDone: {
    type: Boolean,
    default: false
  }
})

const Task = mongoose.model('Task', TaskSchema);

export default Task;