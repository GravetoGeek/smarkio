const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const model = require("./models");
const porta = 8888;


this.server = express();
this.server.use(cors());

const intencoes = model.intencoes_model;
const mensagens = model.mensagens_model;
const status = model.status_model;
const usuario = model.usuario_model;


app.use(express.json());
app.use(cors());
app.use("",routes);
/* 
app.post("/usuario",
    (request,response)=>{
        usuario.create(request.body).then(
            (object)=>{
                response.send(object);
            }
        ).catch(
            (error)=>{
                console.log(error);
                response.sendStatus(500);
            }
        );
    }
);

app.post("/intencao",
    (request,response)=>{
        intencoes.create(request.body).then(
            (object)=>{
                response.send(object);
            }
        ).catch(
            (error)=>{
                console.log(error);
                response.sendStatus(500);
            }
        );
    }
);

app.post("/mensagem",
    (request,response)=>{
        mensagens.create(request.body).then(
            (object)=>{
                response.send(object);
            }
        ).catch(
            (error)=>{
                console.log(error);
                response.sendStatus(500);
            }
        );
    }
);

app.post("/status",
    (request,response)=>{
        status.create(request.body).then(
            (object)=>{
                response.send(object);
            }
        ).catch(
            (error)=>{
                console.log(error);
                response.sendStatus(500);
            }
        );
    }
);


//GET

app.get("/usuario/:id", (request,response)=>{
    const id = request.params.id;
    usuario.findByPk(id).then((object)=>{
        response.send(object);
    }).catch((error)=>{
        console.log(error);
        response.sendStatus(500);
    });
});


app.get("/intencao/:id", (request,response)=>{
    const id = request.params.id;
    intencao.findByPk(id).then((object)=>{
        response.send(object);
    }).catch((error)=>{
        console.log(error);
        response.sendStatus(500);
    });
});


app.get("/mensagem/:id", (request,response)=>{
    const id = request.params.id;
    mensagem.findByPk(id).then((object)=>{
        response.send(object);
    }).catch((error)=>{
        console.log(error);
        response.sendStatus(500);
    });
});

app.get("/status/:id", (request,response)=>{
    const id = request.params.id;
    status.findByPk(id).then((object)=>{
        response.send(object);
    }).catch((error)=>{
        console.log(error);
        response.sendStatus(500);
    });
}); */

//Inicialização do servidor

app.listen(porta,(request,response) => {
    console.log("[smarkiodb] Servidor funcionando na porta "+porta+"!");
});
