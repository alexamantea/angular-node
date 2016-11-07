var express = require('express');
var router = express.Router();
var User = require('../models/User')

router.get('/', function (req, res, next) {
  // pegar primeiro. assincrono. callback por isso
      res.render('index');

    });
/*router.get('/', function (req, res, next) {
  // pegar primeiro. assincrono. callback por isso
    User.findOne({}, function(err, record) {
      if (err){
          return res.send('Erro!');
      }
      res.render('node', {email: record.email});

    });

});

router.post('/', function (req,res,next){
  var email = req.body.email;
  var user = new User({
    firstName: 'Alexandre',
    lastName: 'Amantea',
    password: 'teste',
    email: email
  });
  user.save();
  res.redirect('/');
})
*/

module.exports = router;
