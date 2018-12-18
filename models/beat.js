const BeatModel = (sequelize, Sequelize) => {
    const { INTEGER, STRING, TEXT, FLOAT, BOOLEAN, DATE } = Sequelize
    const Beats = sequelize.define('Beats', {
        beatId: { type: INTEGER, primaryKey: true, autoIncrement: true },
        array: { type: TEXT },
        beatName: { type: STRING, allowNull: true },
        BPM: { type: INTEGER, allowNull: true },
        user: { type: STRING, primaryKey: true, allowNull: true }
    })
    return Beats
}

module.exports = BeatModel