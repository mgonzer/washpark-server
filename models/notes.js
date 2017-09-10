const { Model } = require('objection');

class Notes extends Model {
  static get tableName() {
    return 'note'
  }
}


module.exports = Notes
