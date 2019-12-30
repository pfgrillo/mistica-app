const express = require('express');
const { getServices } = require('../db')

var router = express.Router();

router.get('/services', (req, res) => {  
   getServices()
    .then((items) => {
      items = items.map((item) => ({
        id: item._id,
        name: item.name
      }))
      res.json(items)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})

module.exports = router;
