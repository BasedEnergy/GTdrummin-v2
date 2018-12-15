const UserModel = (sequelize, Sequelize) => {
    const { INTEGER, STRING, FLOAT, BOOLEAN, DATE } = Sequelize
    const Users = sequelize.define('Users', {
        userId: { type: INTEGER, primaryKey: true, autoIncrement: true },
        username: { type: STRING, primaryKey: true, allowNull: false, unique: true},
        password: { type: STRING, allowNull: false },
    })
    return Users
}

module.exports = UserModel