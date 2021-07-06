const joi = require('@hapi/joi');

exports.validateDataChunk = async (req, res, next) => {
  const packet = {
    ...req.query,
  };

  const schema = joi.object({
    itemsPerPage: joi.number().integer().min(1).max(100),
    offset: joi.number().integer().min(0),
  });

  try {
    const result = await schema.validateAsync(packet);
    if (result) {
      next();
    }
  } catch (error) {
    return res.status(400)
      .json({
        errorType: 'VALIDATION_ERROR',
        errorMessage: error.details[0].message,
      });
  }
};
