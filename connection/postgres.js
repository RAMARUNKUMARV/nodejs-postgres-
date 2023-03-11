const dbConfig = require('./dbconfig') //config env file
const Sequelize = require('sequelize')//orm for sql 

const database = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = database;

db.User = require('../schema/user')(database, Sequelize);
db.Seller = require('../schema/seller')(database, Sequelize);
db.Address = require('../schema/address')(database, Sequelize);

// edges
db.User.hasMany(db.Seller, { foreignKey: 'user_id' });
db.Seller.hasOne(db.User, { foreignKey: 'id' });
db.Seller.hasMany(db.Address, { foreignKey: 'seller_id' });
db.Address.hasMany(db.Seller, { foreignKey: 'id' });

module.exports = db