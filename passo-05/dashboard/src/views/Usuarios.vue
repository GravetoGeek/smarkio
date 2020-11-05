<template>
  <div class="usuarios">
    <div>
      <b-table
        striped
        hover
        :items="this.usuarios"
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
import axios from "axios";
import moment from "moment";

export default {
  name: "Usuarios",
  components: {},
  data() {
    return {
      usuarios: [],
      sortBy: "idusuario",
      sortDesc: false,
      campos: [
        { key: "idusuario", sortable: true },
        { key: "nome", sortable: true },
        { key: "email", sortable: true },
        { key: "data", sortable: true },
      ],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },

  async created() {
    const usuarios = await axios.get("http://localhost:8888/usuarios");
    console.log(usuarios);

    usuarios.data.forEach((u) => {
      (u.data = moment(u.data, "YYYYMMDD").format("DD/MM/YYYY")),
        this.usuarios.push(u);
    });
  },
};
</script>

<style>
.home {
  color: red;
}
</style>
