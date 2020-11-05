<template>
  <div class="mensagens">
    <div>
      <b-table
        striped
        hover
        :items="this.mensagens"
        :fields="campos"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        sort-icon-left
        responsive="sm"
      ></b-table>

      <div>
        Sorting By: <b>{{ sortBy }}</b
        >, Sort Direction:
        <b>{{ sortDesc ? "Descending" : "Ascending" }}</b>
      </div>
    </div>
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
      sortBy: "idmensagem",
      sortDesc: false,
      campos: [
        { key: "idmensagem", sortable: true },
        { key: "idstatus", sortable: true },
        { key: "idintencao", sortable: true },
        { key: "idusuario", sortable: true },
        { key: "data", sortable: true },
        { key: "texto", sortable: false },
      ],
      chartOptions:{
        responsive:true,
        maintainAspectRatio: false
      }
    };
  },
  async created() {
    const mensagens = await axios.get("http://localhost:8888/mensagens");
    console.log(mensagens);

    mensagens.data.forEach((m) => {
      (m.data = moment(m.data, "YYYYMMDD").format("DD/MM/YYYY")),
        this.mensagens.push(m);
    });
  },
};









</script>

<style>
.home{
  color:red;
}
</style>
