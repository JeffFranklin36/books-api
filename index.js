require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Bookroutes = require('./controllers/books')
const cors = require('cors')

const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.use('/books', Bookroutes)

app.get('/', function(req, res) {
 res.send('Hello World')
})


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`listening on port ${PORT}`))