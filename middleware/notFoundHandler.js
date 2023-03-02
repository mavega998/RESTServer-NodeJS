const boom = require('@hapi/boom');
const { errorLog } = require('../utils/log.util');

function notFoundHandler(req, res) {
  const {
    output: { statusCode, payload }
  } = boom.notFound();
  errorLog(`[${req.url}](${statusCode}): ${payload.message}`);
  res.status(statusCode).json(payload);
}

module.exports = notFoundHandler;