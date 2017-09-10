const jwt = require('jsonwebtoken')

require('dotenv').config();

function allowAccess(req, res, next){
  const authHeader = req.get('Authorization');
  const token = authHeader.split(' ')[1]

  if(token){
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if(!err && req.params.id == decoded.id) return next();
      res.status(401)
      next(new Error('Un-Authorized'))
    });
  } else {
    res.status(401)
    next(new Error('UnAuthorized'))
  }
}

function allowAdminAccess(req, res, next){
  const authHeader = req.get('Authorization');
  const token = authHeader.split(' ')[1]

  if(token){
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if(!err && "admin" == decoded.id) return next();
      res.status(401)
      next(new Error('Un-Authorized', decoded.id))
    });
  } else {
    res.status(401)
    next(new Error('UnAuthorized'))
  }
}

module.exports = {
  allowAccess,
  allowAdminAccess
}
