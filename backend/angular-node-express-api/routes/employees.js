const express = require('express');
const { getEmployees } = require('../db')

var router = express.Router();

router.get('/employees', (req, res) => {  
  getEmployees()
    .then((items) => {
      items = items.map((item) => ({
        id: item._id,
        name: item.name,
        service: item.service
      }))
      res.json(items)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})

module.exports = router;
