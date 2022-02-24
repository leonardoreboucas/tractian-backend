const { validationResult } = require('express-validator')
module.exports = {
  check (req) {
    const errors = validationResult(req)
    return errors.isEmpty() ? false : errors
  },
}