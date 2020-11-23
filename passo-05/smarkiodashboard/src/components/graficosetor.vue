<script>
// import {Pie} from 'vue-chart.js'
import VueCharts from 'vue-chartjs'

export default {
  name: 'graficosetor',
  extends: VueCharts.Pie,
  mixins: [VueCharts.mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
