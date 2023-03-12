const db = require("../connection/postgres");

module.exports = (database, Sequelize) => {
    const Address = database.define('address', {
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
        state: {
            type: Sequelize.STRING,
            allowNull: true
        },
        city: {
            type: Sequelize.STRING,
            allowNull: true
        },
        seller_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },);
    // Address.associate = db => {
    //     Address.hasMany(db.Seller, { foreignKey: 'id' });
    // }
    return Address
}