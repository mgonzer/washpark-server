const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const bcrypt = require('bcrypt');
const authMiddleware = require('../auth/middleware')
const Patient = require('../models/patient')


router.get('/:id', authMiddleware.allowAccess, (req, res)=>{
  Patient
  .query()
  .findById(req.params.id)
  .eager('[resources, notes]')
  .then(patient=>{
    res.json(patient)
  })
})

router.delete('/:id/notes/:noteId', authMiddleware.allowAccess, (req, res)=>{
  queries.deleteNote(req.params.id, req.params.noteId)
  .then(()=>{
    res.json({
      deleted: true
    })
  })
})

router.post('/:id/resources', authMiddleware.allowAccess, (req, res)=>{
  let resource = {patient_id: req.params.id, resource_id:req.body.resource_id}
  queries.addResourceToPatient(resource)
  .then(resource=>{
    res.json(resource[0])
  })
})

router.delete('/:id/resources/:rid', authMiddleware.allowAccess, (req, res)=>{
  queries.deleteResourceFromPatient(req.params.id, req.params.rid)
  .then(()=>{
    res.json({
      deleted: true
    })
  })
})

module.exports = router;
