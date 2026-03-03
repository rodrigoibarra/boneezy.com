<template>
  <div class="chart-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const props = defineProps<{
  flowData: number[],
  pressureData: number[],
  weightData: number[],
  timeData: number[],
}>();

const canvas = ref<HTMLCanvasElement>();

onMounted(() => {
  if (!canvas.value) return;

  new Chart(canvas.value, {
    type: 'line',
    data: {
      labels: props.timeData,
      datasets: [
        { label: 'Flow - ml/s', data: props.flowData, borderColor: 'rgb(166 199 184)', yAxisID: 'flowPressure' },
        { label: 'Pressure - Bar', data: props.pressureData, borderColor: 'rgb(45 80 98)', yAxisID: 'flowPressure' },
        { label: 'Weight - g', data: props.weightData, borderColor: 'rgb(206 152 37)', yAxisID: 'weightAxis' },
        
      ],
    },
    options: {
      tension: 0.2,
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      scales: {
        flowPressure: { type: 'linear', position: 'left', min: 0, max: 14, title: { display: true, text: 'Flow / Pressure' } },
        weightAxis: { type: 'linear', position: 'right', min: 0, max: 80, title: { display: true, text: 'Weight' }, grid: { drawOnChartArea: false } },
        x: { type: 'linear', min: 0, max: 40, title: { display: true, text: 'Time' } },
      },
    },
  });
});
</script>

<style scoped>
.chart-container { width: 100%; height: 400px; position: relative; }
</style>