const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(session({secret: 'user157'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

let login = "username";
let password = "123456";

app.post("/", (req,res) => {
    if(req.body.password == password && req.body.login == login){
       req.session.login = login;

       res.render("home");

    } else{

        res.render("index");
    }
});

app.get("/", (req, res) => {
    if(req.session.login){
        res.render("home")
    } else{
        res.render("index");
    }
});

app.get("/cadastro", (req,res) => {
    res.render("cadastro");
});

app.post("/adicionar", (req,res) => {
    res.redirect("/cadastro")
})

app.post("/detalhes", (req,res) => {
    res.render("/detalhes")
})

app.listen(port, ()=> {
    console.log(`Servidor rodando na URL: http://localhost:${port}`)
})