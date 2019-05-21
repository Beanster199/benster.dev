const express = require('express')
const app = express()
const port = 3000
const uuid = require('uuid')

app.get('/', (req, res) => res.send(uuid()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))