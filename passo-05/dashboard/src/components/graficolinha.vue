<script>
import {Line} from "vue-chart.js";
export default {
  extends:Line,
  props:{
    label:{
      type:String
    },
    chartData:{
      type:Array
    },
    options:{
      type:Object
    }
  },

  mounted(){
    const status = this.chartData.map(m => m.status).reverse();
    const intencao = this.chartData.map(m => m.intencao).reverse();

    this.renderChart({
      labels: status,
      datasets:[{
        label:this.label,
        data:intencao,
      }],
    },this.options);
  }
  
}
</script>