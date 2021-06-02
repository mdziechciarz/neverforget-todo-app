import Task from '../models/task.model.js';
import Category from '../models/category.model.js';
// import User from '../models/user.model.js';
import { ForbiddenError, NotFoundError } from '../helpers/errors/ApiError.js';

export const get = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user_id: req.user_id }, { '__v': 0 });

    return res.status(200).json({
      tasks
    })
  } catch (err) {
    next(err);
  }
}

export const getOne = async (req, res, next) => {
  try {
    const { task_id } = req.params;

    const task = await Task.findOne({ _id: task_id }, { '__v': 0 });
    if (!task)
      throw new NotFoundError('Task Not Found');
    if (!task.user_id.equals(req.user_id))
      throw new ForbiddenError();

    return res.status(200).json({ task });
  } catch (err) {
    next(err);
  }
}

export const create = async (req, res, next) => {
  try {
    const { category_id, title, description, deadline, priority } = req.body;

    const taskData = { user_id: req.user_id, category_id, title, description, deadline, priority };

    const category = await Category.findById(category_id);
    if (!category)
      throw new NotFoundError('Category Not Found')
    if (!category.user_id.equals(req.user_id))
      throw new ForbiddenError();

    const task = new Task(taskData);
    await task.save();

    const result = task.toObject();
    delete result['__v'];

    return res.status(201).json({
      task: result
    })

  } catch (err) {
    console.log(err);
    next(err);
  }
}

export const update = async (req, res, next) => {
  try {
    const { task_id } = req.params;
    const { category_id, title, description, deadline, priority } = req.body;
    const updateData = { category_id, title, description, deadline, priority };

    const task = await Task.findOne({ _id: task_id }, { '__v': 0 });
    if (!task)
      throw new NotFoundError('Task Not Found');
    if (!task.user_id.equals(req.user_id))
      throw new ForbiddenError();

    for (const key in updateData)
      task[key] = updateData[key];

    await task.save();

    return res.status(200).json({ task })
  } catch (err) {
    next(err);
  }

}

export const remove = async (req, res, next) => {
  try {
    const { task_id } = req.params;

    const task = await Task.findOne({ _id: task_id });
    if (!task)
      throw new NotFoundError('Task Not Found');
    if (!task.user_id.equals(req.user_id))
      throw new ForbiddenError();

    await task.deleteOne()

    return res.status(204).json({});
  } catch (err) {
    next(err);
  }
}

