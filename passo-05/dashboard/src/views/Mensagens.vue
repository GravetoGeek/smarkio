<template>
  <div class="mensagens">
    {{mensagens}}
  </div>
 
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import moment from 'moment';


export default {
  name: 'Mensagens',
  components: {

  },
  data(){
    return{
      mensagens:[],
      chartOptions:{
        responsive:true,
        maintainAspectRatio: false
      }
    };
  },
  async created(){
      const mensagens = await axios.get("http://localhost:8888/mensagens");
      console.log(mensagens);
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
