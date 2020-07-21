function errRes(res, err, errMsg = "internal server error", statusCode = 500) {
  console.error("ERROR", err)
  return res.status(statusCode).json({
    "status": statusCode,
    "message": errMsg,
  })
}

function successRes(res, data={}, statusCode = 200) {
  return res.status(statusCode).json({ "status": statusCode, data: data })
}

function responseData(res, errMsg) {
  return (err, data) => {
    if (err) return errRes(res, err, errMsg)
    return successRes(res, data)
  }
}

module.exports = { errRes, successRes, responseData }