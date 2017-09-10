const express = require('express')

function validName(name) {
  return typeof name == 'string' && name.trim() != '';
}


module.exports = {validName}
