const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  const { text } = req.query
  const uppercase = text && text.toUpperCase()
  res.send('Your uppercase text is ' + uppercase)
})

app.listen(port)
