import mongoose from 'mongoose';

const User = mongoose.model('User', new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // tasks: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Task',
  //   default: []
  // }],
  // categories: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Category',
  //   default: []
  // }]
}));

export default User;