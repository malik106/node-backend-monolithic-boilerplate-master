const demoService = require('../services/demo');

const defaultErrorType = 'INTERNAL_SERVER_ERROR';

const defaultErrorMsg = 'Something went wrong. Please try again later';

exports.getCompanies = async (req, res) => {
  try {
    const companies = await demoService.getCompanies(req.query.itemsPerPage, req.query.offset);
    if (companies && companies.length) {
      return res.status(200)
        .json({
          companies,
        });
    }
    return res.status(404)
      .json({
        error_type: 'COMPANIES_NOT_FOUND',
        message: 'No companies found',
      });
  } catch (error) {
    return res.status(error.statusCode || 500)
      .json({
        error_type: error.errorType || defaultErrorType,
        error_message: error.errorMessage || defaultErrorMsg,
      });
  }
};
