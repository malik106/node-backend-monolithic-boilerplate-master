const express = require('express');

const router = express.Router();

const demoController = require('../controllers/demo');

const demoMiddleware = require('../middlewares/demo');

const dataChunkValidator = require('../validators/validate-data-chunk');

router.get('/companies', [dataChunkValidator.validateDataChunk, demoMiddleware.demoMiddleware], demoController.getCompanies);

module.exports = router;
