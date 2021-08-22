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
					categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
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
					name: "series-1",
					data: [30, 40, 45, 50, 49, 60, 70, 91],
				},
			],
		}),
	};
</script>
