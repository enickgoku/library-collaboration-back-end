require('dotenv/config')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => res.send({ success: true }))

app.use((req, res) => res.status(404).send({ error: 'Not found' }))

const port = process.env.PORT || 5000

app.listen(port)

console.info('Server running on port', port)
