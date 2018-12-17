const BeatModel = (sequelize, Sequelize) => {
    const { INTEGER, STRING, TEXT, FLOAT, BOOLEAN, DATE } = Sequelize
    const Beats = sequelize.define('Beats', {
        beatId: { type: INTEGER, primaryKey: true, autoIncrement: true },
        array: { type: TEXT },
        user: { type: STRING, primaryKey: true, allowNull: false }
    })
    return Beats
}

module.exports = BeatModel