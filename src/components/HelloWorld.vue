<template>
	<v-container>
		<div class="flex-row mt-6 d-flex">
			<apexchart
				width="500"
				type="line"
				:options="options"
				:series="series"
				class="mx-auto"
			></apexchart>
		</div>
	</v-container>
</template>

<script>
	export default {
		name: "HelloWorld",

		data: () => ({
			options: {
				chart: {
					id: "vuechart-example",
					toolbar: {
						show: false,
					},
				},
				title: {
					text: "Test Chart",
					align: "center",
				},
				xaxis: {
					categories: null,
					title: {
						text: "Test X Axis",
					},
				},
				yaxis: {
					title: {
						text: "Test Y Axis",
					},
				},
			},
			series: [
				{
					name: null,
					data: null,
				},
			],
		}),
		methods: {
			getDataLine() {
				this.axios
					.get("http://localhost:3000/data/line-chart")
					.then((response) => {
						this.options.xaxis.categories = response.data.x_axis.series;
						this.series = [
							{
								name: response.data.y_axis.name,
								data: response.data.y_axis.series,
							},
						];
					});
			},
		},
		created() {
			this.getDataLine();
		},
	};
</script>
