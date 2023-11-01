


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
		lineColor: "#64a102",
		tickColor: "#64a102",
		labelFontColor: "#64a102",
		titleFontColor: "#64a102",
    titleFontSize:30,
    labelFontSize:30,
    interval:4000,
		includeZero: true,
		suffix: ""
	},
	{
		title: "S&P500",
		lineColor: "#141414",
		tickColor: "#141414",
		labelFontColor: "#141414",
		titleFontColor: "#141414",
    titleFontSize:30,
    labelFontSize:30,
    interval:50,
		includeZero: false,
		suffix: ""
	}],
	axisY2: {
		title: "VIX",
		lineColor: "#f50505",
		tickColor: "#f50505",
		labelFontColor: "#f50505",
		titleFontColor: "#f50505",
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
		type: "line",
		name: "PIU33",
		color: "#64a102",
		showInLegend: true,
		axisYIndex: 0,
    lineThickness: 5,
		dataPoints: [
			{ x: new Date(2023, 6, 31), y: -141 },
			{ x: new Date(2023, 7, 2), y: 5284 },
			{ x: new Date(2023, 7, 8), y: 9585 },
			{ x: new Date(2023, 7, 16), y: 8579 },
			{ x: new Date(2023, 7, 24), y: 7789 },
			{ x: new Date(2023, 7, 28), y:  5789 },
			{ x: new Date(2023, 7, 29), y:  12765 },
			{ x: new Date(2023, 7, 30), y:  21613 },
			{ x: new Date(2023, 8, 7), y:   15663  },
			{ x: new Date(2023, 8, 14), y:  -8269 },
			{ x: new Date(2023, 8, 15), y: -863  },
			{ x: new Date(2023, 8, 19), y:  6240 },
			{ x: new Date(2023, 8, 21), y:  11106 },
			{ x: new Date(2023, 8, 22), y:  9996 },
			{ x: new Date(2023, 8, 26), y:  12878 },
			{ x: new Date(2023, 8, 27), y:  23519 },
			{ x: new Date(2023, 8, 28), y:  27643},
			{ x: new Date(2023, 9, 2), y:  20782},
			{ x: new Date(2023, 9, 3), y:  26024},
			{ x: new Date(2023, 9, 6), y:  22046},
			{ x: new Date(2023, 9, 10), y:  24811},
			{ x: new Date(2023, 9, 13), y: 25087},
			{ x: new Date(2023, 9, 17), y:  21105 },
			{ x: new Date(2023, 9, 18), y:  26808 },
			{ x: new Date(2023, 9, 20), y: 33914},
			{ x: new Date(2023, 9, 26), y:   42294},
			{ x: new Date(2023, 10, 1), y:   33578}








			

    ]
	},
	{
		type: "line",
		name: "S&P500",
		color: "#141414",
		axisYIndex: 1,
		showInLegend: true,
    lineThickness: 5,
		dataPoints: [
			{ x: new Date(2023, 6, 31), y: 4609.80 },
			{ x: new Date(2023, 7, 2), y: 4544.00  },
			{ x: new Date(2023, 7, 8), y: 4487.75   },
			{ x: new Date(2023, 7, 16), y: 4452.75  },
			{ x: new Date(2023, 7, 24), y: 4408.50  },
			{ x: new Date(2023, 7, 28), y: 4430.50 },
			{ x: new Date(2023, 7, 29), y: 4476.00  },
			{ x: new Date(2023, 7, 30), y:  4523.50  },
			{ x: new Date(2023, 8, 7), y:   4449.50 },
			{ x: new Date(2023, 8, 14), y:  4548.25  },
			{ x: new Date(2023, 8, 15), y:  4509.50   },
			{ x: new Date(2023, 8, 19), y:   4470.00  },
			{ x: new Date(2023, 8, 21), y:  4400.50 },
			{ x: new Date(2023, 8, 22), y:   4398.00 },
			{ x: new Date(2023, 8, 26), y:   4343.75  },
			{ x: new Date(2023, 8, 27), y:   4306.00  },
			{ x: new Date(2023, 8, 28), y:   4347.50  },
			{ x: new Date(2023, 9, 2), y:  4317.25},
			{ x: new Date(2023, 9, 3), y:  4266.25},
			{ x: new Date(2023, 9, 6), y:  4323.75},
			{ x: new Date(2023, 9, 10), y: 4399.50 },
			{ x: new Date(2023, 9, 13), y:  4369.00 },
			{ x: new Date(2023, 9, 17), y:  4416.75 },
			{ x: new Date(2023, 9, 18), y:  4371.9 },
			{ x: new Date(2023, 9, 20), y:  4264.50 },
			{ x: new Date(2023, 9, 26), y:    4177.63 },
			{ x: new Date(2023, 10, 1), y:  4223}


    ]
	},
	{
		type: "line",
		name: "VIX",
		color: "#f50505",
    axisYIndex: 2,
		axisYType: "secondary",
		showInLegend: true,
    lineThickness: 5,
		dataPoints: [
      { x: new Date(2023, 6, 31), y:  14.45 },
			{ x: new Date(2023, 7, 2), y:   17.13  },
			{ x: new Date(2023, 7, 8), y:    18.33   },
			{ x: new Date(2023, 7, 16), y:  17.83  },
			{ x: new Date(2023, 7, 24), y:  17.73  },
			{ x: new Date(2023, 7, 28), y:   16.83   },
			{ x: new Date(2023, 7, 29), y:  16.38 },
			{ x: new Date(2023, 7, 30), y:  15.88 },
			{ x: new Date(2023, 8, 7), y:  15.73  },
			{ x: new Date(2023, 8, 14), y: 13.58  },
			{ x: new Date(2023, 8, 15), y:  13.83 },
			{ x: new Date(2023, 8, 19), y:  15.93 },
			{ x: new Date(2023, 8, 21), y:  17.13 },
			{ x: new Date(2023, 8, 22), y:   16.83 },
			{ x: new Date(2023, 8, 26), y:   17.93  },
			{ x: new Date(2023, 8, 27), y:   19.03  },
			{ x: new Date(2023, 8, 28), y:   17.43 },
			{ x: new Date(2023, 9, 2), y:  17.73},
			{ x: new Date(2023, 9, 3), y:  19.23},
			{ x: new Date(2023, 9, 6), y:  17.78},
			{ x: new Date(2023, 9, 10), y:  16.88},
			{ x: new Date(2023, 9, 13), y:  18.43 },
			{ x: new Date(2023, 9, 17), y:  17.83 },
			{ x: new Date(2023, 9, 18), y:  19.33 },
			{ x: new Date(2023, 9, 20), y:   20.88},
			{ x: new Date(2023, 9, 26), y:    20.66 },
			{ x: new Date(2023, 10, 1), y:  17.93}



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



