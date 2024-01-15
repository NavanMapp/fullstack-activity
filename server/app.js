require('dotenv').config()
const express = require('express')
const MongoURL = process.env.MongoURL
const mongoose = require('mongoose')

mongoose.connect(MongoURL)
.then(() => {
    console.log('Connected to MongoDB successfully')
}).catch((errr) => {
    console.log('Unable to connected to MongoDB')
    console.error(error)
})

const app = express()

app.use(express.json())