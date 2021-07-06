const demoModel = require('../models/demo');

exports.getCompanies = (itemsPerPage, offset) => demoModel.getCompanies(itemsPerPage, offset);
