import Task from '../models/task.model.js';
import Category from '../models/category.model.js';
import User from '../models/user.model.js';

export const get = async (req, res) => {
  if (!req.user_id) return res.status(401).send();

  try {
    const tasks = await Task.find({ user_id: req.user_id }, { '__v': 0 });

    return res.status(200).json({
      success: true,
      data: tasks
    })
  } catch (error) {
    return res.status(500).send();
  }
}

export const create = async (req, res) => {
  const { category_id, title, description, deadline, priority } = req.body;

  // VALIDATION!!!
  if (!category_id || !title) {
    return res.status(400).send();
  }
  if (!req.user_id) {
    return res.status(401).send();
  }
  // 

  const taskData = { title, category_id, description };
  if (deadline) taskData.deadline = deadline;
  if (priority) taskData.priority = priority;

  // 

  try {
    const task = new Task({
      ...taskData,
      user_id: req.user_id
    });
    await task.save();

    const category = await Category.findById(task.category_id);
    category.tasks.push(task);
    await category.save();

    const user = await User.findById(req.user_id);
    user.tasks.push(task);
    await user.save();

    return res.status(201).json({
      task
    })

  } catch (error) {
    console.log(error);
    res.status(500).send();
  }

}

export const update = async (req, res) => {
  if (!req.user_id) return res.status(401).send();

  const { task_id } = req.params;
  const { category_id, title, description, deadline, priority } = req.body;

  // VALIDATION
  if (![task_id, category_id, title, description, deadline, priority].every(el => el !== undefined)) {
    return res.status(400).send();
  }
  // 

  try {
    const task = await Task.findOneAndUpdate({ _id: task_id }, { category_id, title, description, deadline, priority }, { new: true });

    return res.status(200).json({
      success: true,
      data: task
    })
  } catch (error) {
    return res.status(500).send();
  }

}

export const remove = async (req, res) => {
  if (!req.user_id) return res.status(401).send();

  const { task_id } = req.params;
  // VALIDATION
  if (!task_id) return res.status(400).send();
  // 
  try {
    await Task.deleteOne({ _id: task_id });

    return res.status(200).json({
      success: true
    });
  } catch (error) {
    return res.status(500).send();
  }
}

