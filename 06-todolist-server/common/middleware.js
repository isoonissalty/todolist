const { errRes } = require('./response')

function notFound (req, res, _) {
  return errRes(res, `wrong url`, 'not found', 404)
}

module.exports = { notFound }