function GetSessionUser(req, res, next) {
  //TODO: validate session 
  res.locals.userId = null;
  next();
}

module.exports = { GetSessionUser }