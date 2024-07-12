const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use(express.static('.'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + './index.html')
})

app.listen(3000, () => console.log('listening on localhost:3000'))
