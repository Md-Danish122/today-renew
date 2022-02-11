
const express = require('express')
const app = express()
const port = 5008

app.get('/', (req, res) => {
  res.send('Hello World today is friday')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
