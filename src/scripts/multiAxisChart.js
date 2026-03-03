import Chart from "chart.js/auto";

export function createChart(canvasId, data) {
  const ctx = document.getElementById(canvasId);

  new Chart(ctx, {
	type: "line",
	data: {
	  labels: data.time,
	  datasets: [
		{
		  label: "Flow",
		  data: data.flow,
		  borderColor: "#3b82f6",
		  yAxisID: "y",
		  tension: 0.3
		},
		{
		  label: "Pressure",
		  data: data.pressure,
		  borderColor: "#10b981",
		  yAxisID: "y",
		  tension: 0.3
		},
		{
		  label: "Final Weight",
		  data: data.finalWeight,
		  borderColor: "#ef4444",
		  yAxisID: "y1",
		  tension: 0.3
		}
	  ]
	},
	options: {
	  responsive: true,
	  interaction: { mode: "index", intersect: false },
	  plugins: {
		tooltip: {
		  callbacks: {
			label(context) {
			  const label = context.dataset.label;
			  const value = context.parsed.y;

			  if (label === "Flow") return `Flow: ${value} ml/s`;
			  if (label === "Pressure") return `Pressure: ${value} bar`;
			  if (label === "Final Weight") return `Final Weight: ${value} g`;
			}
		  }
		}
	  },
	  scales: {
		x: { type: "linear", min: 0, max: 80, title: { display: true, text: "Time (seconds)" } },
		y: { position: "left", min: 0, max: 14, title: { display: true, text: "Flow & Pressure" } },
		y1: { position: "right", min: 0, max: 80, grid: { drawOnChartArea: false }, title: { display: true, text: "Final Weight (g)" } }
	  }
	}
  });
}