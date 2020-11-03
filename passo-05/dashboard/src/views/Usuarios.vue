<template>
  <div class="usuarios">

  </div>
 
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import moment from 'moment';
import graficolinha from '../components/graficolinha'

export default {
  name: 'Usuarios',
  components: {

  },
  data(){
    return{
      usuarios:[],
      chartOptions:{
        responsive:true,
        maintainAspectRatio: false
      }
    };
  },


  async created(){
      const usuarios = await axios.get("http://localhost:8888/usuarios");
      console.log(usuarios);

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


   
    }


}








</script>

<style>
.home{
  color:red;
}
</style>
