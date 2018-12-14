//alternative for express-async-errors for remove boilerplate try-catch
module.exports = function(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (err) {
      next(err);
    }
  };
};
