<template>
  <div class="intencao">
    <div>
      <b-table
        striped
        hover
        :items="this.intencoes"
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
  name: 'Intencoes',
  components: {

  },
  data(){
    return{
      intencoes:[],
      sortBy: "idintencao",
      sortDesc: false,
      campos: [
        { key: "idintencao", sortable: true },
        { key: "nome", sortable: true },
        { key: "data", sortable: true },
      ],
      chartOptions:{
        responsive:true,
        maintainAspectRatio: false
      }
    };
  },



  async created() {
    const intencoes = await axios.get("http://localhost:8888/intencoes");
    console.log(intencoes);

    intencoes.data.forEach((i) => {
      (i.data = moment(i.data, "YYYYMMDD").format("DD/MM/YYYY")),
        this.intencoes.push(i);
    });
  },


}








</script>

<style>
.home{
  color:red;
}
</style>
