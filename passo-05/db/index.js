const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const model = require("./models");
const porta = 8888;

this.server = express();
this.server.use(cors());
app.use(express.json());
app.use(cors());
app.use("",routes);

//Inicialização do servidor

app.listen(porta,(request,response) => {
    console.log("[smarkiodb] Servidor funcionando na porta "+porta+"!");
});
