require('dotenv').config()
const express = require('express')

const app = express()

app.get('/teste', (req, res) => res.json({ vish: true }))

app.listen(process.env.PORT, () => console.log(`Localhost running on ${process.env.PORT}`))