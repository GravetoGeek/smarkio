<script>
import VueCharts from 'vue-chartjs'
export default {
  name: 'graficoarea',
  extends: VueCharts.Line,
  mixins: [VueCharts.mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
