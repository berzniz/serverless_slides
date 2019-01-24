exports.handle = function (event, context, cb) {
  const { num1 = 0, num2 = 0 } = event
  const sum = num1 + num2
  cb(null, { sum })
}
