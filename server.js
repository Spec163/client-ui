const express = require('express')
const serveStatic = require('serve-static')
const dotenv = require('dotenv');
const path = require('path')

dotenv.config();

const app = express()

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.VUE_APP_PORT || 8988
const url = process.env.VUE_APP_URL_BANK || 'localhost'
app.listen(port)
console.log(`app is listening on port: ${port}`)
console.log(`URL: ${url}`)