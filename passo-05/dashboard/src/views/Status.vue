<template>
  <div class="status">
    {{status}}
  </div>
 
</template>

<script>
// @ is an alias to /src
import axios from 'axios';


export default {
  name: 'Status',
  components: {
  },
  data(){
    return{
      status:[],
      chartOptions:{
        responsive:true,
        maintainAspectRatio: false
      }
    };
  },


  

  async created(){
      const status = await axios.get("http://localhost:8888/status");

      console.log(status);

      status.data.forEach(
        s=>{
          const {
            idstatus,
            status
          } = s;

          this.status.push(idstatus,status);
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
