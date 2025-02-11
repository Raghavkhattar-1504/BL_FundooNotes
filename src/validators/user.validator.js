import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string().email({ tlds: { allow: false } }).pattern(/@/).required(),
    phone: Joi.string().pattern(/^\d{10}$/).optional(),
    password: Joi.string().min(8).required()
});

  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
