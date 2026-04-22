
//Підключаємо залежність express
var express = require("express");
//Викликаємо express
var app = express();
//Налаштовуємо обробник шаблонів
app.set("view engine", "ejs");
//Відображаємо index.ejs
app.get("/", function (req, res) {
    res.render("index");
});
//Налаштовуємо сервер для прослуховування порту 3000
app.listen(3000, function () {
    console.log("Сервер працює на порту 3000!");
});
