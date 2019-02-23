"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("newrelic");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var PORT = 1337;
var postgresql = require("../db/postgresql");
var app = express();
app.use("/rooms/:id", express.static("./client/dist"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.get("/rooms/:id/photos", function (req, res) {
    postgresql.getPhotos(req.params.id, function (err, response) {
        if (err) {
            console.log("err");
            res.status(501).send();
        }
        else {
            res.end(JSON.stringify(response));
        }
    });
});
app.post("/rooms/:id/photos", function (req, res) {
    postgresql.insertPhotos(req.params.id, req.body.photo_id, req.body.url, req.body.caption, function (err, response) {
        if (err) {
            res.status(501).send();
        }
        else {
            res.send("POST request to the homepage");
        }
    });
});
app.put("/rooms/:id/photos", function (req, res) {
    postgresql.updatePhotos(req.params.id, req.body.photo_id, req.body.url, req.body.caption, function (err, response) {
        if (err) {
            res.status(501).send();
        }
        else {
            res.end(JSON.stringify(response));
        }
    });
});
app.delete("/rooms/:id/photos", function (req, res) {
    postgresql.deletePhotos(req.params.id, req.params.photo_id, function (err, response) {
        if (err) {
            res.status(501).send();
        }
        else {
            res.end(JSON.stringify(response));
        }
    });
});
app.listen(PORT, function () {
    console.log("server listening on port, " + PORT);
});
