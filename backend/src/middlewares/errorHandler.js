function notFoundHandler(req, res) {
  res.status(404).json({ message: 'Not found.' });
}

function errorHandler(error, req, res, next) {
  if (res.headersSent) {
    return next(error);
  }

  const message = error?.message || 'Internal server error';
  res.status(500).json({ message });
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
