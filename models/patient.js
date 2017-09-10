const { Model } = require('objection');
// const Resource = require('./resource')

class Patient extends Model {
  static get tableName() {
    return 'patient';
  }
}

Patient.relationMappings = {
resources: {
  relation: Model.ManyToManyRelation,
  modelClass: __dirname + '/resource',
  join: {
    from: 'patient.id',
    through: {
      from: 'patient_resource.patient_id',
      to: 'patient_resource.resource_id'
    },
    to: 'resource.id'
  }
},

notes: {
  relation: Model.HasManyRelation,
  modelClass: __dirname + '/notes',
  join: {
    from: 'patient.id',
    to: 'note.patient_id'
  }
}
}

module.exports = Patient
