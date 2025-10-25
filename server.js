// require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

// Student Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  regdNo: { type: String, unique: true, required: true },
  department: { type: String, required: true },
  email: { type: String, unique: true }, // not required
  mobileNo: { type: String, required: true },
})

// Model
const Student = mongoose.model('Student', studentSchema)

// Connect MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://manojachanta7172:Manoj9959@cluster0.nsrvip6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log('✅ MongoDB Connected:', conn.connection.host)
  } catch (err) {
    console.error('❌ MongoDB Connection Failed:', err.message)
    process.exit(1)
  }
}

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find()
    res.status(200).json(students)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Start Server
connectDB().then(() => {
  app.listen(3000, () => {
    console.log(`🚀 Server running on port 3000`)
  })
})

module.exports = { app, connectDB }
