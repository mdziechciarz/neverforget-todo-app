import Category from '../models/category.model.js';
import Task from '../models/task.model.js';
import User from '../models/user.model.js';
import { NotFoundError, ForbiddenError } from '../helpers/errors/ApiError.js';


export const get = async (req, res, next) => {
  if (!req.user_id) return res.status(401).send();

  try {
    const categories = await Category.find({ user_id: req.user_id }, { '__v': 0 });

    return res.status(200).json({ categories });

  } catch (err) {
    console.log(err);
    next(err);
  }

}

export const getOne = async (req, res, next) => {
  try {
    const { category_id } = req.params;

    const category = await Category.findOne({ _id: category_id }, { '__v': 0 });
    if (!category)
      throw new NotFoundError('Category Not Found');
    if (!category.user_id.equals(req.user_id))
      throw new ForbiddenError();

    return res.status(200).json({ category });
  } catch (err) {
    next(err);
  }
}

export const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const category = new Category({
      user_id: req.user_id,
      name
    });
    await category.save();

    const result = category.toObject();
    delete result['__v'];

    return res.status(201).json({ category: result });

  } catch (err) {
    next(err);
  }
}

export const update = async (req, res, next) => {
  try {
    const { category_id } = req.params;
    const { name } = req.body;

    const category = await Category.findOne({ _id: category_id }, { '__v': 0 });
    if (!category)
      throw new NotFoundError('Category Not Found');
    if (!category.user_id.equals(req.user_id))
      throw new ForbiddenError();

    category.name = name;

    await category.save();

    return res.status(200).json({ category })
  } catch (err) {
    next(err);
  }
}

export const remove = async (req, res, next) => {
  try {
    const { category_id } = req.params;

    const category = await Category.findOne({ _id: category_id });
    if (!category)
      throw new NotFoundError('Category Not Found');
    if (!category.user_id.equals(req.user_id))
      throw new ForbiddenError();

    await Task.deleteMany({ category_id });
    await category.deleteOne()

    res.status(204).json();
  } catch (err) {
    next(err)
  }
}
