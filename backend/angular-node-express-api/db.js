const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb://localhost:27017'
const dbName = 'emp_db'

let db

const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then((client) => {
    db = client.db(dbName)
  })


const getEmployees = () => {
  const collection = db.collection('employee')
  return collection.find({}).toArray()
}

const getServices = () => {
  const collection = db.collection('service')
  return collection.find({}).toArray()
}

const getPrices = () => {
  const collection = db.collection('service')
  return collection.find({name:"corte"}).toArray()
}

module.exports = { init, getEmployees, getServices, getPrices }