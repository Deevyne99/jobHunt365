const express = require('express')
const AuthRoute = require('./routes/authRoutes/authRoutes')
const connect = require('./db/connect')
require('dotenv').config()
const app = express()

//++++++++++++++++++++++++ MIDDLEWARE +++++++++++++++++++++++
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Home page')
})

app.use('/api/v1/jobhunt/auth', AuthRoute)

const port = 5000

const start = async () => {
  try {
    await connect(process.env.MONGO_URL)
    app.listen(port, () => console.log('server is listening on port 5000'))
  } catch (error) {
    console.log(error)
  }
}

start()
