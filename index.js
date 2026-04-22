var express = require("express");
var app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// масиви
var task = ["Опанувати JavaScript", "Опанувати Node.js"];
var complete = ["Опанувати HTML та CSS", "Опанувати Git та GitHub"];

// ГОЛОВНА СТОРІНКА (ТІЛЬКИ ОДНА!)
app.get("/", function (req, res) {
    res.render("index", {
        task: task,
        complete: complete
    });
});

app.use(express.static("public")); 
// ДОДАТИ ЗАВДАННЯ
app.post("/addnewtask", function (req, res) {
    var newTask = req.body.newtask;

    if (newTask) {
        task.push(newTask);
    }

    res.redirect("/");
});

// ПЕРЕНЕСТИ В ВИКОНАНІ
app.post("/movetocompletetask", function (req, res) {
    var completeTask = req.body.check;

    if (!completeTask) return res.redirect("/");

    if (typeof completeTask === "string") {
        complete.push(completeTask);
        task.splice(task.indexOf(completeTask), 1);
    } 
    else if (Array.isArray(completeTask)) {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }

    res.redirect("/");
});

// сервер
app.listen(3000, function () {
    console.log("Сервер працює на порту 3000!");
});