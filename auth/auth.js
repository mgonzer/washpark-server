const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validators = require('./validators');
require('dotenv').config();

router.post('/register', (req, res, next)=>{
  if (validators.validName(req.body.username) && req.body.pin == process.env.PIN){
    queries.getPatientByUsername(req.body.username)
    .then(user => {
      if(!user){
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
          const patient = {
            first_name: req.body.first_name,
            username: req.body.username,
            password: hash
          }
          queries.createPatient(patient)
          .then(id => {
            jwt.sign({
              id
            },process.env.TOKEN_SECRET, {expiresIn:'2h'}, (err, token)=>{
              res.json({
                id,
                token,
                message: 'Working'
              })
            })
          })
        })
      }else{
        res.status(404)
        next(new Error('Username in use'))
      }
    })
  } else {
    res.status(404)
    next(new Error('Invalid PIN'))
  }
  })


router.post('/login', (req, res, next)=>{
  if(validators.validName(req.body.username)){
    queries.getPatientByUsername(req.body.username)

    .then((patient)=>{
      if(patient){
        bcrypt.compare(req.body.password, patient.password)
        .then((result)=>{
          if(result){
            jwt.sign({
              id: patient.id
            }, process.env.TOKEN_SECRET, {expiresIn: '5h'}, (err, token) => {
              res.json({
                id: patient.id,
                token,
                message: 'Working'
              })
            });
          }else{
            res.status(404)
            next(new Error('Invalid User'))
          }
        })
      } else {
        res.status(404)
        next(new Error('Invalid Login'))
      }
    })
  } else {
    res.status(404)
    next(new Error('Invalid Login'))
  }
})

router.post('/admin', (req, res, next)=>{
  if(validators.validName(req.body.username)){
    queries.getAdmin(req.body.username)
    .then((admin)=>{
      if(admin){
        bcrypt.compare(req.body.password, admin.password)
        .then((result)=>{
          if(result){
            console.log(result);
            jwt.sign({
              id: admin.id
            }, process.env.TOKEN_SECRET, {expiresIn: '5h'}, (err, token) => {
              res.json({
                id: admin.id,
                token,
                message: 'Working'
              })
            });
          }else{
            res.status(404)
            next(new Error('Invalid User'))
          }
        })
      } else {
        res.status(404)
        next(new Error('Invalid Login'))
      }
    })
  } else {
    res.status(404)
    next(new Error('Invalid Login'))
  }
})


module.exports = router;
