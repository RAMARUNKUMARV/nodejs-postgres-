const db = require("../connection/postgres");


module.exports = (database, Sequelize) => {
    const Seller = database.define('sellers', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        country: {
            type: Sequelize.STRING,
            allowNull: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
    },);
    // Seller.associate = db => {
    //     db.Seller.hasOne(db.User, { foreignKey: 'id' });
    //     db.Seller.hasMany(db.Address, { foreignKey: 'seller_id' });
    // }
    return Seller
}
