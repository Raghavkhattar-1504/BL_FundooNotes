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

export const loginValidator = (req, res, next) => {
  console.log("insideValidator");
  
  const schema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)
        .required(),
    
    password: Joi.string()
        .min(8)
        .pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
        .required()
});

  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};