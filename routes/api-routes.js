var db = require("../models");
var request = require("request");

module.exports = function (app) {

    app.get('/', function (req, res) {
        db.Burger.findAll({

        }).then(function (data) {
            res.render('index', {
                burgers: data
            });
        });
    });


    //    app.get("/api/burger", function (req, res) {
    //        db.Burger.findAll({}).then(function (burgers) {
    //
    //        });
    //
    //
    //        app.post("/", function (req, res) {
    //            console.log(req.body);
    //            db.Burger.create({
    //                    burger_name: req.body.burger_name,
    //                    devoured: req.body.devoured
    //
    //                })
    //                .then(function (burgers) {
    //                    res.redirect("/");
    //                })
    //                .catch(function (err) {
    //                    res.json(err);
    //                });
    //        });

    app.post('/api/burger', function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name
        }).then(function (result) {
            res.json(result);
        })
    });

    app.put("/:id", function (req, res) {
        var id = req.params.id;

        db.Burger.update(req.body, {
                devoured: req.body.devoured
            }, {
                where: {
                    id: req.body.id
                }
            })
            .then(function (burgers) {
                res.redirect("/");
            })
            .catch(function (err) {
                res.json(err);
            });
    });
};
