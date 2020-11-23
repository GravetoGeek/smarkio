<script>
import VueCharts from 'vue-chartjs'
export default {
  name: 'graficoradar',
  extends: VueCharts.Radar,
  mixins: [VueCharts.mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
