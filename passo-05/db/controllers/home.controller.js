const model = require("../models");
const express = require("express");
const Sequelize = require("sequelize")
const Op = Sequelize.Op
const usuarios = model.usuarios_model;
const mensagens = model.mensagens_model;
const intencoes = model.intencoes_model;
const status = model.status_model;


const consulta1 = (request,response)=>{
    usuarios.findAndCountAll({
        where:{
            [Op.and]: [Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('data')), 2020),
            Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('data')), 7)]
        } 
    }).then(
        (object)=>{
            console.log(object);
            response.status(200);
            response.send(object);
        }
    ).catch(
        (error)=> response.status(400).send(error)
    );
};

const consulta2 = (request,response)=>{
    
}




module.exports = {
    consulta1,
};
