const db = require("../connection/postgres");

module.exports = (sequelize, DataType) => {
    const User = sequelize.define('users', {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        password: {
            type: DataType.STRING,
            allowNull: false
        },
        is_active: {
            type: DataType.BOOLEAN,
            allowNull: false
        },
        country: {
            type: DataType.STRING,
            allowNull: true
        },
    },);

    // User.associate = db => {
    //     User.hasMany(db.Seller, { foreignKey: 'user_id' });
    // }

    return User
}
