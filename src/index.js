const express = require('express')
const math = require('./math')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Sum 1 + 2: ${math.sum(1,2)}`)
})

app.listen(port, () => {
  console.log(`App: listening at http://localhost:${port}...`)
})