<template>
  <div class="home">
    <h4>Teste anychart</h4>
    <div id="grafico"></div>
    {{ mensagens }}
    <!-- {{ mensagens }} -->

  </div>
 
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import moment from 'moment';
import anychart from 'anychart';
//import graficolinha from '../components/graficolinha';


export default {
  name: 'Home',
  components: {
    //graficolinha
  },
  data(){
    return{
      usuarios:[],
      intencoes:[],
      status:[],
      mensagens:[],
      query:[],
      dados: [
  {x: "A", value: 637166},
  {x: "B", value: 721630},
  {x: "C", value: 148662},
  {x: "D", value: 78662},
  {x: "E", value: 90000}],
      chartOptions:{
        responsive:true,
        maintainAspectRatio: false
      }
    };
  },


//   async connect(){
//       if(global.connection && global.connection.state !== 'disconnected')
//           return global.connection;
  
//       const mysql = require("mysql2/promise");
//       const connection = await mysql.createConnection("mysql://localhost:3306/smarkiodb?user=smarkio");
//       console.log("Conectou no MySQL!");
//       global.connection = connection;
//       return connection;
//   },


// async buscar(){
//     const conn = await this.connect();
//     //const [rows] = await conn.query('select count(idusuario) from usuarios where month(data) = 7 and year(data) = 2020');
//     const rows = await conn.query('select count(idusuario) from usuarios where month(data) = 7 and year(data) = 2020');
//     console.log(rows);
//     this.query = rows;
//     return rows;
// },
 
//module.exports = {selectCustomers};

  async created(){
      const usuarios = await axios.get("http://localhost:8888/usuarios");
      const intencoes = await axios.get("http://localhost:8888/intencoes");
      const status = await axios.get("http://localhost:8888/status");
      const mensagens = await axios.get("http://localhost:8888/mensagens");


      var chart = anychart.pie(this.dados);
      chart.container("grafico");
      chart.draw();

      console.log(usuarios);
      console.log(intencoes);
      console.log(status);
      console.log(mensagens);
      

      usuarios.data.forEach(
        u=>{
          const data = moment(u.data,"YYYYMMDD").format("DD/MM/YYYY");
          const {
            idusuario,
            nome,
            email
          } = u;

          this.usuarios.push(idusuario,nome,email,data);
        }
      );

      intencoes.data.forEach(
        i=>{
          const data = moment(i.data,"YYYYMMDD").format("DD/MM/YYYY");
          const {
            idintencao,
            nome
          } = i;

          this.intencoes.push(idintencao,nome,data);
        }
      );

      status.data.forEach(
        s=>{
          const {
            idstatus,
            status
          } = s;

          this.status.push(idstatus,status);
        }
      );

      mensagens.data.forEach(
        m=>{
          const data = moment(m.data,"YYYYMMDD").format("DD/MM/YYYY");
          const {
            idintencao,
            idmensagem,
            idstatus,
            idusuario,
            texto
          } = m;

          this.mensagens.push(data,idintencao,idmensagem,idstatus,idusuario,texto);
        }
      )


   
    }


}








</script>

<style>
.home{
  color:red;
}
</style>
