//const ComandaModel = require("../models/model.comanda");
const Comanda = require("../models/model.comanda");

let comandas = {};
let counter = 0;

/* static customer service class */
class ComandaService
{
	static create(data)
	{
        let comanda = new Comanda({number:data.number, service:data.service, employee:data.employee});
		
		// comanda.uid = 'c' + counter++;

		// comandas[comanda.gid] = comanda;

		return comanda;
    }
    
    static givenumber(data)
	{
        let number = data.number
		return number;
	}
}

module.exports = ComandaService;