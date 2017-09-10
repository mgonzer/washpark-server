const knex = require('./knex');

module.exports = {
  getAdmin: function(username){
    return knex('admin').where('username', username).first()
  },
  updateAdmin: function(admin){
    return knex('admin').where('username', 'admin').update(admin, '*')
  },
  getHerbs: function(){
    return knex('herbs')
  },
  getOneHerb: function(id){
    return knex('herbs').where('id', id)
  },
  addHerb: function(herb){
    return knex('herbs').insert(herb).returning('*')
  },
  modifyHerb: function(id, herb){
    return knex('herbs').where('id', id).update(herb, '*')
  },
  deleteHerb: function(id){
    return knex('herbs').where('id', id).del();
  },
  createPatient: function(patient){
    return knex('patient').insert(patient, 'id').then(ids=>{
      return ids[0]
    })
  },
  updatePatient: function(id, patient){
    return knex('patient').where('id', id).update(patient, '*')
  },
  deletePatient: function(id) {
    return knex('patient').where('id', id).del()
  },
  getPatientByUsername: function(username){
    return knex('patient').where('username', username).first();
  },
  getAllPatients: function(){
    return knex('patient')
  },
  getAllResources: function(){
    return knex('resource');
  },
  getOneResource: function(id){
    return knex('resource').where('id', id)
  },
  updateResource: function(id, resource){
    return knex('resource').where('id', id).update(resource, '*')
  },
  addResource: function(resource){
    return knex('resource').insert(resource).returning('*')
  },
  deleteResource: function(id){
    return knex('resource').where('id', id).del()
  },
  addNote: function(note){
    return knex('note').insert(note).returning('*')
  },
  deleteNote: function(id, noteId){
    return knex('note').where('id', noteId).del()
  },
  addResourceToPatient: function(resource){
    return knex('patient_resource').insert(resource).returning('*')
  },
  deleteResourceFromPatient: function(id, rid){
    return knex('patient_resource').where('patient_id', id).andWhere('resource_id', rid).del()
  }

}
