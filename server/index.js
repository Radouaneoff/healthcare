const express = require('express')
const cors = require('cors')
const router = require('./router/router')
require('dotenv').config()
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(cors({
  origin:"http://localhost:5173",
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(router)

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
  })