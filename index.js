const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
// const login = require ("./public/js/scriptLoginGoogle")
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/cadastro", (req,res) => {
    res.render("cadastro");
});



app.post("/adicionar", (req,res) => {
    res.redirect("/cadastro")
});

app.get("/lista", (req,res) => {
    res.render("lista");
});

app.listen(port, ()=> {
    console.log(`Servidor rodando na URL: http://localhost:${port}`)
});