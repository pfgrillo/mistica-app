const mongoose = require('mongoose')
const { ObjectID } = require('mongodb')

var comandaSchema = new mongoose.Schema({
	_id: ObjectID,
	number: Number,
	service: Object,
	employee: String
   });

var Comanda = mongoose.model("comanda", comandaSchema);
module.exports = Comanda