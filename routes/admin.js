const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const authMiddleware = require('../auth/middleware')
const Patient = require('../models/patient')

router.put('/admin', authMiddleware.allowAdminAccess, (req, res)=>{
  let update = {password: bcrypt.hashSync(req.body.password, salt)}
  queries.updateAdmin(update)
  .then(admin=>{
    res.json(admin)
  })
})

router.get('/patients', authMiddleware.allowAdminAccess, (req, res)=>{
  Patient
  .query()
  .eager('[resources, notes]')
  .then(patient=>{
    res.json(patient)
  })
})

router.get('/patients/:id', authMiddleware.allowAdminAccess, (req, res)=>{
  Patient
  .query()
  .findById(req.params.id)
  .eager('[resources, notes]')
  .then(patient=>{
    res.json(patient)
  })
})

router.put('/patients/:id', authMiddleware.allowAdminAccess, (req, res)=>{
  queries.updatePatient(req.params.id, req.body)
  .then(patient=>{
    res.json(patient)
  })
})

router.delete('/patients/:id', authMiddleware.allowAdminAccess, (req, res)=>{
  queries.deletePatient(req.params.id)
  .then(()=>{
    res.json({
      deleted: true
    })
  })
});

router.post('/patients/:id/notes', authMiddleware.allowAdminAccess, (req, res)=>{
  let note = {body: req.body.body, patient_id: req.params.id}
  queries.addNote(note)
  .then(note=>{
    res.json(note[0])
  })
})

router.delete('/patients/:id/notes/:noteId', authMiddleware.allowAdminAccess, (req, res)=>{
  queries.deleteNote(req.params.id, req.params.noteId)
  .then(()=>{
    res.json({
      deleted: true
    })
  })
})

router.post('/patients/:id/resources', authMiddleware.allowAdminAccess, (req, res)=>{
  let resource = {patient_id: req.params.id, resource_id:req.body.resource_id}
  queries.addResourceToPatient(resource)
  .then(resource=>{
    res.json(resource[0])
  })
})

router.delete('/patients/:id/resources/:rid', authMiddleware.allowAdminAccess, (req, res)=>{
  queries.deleteResourceFromPatient(req.params.id, req.params.rid)
  .then(()=>{
    res.json({
      deleted: true
    })
  })
})

module.exports = router;
