<template>
  <div class="intencao">
    {{intencoes}}
  </div>
 
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import moment from 'moment';


export default {
  name: 'Intencoes',
  components: {

  },
  data(){
    return{
      intencoes:[],
      chartOptions:{
        responsive:true,
        maintainAspectRatio: false
      }
    };
  },



  async created(){
      const intencoes = await axios.get("http://localhost:8888/intencoes");
      console.log(intencoes);
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
    }


}








</script>

<style>
.home{
  color:red;
}
</style>
