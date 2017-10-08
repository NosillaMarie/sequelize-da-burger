var db = require("../models");

module.exports = function (app) {
    app.get("/api/burgers", function (req, res) {
        db.Burger.findAll({})
            .then(function (burgers) {
                res.json(burgers);
            });
    });

    app.post("/api/burgers", function (req, res) {
        console.log(req.body);
        db.Burger.create({
                id: req.body.id,
                burger_name: req.body.burger_name,

            })
            .then(function (burgers) {
                res.json(burgers);
            });
    });

    app.put("/api/burgers", function (req, res) {
        db.Burger.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(function (burgers) {
                res.json(burgers);
            });
    });


};
