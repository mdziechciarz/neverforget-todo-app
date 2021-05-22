import Category from '../models/category.model.js';
import Task from '../models/task.model.js';
import User from '../models/user.model.js';

export const create = async (req, res) => {
  const { name } = req.body;

  // Validation!!!
  if (!name) return res.status(400).send();
  if (!req.user_id) return res.status(401).send();
  // 

  try {
    const category = new Category({
      user_id: req.user_id,
      name
    });
    await category.save();

    const user = await User.findById(req.user_id);
    user.categories.push(category);
    await user.save();

    return res.status(201).json({
      success: true,
      data: category
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }

}

export const get = async (req, res) => {
  if (!req.user_id) return res.status(401).send();

  try {
    // const user = await User.findOne({ _id: req.user_id }, { _id: 0, categories: 1 }).populate({
    //   path: 'categories',
    //   select: 'name tasks',
    //   populate: {
    //     path: 'tasks',
    //     select: 'title category_id'
    //   }
    // });

    const categories = Category.find({ user_id: req.user_id });

    return res.status(200).json({
      success: true,
      data: user
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }

}

export const remove = async (req, res) => {
  if (!req.user_id) return res.status(401).send();

  const { category_id } = req.params;

  // Validation!!!
  if (!category_id) return res.status(400).send();
  // 

  try {
    // const user = await User.findById(req.user_id);
    // user.categories.remove(category_id);
    // await user.save();

    await Task.deleteMany({ category_id });

    await Category.deleteOne({ _id: category_id })

    res.status(200).json({
      success: true
    });
  } catch (error) {
    res.status(500).send();
  }
}

export const update = async (req, res) => {
  if (!req.user_id) return res.status(401).send();

  const { category_id } = req.params;
  const { name } = req.body;

  // VALIDATION
  if (![category_id, name].every(el => el !== undefined)) {
    return res.status(400).send();
  }
  // 

  try {
    const category = await Category.findOneAndUpdate({ _id: category_id }, { name }, { new: true });

    return res.status(200).json({
      success: true,
      data: task
    })
  } catch (error) {
    return res.status(500).send();
  }

}