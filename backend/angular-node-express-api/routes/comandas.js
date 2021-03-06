const express = require('express');
const { getComandas } = require('../db')
const { getComanda } = require('../db')
const { addComanda } = require('../db')
const { deleteLine } = require('../db')
//const ComandaService = require('../services/service.comandas')
//const { Comanda } = require("../models/model.comanda")

var router = express.Router();

router.get('/comandas', (req, res) => {  
   getComandas()
    .then((items) => {
      items = items.map((item) => ({
        id: item._id,
        number: item.number,
        service: item.service,
        employee: item.employee
      }))
      res.json(items)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})

router.get('/comandas/:number', (req, res) => {
    getComanda(req.params.number)
    .then((items) => {
      items = items.map((item) => ({
        id: item._id,
        number: item.number,
        service: item.service,
        employee: item.employee
      }))
      res.send(items)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
});

router.post('/comandas', async (req, res, next) =>
{
	const body = req.body;

	try
	{
    // const comanda = new Comanda({number:body.number, service:body.service, employee:body.employee});
    //  const comanda = await ComandaService.create(body);
    const comanda = {number:body.number, service:body.service, employee:body.employee};
    const number = body.number;
    //--- Add comanda to emp_db ---
    addComanda(comanda, number)

		return res.status(201).json({ comanda: comanda });
	}
	catch(err)
	{
		if (err.name === 'ValidationError')
		{
        	return res.status(400).json({ error: err.message });
		}
		// unexpected error
		return next(err);
  }

});

router.get('/comandas/:id/delete', (req, res) => {
   deleteLine(req.params.id)
  .then(() => {
    console.log(req.params.id + ' deleted')
    res.status(500).end()
  })
  .catch((err) => {
    console.log(err)
    res.status(500).end()
  });
});

module.exports = router;