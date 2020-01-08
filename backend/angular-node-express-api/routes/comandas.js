const express = require('express');
const { getComandas } = require('../db')
const { getComanda } = require('../db')
const ComandaService = require('../services/service.comandas')
const ComandaModel = require("../models/model.comanda")
const { addComanda } = require('../db')

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
      //res.json(items)
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
    const comanda = await ComandaService.create(body);
    const number = await ComandaService.givenumber(body);
    console.log(number)
    addComanda(comanda, number)
    console.log("comanda added")
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

module.exports = router;