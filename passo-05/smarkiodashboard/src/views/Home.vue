<template>
  <div class="home">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item-dropdown text="Listas" right>
            <b-dropdown-item href="/mensagens">Mensagens</b-dropdown-item>
            <b-dropdown-item href="/usuarios">Usuários</b-dropdown-item>
            <b-dropdown-item href="/intencoes">Intenções</b-dropdown-item>
            <b-dropdown-item href="/status">Status</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <h4>Teste anychart</h4>
    <div id="grafico"></div>
    <!-- <canvas id="myChart"></canvas> -->
    <graficolinha :chartData="lineChart" :options="lineChartOptions"></graficolinha>
    <graficosetor :chartData="pieChart" :options="pieChartOptions"></graficosetor>
    <graficoradar :chartData="radarChart" :options="radarChartOptions"></graficoradar>
  </div>
</template>
<script>
// import anychart from "anychart";
import graficolinha from '../components/graficolinha.vue'
import graficosetor from '../components/graficosetor.vue'
import graficoradar from '../components/graficoradar.vue'

export default {
  name: 'Home',
  components: {
    graficolinha,
    graficosetor,
    graficoradar
  },
  data () {
    return {
      usuarios: [],
      intencoes: [],
      status: [],
      mensagens: [],
      // GRAFICOSETOR
      pieChart: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      pieChartOptions: {
        hoverBorderWidth: 20
      },
      // GRAFICOLINHA
      lineChart: [],
      lineChartOptions: [],

      // GRAFICO RADAR
      radarChart: {

        labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
        datasets: [
          {
            backgroundColor: 'rgba(28,145,241,0.3)',
            borderColor: 'rgba(28,145,241,0.3)',
            label: 'Dataset-1',
            data: [20, 10, 4, 2]
          },
          {
            backgroundColor: 'rgba(241,28,39,0.3)',
            borderColor: 'rgba(241,28,39,0.3)',
            label: 'Dataset-2',
            data: [45, 25, 17, 21]
          }
        ]
      },
      radarChartOptions: {
        scale: {
          angleLines: {
            display: false
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 100
          }
        }
      }
      // fim
    }
  },
  methods: {
    mounted () {
    }
  }
}
</script>
<style>
.home {
  color: red;
}
#myChart{
  width:100%;
  height:100%
}
</style>
