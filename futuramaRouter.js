var router = require('express').Router();
var futurama_DB = require('./db').futuramaDB;
var sequelize = require('./db').db;

module.exports = router;


router.get('/', function(req,res,next){
  sequelize.query("SELECT * FROM t_futurama").then(episode => {
    res.send(episode[0]); //the index zero is used to return only the data and no metadata
  })
  .catch(next);
})



router.get('/:id', function(req,res,next){
  futurama_DB.findOne({
    where: {  //sequelize
      id: req.params.id
    }
  })
  .then(function (episode) {
    if (!episode) res.send('that episode does not exist, try other id')
    else {
      res.send(episode)
    }
  })
  .catch(next);

});

router.post('/', function(req,res, next){
  futurama_DB.create(req.body)
    .then(function(episode){
       res.send(episode)
    })
})
