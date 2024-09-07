<template>
  <div class="chart-container p-2 bg-gray-800 shadow-lg rounded">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from "vue";
  import { Chart, registerables } from "chart.js";

  Chart.register(...registerables);

  type Props = {
    dates: string[] | undefined;
    values: number[] | undefined;
  };

  const props = defineProps<Props>();
  const chartCanvas = ref<HTMLCanvasElement | null>(null);
  let chartInstance: Chart | null = null;

  const createChart = () => {
    if (chartInstance) chartInstance.destroy();

    if (chartCanvas.value && props.dates && props.values) {
      chartInstance = new Chart(chartCanvas.value, {
        type: "line",
        data: {
          labels: props.dates,
          datasets: [
            {
              label: "Investment Growth",
              backgroundColor: "#f87979",
              borderColor: "#f87979",
              data: props.values,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  };

  watch(
    () => [props.dates, props.values],
    () => {
      createChart();
    }
  );

  onMounted(() => {
    createChart();
  });
</script>

<style scoped>
  .chart-container {
    position: relative;
    height: 40vh;
    width: 60vw;
  }
</style>
