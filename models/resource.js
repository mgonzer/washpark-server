const { Model } = require('objection');

class Resource extends Model {
  static get tableName() {
    return 'resource'
  }
}

Resource.relationMappings = {
resources: {
  relation: Model.ManyToManyRelation,
  modelClass: __dirname + '/patient',
  join: {
    from: 'resource.id',
    through: {
      from: 'patient_resource.resource_id',
      to: 'patient_resource.patient_id'
    },
    to: 'patient.id'
  }
}
}

module.exports = Resource
