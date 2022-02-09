
const express = require('express')
const app = express()
const port = 3007

app.get('/', (req, res) => {
  res.send('Hello World kya haal h index7')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
