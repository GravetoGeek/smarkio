<template>
  <div class="home">
    <ul>
      <li>
        <a href="/mensagens">Mensagens</a>
      </li>
      <li>
        <a href="/usuarios">Usuários</a>
      </li>
      <li>
        <a href="/intencoes">Intenções</a>
      </li>
      <li>
        <a href="/status">Status</a>
      </li>
    </ul>
    <h4>Teste anychart</h4>
    <div id="grafico"></div>

  </div>
</template>

<script>
import anychart from "anychart";


export default {
  name: "Home",
  components: {
    //graficolinha
  },
  data() {
    return {
      usuarios: [],
      intencoes: [],
      status: [],
      mensagens: [],
      rows1: [],
      fields1: [],
      dados: [
        { x: "A", value: 637166 },
        { x: "B", value: 721630 },
        { x: "C", value: 148662 },
        { x: "D", value: 78662 },
        { x: "E", value: 90000 },
      ],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },

  methods: {
    async charts() {
      var chart = anychart.pie(this.dados);
      chart.container("grafico");
      chart.draw();
    },

    

  mounted() {
    this.charts();
  },
}
}



</script>
<style>
.home {
  color: red;
}
</style>