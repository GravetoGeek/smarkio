<template>
  <div class="status">
    <div>
    <b-table
      striped hover
      :items="this.status.data"
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
import axios from 'axios'
export default {
  name: 'Status',
  components: {},
  data () {
    return {
      sortBy: 'idstatus',
      sortDesc: false,
      status: [],
      campos: [
        { key: 'idstatus', sortable: true },
        { key: 'status', sortable: true }
      ],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  async created () {
    this.status = await axios.get('http://localhost:8888/status')
  }
}
</script>
<style>
.home{
  color:red;
}
</style>
