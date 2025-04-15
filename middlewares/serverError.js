//function error
function serverError(req, res, next) {
  console.error(error.stack);
  res.status(500).send("Something broke in the server!");
}

//error exports
module.exports = serverError;