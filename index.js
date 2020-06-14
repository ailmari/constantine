const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Constantine XI -> 11')
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Contatine service running on port ${PORT}`)
})