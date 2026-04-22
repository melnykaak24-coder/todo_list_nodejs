var express = require("express");

var app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var task = ["Опанувати JavaScript", "Опанувати Node.js"];

app.get("/", function (req, res) {
    res.render("index", { task: task });
});

app.post("/addnewtask", function (req, res) {
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Сервер працює на порту 3000!");
});
