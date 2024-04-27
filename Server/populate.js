require('dotenv').config()

const AppliedJobs = require('./models/JobsApplied')

const jobs = require('./MockData.json')

const connectDB = require('./db/connect')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    await AppliedJobs.create(jobs)
    console.log('success')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
