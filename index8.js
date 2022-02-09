
const express = require('express')
const app = express()
const port = 3008

app.get('/', (req, res) => {
  res.send('Hello World kya haal h jii index8')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
