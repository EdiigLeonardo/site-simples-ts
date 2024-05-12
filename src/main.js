"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var port = 8000;
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("HELLO FROM EXPRESS + TS!!!!");
});
app.get("/hi", function (req, res) {
    res.send("BYEEE!!");
});
app.listen(port, function () {
    console.log("now listening on port ".concat(port));
});
