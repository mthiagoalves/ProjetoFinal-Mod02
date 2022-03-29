const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());


app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, ()=> {
    console.log(`Servidor rodando na URL: http://localhost:${port}`)
})