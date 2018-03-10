var Sequelize = require('sequelize');


var db = new Sequelize('futurama', 'postgres', 'admin',{
  dialect: 'postgres',
  host: "localhost",
  port: 5432
});


var futuramaDB = db.define('t_futurama',{
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    validate: {
      notEmpty: true
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  season: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  airdate: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  airtime: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
},
  {
    freezeTableName: true
  }
);

module.exports = {
 futuramaDB: futuramaDB,
 db: db,
}
