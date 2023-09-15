


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
    interval:2000,
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
			{ x: new Date(2023, 8, 15), y: -863  }


			

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
			{ x: new Date(2023, 8, 15), y:  4509.50   }
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
			{ x: new Date(2023, 8, 15), y:  13.83 }
		

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



