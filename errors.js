function myError(err, req, res, next) {
  //   res.json({
  //     error: "something bad happened",
  //     message: err.message
  //   });
  next();
}
module.exports = {
  myError
};
