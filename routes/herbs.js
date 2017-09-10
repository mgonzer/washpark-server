const express = require('express');
const router = express.Router();
const queries = require('../db/queries')
const authMiddleware = require('../auth/middleware')


router.get('/', authMiddleware.allowAdminAccess, (req, res)=>{
  queries.getHerbs()
  .then(herbs=>{
    res.json(herbs)
  })
})

router.get('/:id', authMiddleware.allowAdminAccess, (req, res)=>{
  queries.getOneHerb(req.params.id)
  .then(herb=>{
    res.json(herb)
  })
})

router.post('/', authMiddleware.allowAdminAccess, (req, res)=>{
  queries.addHerb(req.body)
  .then(herbs=>{
    res.json(herbs[0])
  })
})

router.put('/:id', authMiddleware.allowAdminAccess, (req,res)=>{
  queries.modifyHerb(req.params.id, req.body)
    .then(herb=>{
      res.json(herb[0])
    })
})

router.delete('/:id', authMiddleware.allowAdminAccess, (req, res)=>{
  queries.deleteHerb(req.params.id)
    .then(()=>{
      res.json({
        deleted: true
      })
    })
})

module.exports = router;
