


window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
	title:{
		text: "Monitoraggio PIU33 vs S&P500 and VIX",
    margin: 50,
    fontSize:60,
    fontFamily: "tahoma",
    color: "black"
    
	},
	axisY:[{
		title: "PIU33",
		lineColor: "#f50505",
		tickColor: "#f50505",
		labelFontColor: "#f50505",
		titleFontColor: "#f50505",
    titleFontSize:30,
    labelFontSize:30,
    interval:3000,
		includeZero: true,
		suffix: ""
	},
	{
		title: "S&P500",
		lineColor: "#FFA601",
		tickColor: "#FFA601",
		labelFontColor: "#FFA601",
		titleFontColor: "#FFA601",
    titleFontSize:30,
    labelFontSize:30,
    interval:50,
		includeZero: false,
		suffix: ""
	}],
	axisY2: {
		title: "VIX",
		lineColor: "#cb05f2",
		tickColor: "#cb05f2",
		labelFontColor: "#cb05f2",
		titleFontColor: "#cb05f2",
    titleFontSize:30,
    labelFontSize:30,
    interval:1,
		includeZero: false,
		prefix: "",
		suffix: ""
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "spline",
		name: "PIU33",
		color: "#f50505",
		showInLegend: true,
		axisYIndex: 0,
    lineThickness: 5,
		dataPoints: [
			{ x: new Date(2023, 5, 20), y: -145 }, 
			{ x: new Date(2023, 5, 22), y: -10688 },
			{ x: new Date(2023, 5, 23), y: -13442 },
			{ x: new Date(2023, 5, 28), y: -25537 },
			{ x: new Date(2023, 5, 30), y: -10002 },
			{ x: new Date(2023, 6, 6), y: 3679 },
			{ x: new Date(2023, 6, 7), y: -6762 },
			{ x: new Date(2023, 6, 10), y: 454 },
			{ x: new Date(2023, 6, 12), y: 4927 },
			{ x: new Date(2023, 6, 13), y: 5649 },
			{ x: new Date(2023, 6, 17), y: 2621 },
			{ x: new Date(2023, 6, 18), y: -5982 },
      { x: new Date(2023, 6, 19), y: -89 },
      { x: new Date(2023, 6, 20), y: -6906 }
    ]
	},
	{
		type: "spline",
		name: "S&P500",
		color: "#FFA601",
		axisYIndex: 1,
		showInLegend: true,
    lineThickness: 5,
		dataPoints: [
			{ x: new Date(2023, 5, 20), y: 4425.50},
			{ x: new Date(2023, 5, 22), y: 4411.75},
			{ x: new Date(2023, 5, 23), y: 4396.00 },
			{ x: new Date(2023, 5, 28), y: 4421.25 },
			{ x: new Date(2023, 5, 30), y: 4478.75 },
			{ x: new Date(2023, 6, 6), y: 4434.00 },
			{ x: new Date(2023, 6, 7), y: 4472.25 },
			{ x: new Date(2023, 6, 10), y: 4432.75 },
			{ x: new Date(2023, 6, 12), y: 4507.75},
			{ x: new Date(2023, 6, 13), y: 4533.50 },
			{ x: new Date(2023, 6, 17), y: 4551.75},
			{ x: new Date(2023, 6, 18), y: 4576.25 },
      { x: new Date(2023, 6, 19), y: 4604.50},
      { x: new Date(2023, 6, 20), y: 4579.00}
    ]
	},
	{
		type: "spline",
		name: "VIX",
		color: "#cb05f2",
    axisYIndex: 2,
		axisYType: "secondary",
		showInLegend: true,
    lineThickness: 5,
		dataPoints: [
      { x: new Date(2023, 5, 20), y: 16},
			{ x: new Date(2023, 5, 22), y: 16.23},
			{ x: new Date(2023, 5, 23), y: 15.93 },
			{ x: new Date(2023, 5, 28), y: 15.33 },
			{ x: new Date(2023, 5, 30), y: 14.93 },
			{ x: new Date(2023, 6, 6), y: 17.28 },
			{ x: new Date(2023, 6, 7), y: 15.63 },
			{ x: new Date(2023, 6, 10), y: 15.93 },
			{ x: new Date(2023, 6, 12), y: 14.38},
			{ x: new Date(2023, 6, 13), y: 14.13 },
			{ x: new Date(2023, 6, 17), y: 15.58},
			{ x: new Date(2023, 6, 18), y: 15.63 },
      { x: new Date(2023, 6, 19), y: 15.63},
      { x: new Date(2023, 6, 20), y: 15.78}	
		]
	}]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}

}



