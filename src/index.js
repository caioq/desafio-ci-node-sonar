const express = require('express')
const sum = require('./math')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Sum 1 + 2: ${sum(1,2)}`)
})

app.listen(port, () => {
  console.log(`App: listening at http://localhost:${port}...`)
})