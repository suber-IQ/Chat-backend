import Joi, { ObjectSchema } from 'joi';


const loginSchema: ObjectSchema = Joi.object().keys({

  username: Joi.string().required().min(4).max(8).messages({
    'string.base': 'Username must be of type string',
    'string.min': 'Invaild username',
    'string.max': 'Invaild username',
    'string.empty': 'Username is a required field',
  }),
  password: Joi.string().required().min(4).max(8).messages({
    'string.base': 'Password must be of type string',
    'string.min': 'Invaild password',
    'string.max': 'Invaild password',
    'string.empty': 'Password is a required field',
  })

});

export { loginSchema };

