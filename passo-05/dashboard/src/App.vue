<template>
  <div id="app">


    <router-view/>
  </div>
</template>

<script>
//import axios from 'axios';
export default {
  name:'app',
  components:{

  },

 

 

  // async created(){
  //   const{ data } = await axios.get("https://covidtracking.com/api/us/daily");
  //   console.log(data);
  // }


  // async created(){
  //   const{ usuarios } = await axios.get("http://localhost:8888/usuarios");
  //   const{ intencoes } = await axios.get("http://localhost:8888/intencoes");
  //   const{ status } = await axios.get("http://localhost:8888/status");
  //   const{ mensagens } = await axios.get("http://localhost:8888/mensagens");
  //   console.log(usuarios);
  //   console.log(intencoes);
  //   console.log(status);
  //   console.log(mensagens);
  // }


}
</script>

<style>
body{
  background-color: rgba(24, 24, 24, 1);
}


</style>

