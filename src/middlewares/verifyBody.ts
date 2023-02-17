import * as yup from 'yup';

export default function verifyBody(schema: yup.ObjectSchema<any>) {

  return async (req, res, next) => {
    try {
      
      schema.validateSync(req.body, { abortEarly: false });
      req.body = schema.cast(req.body, { stripUnknown: true });
      next();

    } catch (err) {
        const error = err as yup.ValidationError;
      res.status(400).json({ error: error.errors });
    }
  };

}