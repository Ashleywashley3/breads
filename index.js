const express = require('express')
require('dotenv').config()

const breadRoutes = require('./controllers/bread')

const app = express()

// MIDDLEWARE: sits in the middle of incomming requests and the controlling, creates the html
app.set('views', __dirname + '/views') //tell express where the views are
app.set('view engine', 'jsx') //tell express what engine it is
app.engine('jsx', require('express-react-views').createEngine())


app.use('/breads', breadRoutes)

app.get('/', (req, res) => {
    res.send('<h1>Main Page</h1>')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))