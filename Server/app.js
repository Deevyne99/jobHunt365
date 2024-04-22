require('express-async-errors')

require('dotenv').config()

const fileUpload = require('express-fileupload')

const express = require('express')

//+++++++++++++++++++ Import Routes+++++++++++++++++++++++++++++++++
const AuthRoute = require('./routes/authRoutes/authRoutes')
const UserRoute = require('./routes/UsersRoutes/userRoutes')
const JobRoutes = require('./routes/jobRoutes/jobRoutes')
const AppliedJobRoutes = require('./routes/AppliedJobRoutes/AppliedJobRoutes')
//+++++++++++++++++++ END of Routes+++++++++++++++++++++++++++++++++

const connect = require('./db/connect')

const cookieParser = require('cookie-parser')

//+++++++++++++++++++ Import Error Middleware+++++++++++++++++++++++++++++++++
const ErrorHandlerMiddleware = require('./middleware/ErrorHandler')

const notFoundMiddleware = require('./middleware/NotFound')

const app = express()

//++++++++++++++++++++++++ MIDDLEWARE +++++++++++++++++++++++
app.use(fileUpload())
app.use(express.json())
app.use(cookieParser(process.env.JWT_LIFETIME))

app.get('/', (req, res) => {
  res.send('Home page')
})

//++++++++++++++++++++++++ Routes Handling +++++++++++++++++++++++

app.use('/api/v1/jobhunt/auth', AuthRoute)
app.use('/api/v1/jobhunt/users', UserRoute)
app.use('/api/v1/jobhunt/jobs', JobRoutes)
app.use('/api/v1/jobhunt/applied', AppliedJobRoutes)

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
