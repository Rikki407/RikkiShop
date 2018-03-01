var express = require("express");
var app = express();

app.set("view engine","ejs");

app.get("/",function (req, res) {
    res.render("home");
});
app.get("/products",function (req, res) {
   res.render("products/index");
});
app.listen(3000,function () {
   console.log("Site hosted on localhost:3000");
});