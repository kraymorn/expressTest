const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(1);
  console.log(req.query.blabla);
  request(
    'https://jsonplaceholder.typicode.com/posts?_limit=2',
    (err, response, body) => {
      if (err) return res.status(500).send({ message: err })

      res.render('test', { title: 'test', body: body });
      //return res.send(body)
    }
  )
})

module.exports = router;