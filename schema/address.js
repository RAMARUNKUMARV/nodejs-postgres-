const db = require("../connection/postgres");

module.exports = (sequelize, DataType) => {
    const Address = sequelize.define('address', {
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
        state: {
            type: DataType.STRING,
            allowNull: true
        },
        city: {
            type: DataType.STRING,
            allowNull: true
        },
        seller_id: {
            type: DataType.INTEGER,
            allowNull: true
        }
    },);
    // Address.associate = db => {
    //     Address.hasMany(db.Seller, { foreignKey: 'id' });
    // }
    return Address
}