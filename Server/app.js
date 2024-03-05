const express = require('express')

const app = express()


//++++++++++++++++++++++++ MIDDLEWARE +++++++++++++++++++++++
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Home page')
})

const port = 5000

const start = async () => {
  try {
    app.listen(port, () => console.log('server is listening on port 5000'))
  } catch (error) {
    console.log(error)
  }
}

start()
