import Task from '../models/task.model.js';
import Category from '../models/category.model.js';

export async function get(user_id) {
  const tasks = await Task.find({ user_id }, { '__v': 0 });
}

export async function create(taskData) {

}