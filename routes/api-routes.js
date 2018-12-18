var db = require("../models");

/*
1-user routes
2-beat routes
*/

module.exports = function (app) {

    /*1*/
    app.post('/api/login', function (req, res) {
        db.Users.findOne({ where: { username: req.body.username, password: req.body.password } })
            .then(function (dbUsers) {
                res.json(dbUsers);
            })
    });

    app.post("/api/users", function (req, res) {
        db.Users.create({ username: req.body.username, password: req.body.password })
            .then(function (dbUser) {
                res.json({ user: dbUser, status: 301 });
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    /*2*/
    app.post('/api/beats/user', function (req, res) {
        db.Beats.findAll({
            where: { user: req.body.user }
        })
            .then(function (dbBeats) {
                res.json(dbBeats)
            });
    });

    app.post('/api/beats/one', function (req, res) {
        db.Beats.findOne({
            where: { beatId: req.body.id }
        })
            .then(function (beat) {
                res.json(beat);
            });
    });

    app.post('/api/beats/delete', function (req, res) {
        db.Beats.destroy({
            where: {beatId: req.body.id }
        })
    });

    app.post('/api/beats', function (req, res) {
        db.Beats.create({
            array: req.body.beat,
            user: req.body.user,
            BPM: req.body.BPM,
            beatName: req.body.beatName
        }).then(function (dbBeat) {
            res.json({ beat: dbBeat, status: 301 });
        })
            .catch(function (err) {
                res.json(err);
            });
    });

};


