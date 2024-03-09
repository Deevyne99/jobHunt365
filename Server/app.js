require('express-async-errors')

require('dotenv').config()

const express = require('express')

const AuthRoute = require('./routes/authRoutes/authRoutes')

const connect = require('./db/connect')

const cookieParser = require('cookie-parser')

//+++++++++++++++++++ Import Error Middleware +++++++++++++++++++++++++++++++++
const ErrorHandlerMiddleware = require('./middleware/ErrorHandler')

const notFoundMiddleware = require('./middleware/NotFound')

const app = express()

//++++++++++++++++++++++++ MIDDLEWARE +++++++++++++++++++++++
app.use(express.json())
app.use(cookieParser(process.env.JWT_LIFETIME))

app.get('/', (req, res) => {
  res.send('Home page')
})

//++++++++++++++++++++++++ Routes Handling +++++++++++++++++++++++

app.use('/api/v1/jobhunt/auth', AuthRoute)

//++++++++++++++++++++++++ Error Handler MIDDLEWARE +++++++++++++++++++++++
app.use(ErrorHandlerMiddleware)
app.use(notFoundMiddleware)

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
