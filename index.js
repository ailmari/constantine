const express = require('express')
const cors = require('cors')
const romanRouter = require('./controllers/roman-router')

const app = express()

app.use(cors())
app.use('/', romanRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Contatine service running on port ${PORT}`)
})