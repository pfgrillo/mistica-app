const mongoose = require('mongoose')

var comandaSchema = new mongoose.Schema({
	number: Number,
	service: Object,
	employee: String
   });

var Comanda = mongoose.model("comanda", comandaSchema);
module.exports = Comanda

// class ComandaModel
// {
// 	constructor(number, service, employee)
// 	{
// 		this.number = number;
//         this.service = service;
//         this.employee = employee;

// 	}
// }
// module.exports = ComandaModel;