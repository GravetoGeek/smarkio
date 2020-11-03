const model = require("../models");
const express = require("express");
const status = model.status_model;


//Função de controle para inserção de dados.
const create = (request,response)=>{
    status.create(request.body).then(
        (object)=>{
            response.send(object.dataValues);
        }
    ).catch(
        (error)=>{
            console.log(error);
            response.sendStatus(500).send(error);
        }
    );
};


//Função de controle que retorna todos os registros disponíveis no banco de dados.
const getAll = (request,response)=>{
    status.findAll({raw:true}).then(
        (object)=>{
            console.log(object);
            response.status(200);
            response.send(object);
        }
    ).catch(
        (error)=>response.status(400).send(error)
    );
};


// Função de controle que busca um registro específico por ID.
const getById = (request,response)=>{
    status.findByPk(request.params.id).then(
        (object)=>{
            response.status(200).send(object.dataValues);
        }
    ).catch(
        (error)=>{
            console.error(error);
            response.status(400).send(error);
        }
    );
};

// Função de controle que altera um registro específico por ID.
const alterById = (request,response)=>{
    status.update(
        request.body,
        {where:{
            status_id:request.params.id
        }}
    ).then(
        (object)=>{
            console.log(request.body);
            response.send(request.body).status(200);
        }
    ).catch(
        (error)=> response.status(400).send(error)
    );
};


//Função de controle que exclui um registro específico por ID.
const deleteById = (request,response)=>{
    status.destroy(
        {where:{
            status_id:request.params.id
        }}
    ).then(
        (object)=>{
            response.status(200).send("Status com id = "+request.params.id+" deletado com sucesso!");
        }
    ).catch(
        (error)=>{
            console.error(error);
            response.status(400).send(error);
        }
    );
};





//Exporta as funções
module.exports = {
    create,
    getAll,
    getById,
    alterById,
    deleteById,
};
