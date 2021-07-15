import Joi from 'joi';
import JoiObjectId from 'joi-objectid';
Joi.objectId = JoiObjectId(Joi, 'valid id');


export const getOne = {
  params: Joi.object().keys({
    task_id: Joi.objectId().required()
  })
}

export const create = {
  body: Joi.object().keys({
    category_id: Joi.objectId().required(),
    title: Joi.string().max(50).required(),
    description: Joi.string().max(350),
    deadline: Joi.date().allow(null),
    priority: Joi.number().valid(0, 1, 2, 3),
  })
}

export const update = {
  body: Joi.object().keys({
    category_id: Joi.objectId().required(),
    title: Joi.string().max(50).required(),
    description: Joi.string().max(350),
    deadline: Joi.date().allow(null),
    priority: Joi.number().valid(0, 1, 2, 3),
    isDone: Joi.boolean()
  }),
  params: Joi.object().keys({
    task_id: Joi.objectId().required()
  })
}

export const remove = {
  params: Joi.object().keys({
    task_id: Joi.objectId().required()
  })
}
