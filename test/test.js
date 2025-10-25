// __tests__/students.test.js

const request = require('supertest')
const { app, connectDB } = require('../server.js')
const mongoose = require('mongoose')

beforeAll(async () => {
  // connect to MongoDB before running tests
  await connectDB()
})

afterAll(async () => {
  // disconnect after tests to prevent open handles
  await mongoose.connection.close()
})

describe('GET /students', () => {
  it('should return 200 status code and an array', async () => {
    const response = await request(app).get('/students')
    expect(response.statusCode).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })
})
