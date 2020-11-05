<template>
  <div class="usuarios">
    <div>
    <b-table
      striped hover
      :items="this.usuarios"
      :fields="campos"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      sort-icon-left
      responsive="sm"
    ></b-table>

    <div>
      Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>
  </div>
    

  </div>
 
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import moment from 'moment';


export default {
  name: 'Usuarios',
  components: {

  },
  data(){
    return{
      sortBy: 'idusuario',
      sortDesc: false,
      usuarios:[],
      campos: [
          { key: 'idusuario', sortable: true },
          { key: 'nome', sortable: true },
          { key: 'email', sortable: true },
          { key: 'data', sortable: true }
        ],
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
        // u=>{
        //   const data = moment(u.data,"YYYYMMDD").format("DD/MM/YYYY");
        //   const {
        //     idusuario,
        //     nome,
        //     email
        //   } = u;

          //this.usuarios.push(idusuario,nome,email,data);
          this.usuarios.push()
          
        },
        console.log(this.usuarios)

        
      );


   
    }


}








</script>

<style>
.home{
  color:red;
}
</style>
