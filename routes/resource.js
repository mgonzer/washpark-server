const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const bcrypt = require('bcrypt');
const authMiddleware = require('../auth/middleware')

router.get('/', (req, res, next)=>{
  queries.getAllResources()
  .then(resources=>{
    res.json(resources)
  })
})

router.get('/:id', (req, res, next) => {
  queries.getOneResource(req.params.id)
  .then(resource=>{
    res.json(resource)
  })
})

router.get('/category/:category', (req, res)=> {
  queries.getSomeResources(req.params.category)
  .then(resources=>{
    res.json(resources)
  })
})

router.put('/:id', authMiddleware.allowAdminAccess, (req, res)=>{
  queries.updateResource(req.params.id, req.body)
  .then(resource=>{
    res.json(resource[0])
  })
})

router.post('/', authMiddleware.allowAdminAccess, (req, res)=>{
  queries.addResource(req.body)
  .then(resource=>{
    res.json(resource[0])
  })
})

router.delete('/:id', authMiddleware.allowAdminAccess, (req, res)=>{
  queries.deleteResource(req.params.id)
  .then(()=>{
    res.json({
      deleted: true
    })
  })
})
module.exports = router
