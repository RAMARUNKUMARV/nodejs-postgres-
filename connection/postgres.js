const dbConfig =require('./dbconfig') //config env file
const Sequelize =require('sequelize')//orm for sql 

const database = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
  });

const db ={};

db.Sequelize = Sequelize;
db.sequelize = database;

db.User =require('../schema/user')(database,Sequelize);
module.exports=db