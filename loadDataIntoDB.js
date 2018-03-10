var express = require('express');
var Sequelize = require('sequelize');

var jsonData = require('./futurama_episodes.json');
var oEpisodes = jsonData._embedded.episodes;

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


var jsonEpisodes = [];
for(var i =0; i < Object.keys(oEpisodes).length; i++){
  a = {};
  a.id =  oEpisodes[i].id;
  a.name =  oEpisodes[i].name;
  a.image =  oEpisodes[i].image.medium;
  a.season =  oEpisodes[i].season;
  a.number =  oEpisodes[i].number;
  a.airdate =  oEpisodes[i].airdate;
  a.airtime =  oEpisodes[i].airtime;
  jsonEpisodes.push(a);
}


// var sampleEpisode =   {
//     "id": 49288,
//     "name": "Space Pilot 3000",
//     "image": "http://static.tvmaze.com/uploads/images/medium_landscape/57/143950.jpg",
//     "season": 1,
//     "number": 1,
//     "airdate": "1999-03-28",
//     "airtime": "22:00"
//   };

 db.sync({
   force: true,
   logging: console.log
 }).then(function(){
   // futuramaDB.create(sampleEpisode);
   for(var i =0; i < Object.keys(jsonEpisodes).length; i++){
     futuramaDB.create(jsonEpisodes[i]);
  }
 });
