//function error
function notFoundError(req, res, next) {
  res.status(404).send("That route does not exist!");
}

//error exports
module.exports = notFoundError;