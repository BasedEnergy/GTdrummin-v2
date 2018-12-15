var db = require("../models");

/*
1-user routes
2-beat routes
*/

module.exports = function (app) {

    /*1*/
    app.post('/api/login', function (req, res) {
        db.Users.findOne({
            where: { username: req.body.username, password: req.body.password }
        })
            .then(function (dbUsers) {
                res.json(dbUsers);
            });
    });

    app.post("/api/users", function (req, res) {
        db.Users.create({
            username: req.body.username,
            password: req.body.password
        }).then(function (dbUser) {
            res.json({ user: dbUser, status: 301 });


        })
            .catch(function (err) {
                res.json(err);
            });
    });

    /*2*/
    app.get('/api/beats', function () {
        db.Beats.findAll({})
    })

    app.post('/api/beats', function (req, res) {
        db.Beats.create({
            array: req.body.array,
            beatUsers: req.body.beatUsers
        })
    });

    app.put('/api/beats', function (req, res) {
        db.Beats.findOne({
            where: {}
        })
    })
    
};


