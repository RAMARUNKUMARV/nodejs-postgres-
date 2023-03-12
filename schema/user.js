const db = require("../connection/postgres");

module.exports = (database, Sequelize) => {
    const User = database.define('users', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        is_active: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        country: {
            type: Sequelize.STRING,
            allowNull: true
        },
    },);

    // User.associate = db => {
    //     User.hasMany(db.Seller, { foreignKey: 'user_id' });
    // }

    return User
}
