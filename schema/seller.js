const db = require("../connection/postgres");


module.exports = (sequelize, DataType) => {
    const Seller = sequelize.define('sellers', {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        country: {
            type: DataType.STRING,
            allowNull: true
        },
        user_id: {
            type: DataType.INTEGER,
            allowNull: true
        },
    },);
    // Seller.associate = db => {
    //     db.Seller.hasOne(db.User, { foreignKey: 'id' });
    //     db.Seller.hasMany(db.Address, { foreignKey: 'seller_id' });
    // }
    return Seller
}
