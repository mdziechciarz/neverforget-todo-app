import Joi from 'joi';
import JoiObjectId from 'joi-objectid';
Joi.objectId = JoiObjectId(Joi, 'valid id');

export const getOne = {
  params: Joi.object().keys({
    category_id: Joi.objectId().required()
  })
}
export const create = {
  body: Joi.object().keys({
    name: Joi.string().required()
  })
}
export const update = {
  body: Joi.object().keys({
    name: Joi.string().required()
  }),
  params: Joi.object().keys({
    category_id: Joi.objectId().required()
  })
}
export const remove = {
  params: Joi.object().keys({
    task_id: Joi.objectId().required()
  })
}