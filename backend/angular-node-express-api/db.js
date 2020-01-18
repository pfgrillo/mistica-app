const { MongoClient } = require('mongodb');
const objectId = require('mongodb').ObjectID;

const connectionUrl = 'mongodb://localhost:27017'
const dbName = 'emp_db'

//--- Connect to MongoDB ---
let db
const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then((client) => {
    db = client.db(dbName)
  })

//--- Find all Employees ---
const getEmployees = () => {
  const collection = db.collection('employee')
  return collection.find({}).toArray()
}
//--- Find all Services ---
const getServices = () => {
  const collection = db.collection('service')
  return collection.find({}).toArray()
}
//--- Find all Comandas ---
const getComandas = () => {
  const collection = db.collection('comanda')
  return collection.find({}).toArray()
}
//--- Find Comanda by number ---
const getComanda = (comanda) => {
  const collection = db.collection('comanda')
  return collection.find({number: parseInt(comanda)}).toArray()
}
//--- Adds Comanda ---
const addComanda = (comanda, number) => {
  const collection = db.collection('comanda')
  collection.insertOne(comanda, (err, res) => {
    if (err) throw err;  
  })
  // MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }).close()
}

const deleteLine = (id) => {
  const collection = db.collection('comanda')
  return collection.deleteOne({_id: objectId(id)})
}

module.exports = { init, getEmployees, getServices, getComandas, getComanda, addComanda, deleteLine }