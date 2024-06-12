


window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
	title:{
		text: "Monitoraggio PIU33 vs S&P500 and VIX",
    margin: 50,
    fontSize:50,
    fontFamily: "tahoma",
    color: "black"
    
	},
	axisX:{
		interval: 1,
		intervalType: "month",
		labelFontSize: 20
	},
	axisY:[{
		title: "PIU33",
		lineColor: "#64a102",
		tickColor: "#64a102",
		labelFontColor: "#64a102",
		titleFontColor: "#64a102",
    titleFontSize:30,
    labelFontSize:30,
    interval:20000,
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
    interval:200,
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
    interval:2,
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
			{ x: new Date(2023, 7, 28), y: 5789 },
			{ x: new Date(2023, 7, 29), y: 12765 },
			{ x: new Date(2023, 7, 30), y: 21613 },
			{ x: new Date(2023, 8, 7), y: 15663  },
			{ x: new Date(2023, 8, 14), y: -8269 },
			{ x: new Date(2023, 8, 15), y: -863  },
			{ x: new Date(2023, 8, 19), y: 6240 },
			{ x: new Date(2023, 8, 21), y: 11106 },
			{ x: new Date(2023, 8, 22), y: 9996 },
			{ x: new Date(2023, 8, 26), y: 12878 },
			{ x: new Date(2023, 8, 27), y: 23519 },
			{ x: new Date(2023, 8, 28), y: 27643},
			{ x: new Date(2023, 9, 2), y: 20782},
			{ x: new Date(2023, 9, 3), y: 26024},
			{ x: new Date(2023, 9, 6), y: 22046},
			{ x: new Date(2023, 9, 10), y: 24811},
			{ x: new Date(2023, 9, 13), y: 25087},
			{ x: new Date(2023, 9, 17), y: 21105 },
			{ x: new Date(2023, 9, 18), y: 26808 },
			{ x: new Date(2023, 9, 20), y: 33914},
			{ x: new Date(2023, 9, 26), y: 42294},
			{ x: new Date(2023, 10, 1), y: 33578},
			{ x: new Date(2023, 10, 2), y: 35786},
			{ x: new Date(2023, 10, 3), y: 44682},
			{ x: new Date(2023, 10, 7), y: 39834 },
			{ x: new Date(2023, 10, 13), y: 35868 },
			{ x: new Date(2023, 10, 14), y: 51916},
			{ x: new Date(2023, 10, 16), y: 52755},
			{ x: new Date(2023, 10, 22), y: 50745},
			{ x: new Date(2023, 10, 30), y: 45155},
			{ x: new Date(2023, 11, 11), y: 42108},
			{ x: new Date(2023, 11, 14), y: 54699},
			{ x: new Date(2023, 11, 19), y: 62248},
			{ x: new Date(2023, 11, 21), y: 70451},
			{ x: new Date(2023, 11, 22), y: 82691 },
			{ x: new Date(2024, 0, 3), y:  86182 },
			{ x: new Date(2024, 0, 10), y:  77269 },
			{ x: new Date(2024, 0, 17), y:  76831 },
			{ x: new Date(2024, 0, 18), y: 79214},
			{ x: new Date(2024, 0, 19), y: 80394},
			{ x: new Date(2024, 0, 22), y: 82501},
			{ x: new Date(2024, 0, 23), y: 75479},
			{ x: new Date(2024, 0, 24), y: 89207},
			{ x: new Date(2024, 0, 30), y: 87196},
			{ x: new Date(2024, 0, 31), y: 94241},
			{ x: new Date(2024, 1, 2), y:  100294 },
			{ x: new Date(2024, 1, 8), y:  90272 },
			{ x: new Date(2024, 1, 12), y: 101811},
			{ x: new Date(2024, 1, 13), y: 112664},
			{ x: new Date(2024, 1, 15), y: 118549},
			{ x: new Date(2024, 1, 20), y: 114710},
			{ x: new Date(2024, 1, 22), y: 134552},
			{ x: new Date(2024, 1, 23), y: 141241},
			{ x: new Date(2024, 2, 4), y: 136678},
			{ x: new Date(2024, 2, 5), y:  144246},
			{ x: new Date(2024, 2, 6), y: 130482},
			{ x: new Date(2024, 2, 8), y: 148438},
			{ x: new Date(2024, 2, 11), y: 160713},
			{ x: new Date(2024, 2, 12), y: 158811},
			{ x: new Date(2024, 2, 15), y: 154595},
			{ x: new Date(2024, 2, 19), y: 153578},
			{ x: new Date(2024, 2, 21), y: 166349},
			{ x: new Date(2024, 3, 2), y:  151754},
			{ x: new Date(2024, 3, 4), y: 155030},
			{ x: new Date(2024, 3, 5), y: 172883},
			{ x: new Date(2024, 3, 11), y: 173143},
			{ x: new Date(2024, 3, 12), y: 179237},
			{ x: new Date(2024, 3, 16), y: 192609},
			{ x: new Date(2024, 3, 22), y: 169685},
			{ x: new Date(2024, 3, 23), y: 175281},
			{ x: new Date(2024, 3, 25), y: 181057},
			{ x: new Date(2024, 3, 26), y:  191299},
			{ x: new Date(2024, 4, 1), y:  182872},
			{ x: new Date(2024, 4, 3), y:  173096},
			{ x: new Date(2024, 4, 6), y:  173076},
			{ x: new Date(2024, 4, 7), y:  182163},
			{ x: new Date(2024, 4, 10), y: 174125},
			{ x: new Date(2024, 4, 15), y:  160657},
			{ x: new Date(2024, 4, 16), y:  161859 },
			{ x: new Date(2024, 4, 31), y:  147780},
			{ x: new Date(2024, 5, 3), y:   145596 },
			{ x: new Date(2024, 5, 5), y:  146593},
			{ x: new Date(2024, 5, 6), y:  147584},
			{ x: new Date(2024, 5, 12), y: 153675}




			













			

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
			{ x: new Date(2023, 7, 30), y: 4523.50  },
			{ x: new Date(2023, 8, 7), y: 4449.50 },
			{ x: new Date(2023, 8, 14), y: 4548.25  },
			{ x: new Date(2023, 8, 15), y: 4509.50   },
			{ x: new Date(2023, 8, 19), y: 4470.00  },
			{ x: new Date(2023, 8, 21), y: 4400.50 },
			{ x: new Date(2023, 8, 22), y: 4398.00 },
			{ x: new Date(2023, 8, 26), y: 4343.75  },
			{ x: new Date(2023, 8, 27), y: 4306.00  },
			{ x: new Date(2023, 8, 28), y: 4347.50  },
			{ x: new Date(2023, 9, 2), y: 4317.25},
			{ x: new Date(2023, 9, 3), y: 4266.25},
			{ x: new Date(2023, 9, 6), y: 4323.75},
			{ x: new Date(2023, 9, 10), y: 4399.50 },
			{ x: new Date(2023, 9, 13), y: 4369.00 },
			{ x: new Date(2023, 9, 17), y: 4416.75 },
			{ x: new Date(2023, 9, 18), y: 4371.9 },
			{ x: new Date(2023, 9, 20), y: 4264.50 },
			{ x: new Date(2023, 9, 26), y: 4177.63 },
			{ x: new Date(2023, 10, 1), y: 4223},
			{ x: new Date(2023, 10, 2), y: 4316},
			{ x: new Date(2023, 10, 3), y: 4380.75},
			{ x: new Date(2023, 10, 7), y: 4396.00 },
			{ x: new Date(2023, 10, 13), y: 4421.75 },
			{ x: new Date(2023, 10, 14), y: 4518.25 },
			{ x: new Date(2023, 10, 16), y: 4507.33 },
			{ x: new Date(2023, 10, 22), y: 4571.5 },
			{ x: new Date(2023, 10, 30), y: 4570},
			{ x: new Date(2023, 11, 11), y: 4609.25},
			{ x: new Date(2023, 11, 14), y: 4777.75 },
			{ x: new Date(2023, 11, 19), y: 4813.50 },
			{ x: new Date(2023, 11, 21), y:  4764.00 },
			{ x: new Date(2023, 11, 22), y:  4808.75 },
			{ x: new Date(2024, 0, 3), y:   4756.00  },
			{ x: new Date(2024, 0, 10), y:   4797.60 },
			{ x: new Date(2024, 0, 17), y:   4772.25  },
			{ x: new Date(2024, 0, 18), y:    4792.50   },
			{ x: new Date(2024, 0, 19), y:  4831.00 },
			{ x: new Date(2024, 0, 22), y: 4880.5},
			{ x: new Date(2024, 0, 23), y:  4876.25 },
			{ x: new Date(2024, 0, 24), y:  4925.75 },
			{ x: new Date(2024, 0, 30), y:  4947.25 },
			{ x: new Date(2024, 0, 31), y:  4907.00 },
			{ x: new Date(2024, 1, 2), y:   4957.50  },
			{ x: new Date(2024, 1, 8), y:    5013.25 },
			{ x: new Date(2024, 1, 12), y:   5052.00  },
			{ x: new Date(2024, 1, 13), y:   4980.75 },
			{ x: new Date(2024, 1, 15), y:    5024.25 },
			{ x: new Date(2024, 1, 20), y:    4977.75  },
			{ x: new Date(2024, 1, 22), y:    5070.25 },
			{ x: new Date(2024, 1, 23), y:  5166.40 },
			{ x: new Date(2024, 2, 4), y:  5200.90 },
			{ x: new Date(2024, 2, 5), y:   5155.00 },
			{ x: new Date(2024, 2, 6), y:   5190.00 },
			{ x: new Date(2024, 2, 8), y:  5250.50 },
			{ x: new Date(2024, 2, 11), y:  5178.70 },
			{ x: new Date(2024, 2, 12), y:  5229.00 },
			{ x: new Date(2024, 2, 15), y:  5181.00 },
			{ x: new Date(2024, 2, 19), y:  5223.00 },
			{ x: new Date(2024, 2, 21), y:  5318.50 },
			{ x: new Date(2024, 3, 2), y:   5240.00  },
			{ x: new Date(2024, 3, 4), y:   5299.50 },
			{ x: new Date(2024, 3, 5), y:   5247.00 },
			{ x: new Date(2024, 3, 11), y:  5193.50 },
			{ x: new Date(2024, 3, 12), y:  5190.00 },
			{ x: new Date(2024, 3, 16), y:  5089.00 },
			{ x: new Date(2024, 3, 22), y:  5012.00 },
			{ x: new Date(2024, 3, 23), y:  5104.50 },
			{ x: new Date(2024, 3, 25), y:  5037.50},
			{ x: new Date(2024, 3, 26), y:  5136.00 },
			{ x: new Date(2024, 4, 1), y:  5057.50 },
			{ x: new Date(2024, 4, 3), y:   5134.25 },
			{ x: new Date(2024, 4, 6), y:   5184.25 },
			{ x: new Date(2024, 4, 7), y:  5222.25 },
			{ x: new Date(2024, 4, 10), y:   5253.75 },
			{ x: new Date(2024, 4, 15), y:  5306.75 },
			{ x: new Date(2024, 4, 16), y:  5347.50  },
			{ x: new Date(2024, 4, 31), y:   5231.00 },
			{ x: new Date(2024, 5, 3), y:   5281.25  },
			{ x: new Date(2024, 5, 5), y:   5329.50 },
			{ x: new Date(2024, 5, 6), y:  5363.50 },
			{ x: new Date(2024, 5, 12), y:  5445.50 }



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
      { x: new Date(2023, 6, 31), y: 14.45 },
			{ x: new Date(2023, 7, 2), y: 17.13  },
			{ x: new Date(2023, 7, 8), y: 18.33   },
			{ x: new Date(2023, 7, 16), y: 17.83  },
			{ x: new Date(2023, 7, 24), y: 17.73  },
			{ x: new Date(2023, 7, 28), y: 16.83   },
			{ x: new Date(2023, 7, 29), y: 16.38 },
			{ x: new Date(2023, 7, 30), y: 15.88 },
			{ x: new Date(2023, 8, 7), y: 15.73  },
			{ x: new Date(2023, 8, 14), y: 13.58  },
			{ x: new Date(2023, 8, 15), y: 13.83 },
			{ x: new Date(2023, 8, 19), y: 15.93 },
			{ x: new Date(2023, 8, 21), y: 17.13 },
			{ x: new Date(2023, 8, 22), y: 16.83 },
			{ x: new Date(2023, 8, 26), y: 17.93  },
			{ x: new Date(2023, 8, 27), y: 19.03  },
			{ x: new Date(2023, 8, 28), y: 17.43 },
			{ x: new Date(2023, 9, 2), y: 17.73},
			{ x: new Date(2023, 9, 3), y: 19.23},
			{ x: new Date(2023, 9, 6), y: 17.78},
			{ x: new Date(2023, 9, 10), y: 16.88},
			{ x: new Date(2023, 9, 13), y: 18.43 },
			{ x: new Date(2023, 9, 17), y: 17.83 },
			{ x: new Date(2023, 9, 18), y: 19.33 },
			{ x: new Date(2023, 9, 20), y: 20.88},
			{ x: new Date(2023, 9, 26), y: 20.66 },
			{ x: new Date(2023, 10, 1), y: 17.93},
			{ x: new Date(2023, 10, 2), y: 17.03},
			{ x: new Date(2023, 10, 3), y: 16.08},
			{ x: new Date(2023, 10, 7), y: 15.63},
			{ x: new Date(2023, 10, 13), y: 15.88},
			{ x: new Date(2023, 10, 14), y: 15.55},
			{ x: new Date(2023, 10, 16), y: 15.33},
			{ x: new Date(2023, 10, 22), y: 14.43},
			{ x: new Date(2023, 10, 30), y: 14.03},
			{ x: new Date(2023, 11, 11), y: 13.04},
			{ x: new Date(2023, 11, 14), y: 12.23},
			{ x: new Date(2023, 11, 19), y: 14.73},
			{ x: new Date(2023, 11, 21), y:  15.88 },
			{ x: new Date(2023, 11, 22), y:  15.33 },
			{ x: new Date(2024, 0, 3), y: 14.20 },
			{ x: new Date(2024, 0, 10), y:  13.43 },
			{ x: new Date(2024, 0, 17), y:   15.43 },
			{ x: new Date(2024, 0, 18), y:   15.04 },
			{ x: new Date(2024, 0, 19), y:  14.63 },
			{ x: new Date(2024, 0, 22), y: 14.48},
			{ x: new Date(2024, 0, 23), y: 13.83},
			{ x: new Date(2024, 0, 24), y: 13.63},
			{ x: new Date(2024, 0, 30), y:  14.13},
			{ x: new Date(2024, 0, 31), y:  14.63 },
			{ x: new Date(2024, 1, 2), y:  14.42 },
			{ x: new Date(2024, 1, 8), y: 13.43 },
			{ x: new Date(2024, 1, 12), y:   14.74  },
			{ x: new Date(2024, 1, 13), y:   15.38 },
			{ x: new Date(2024, 1, 15), y:   15.13 },
			{ x: new Date(2024, 1, 20), y:   15.58 },
			{ x: new Date(2024, 1, 22), y:   14.67},
			{ x: new Date(2024, 1, 23), y: 14.73},
			{ x: new Date(2024, 2, 4), y:  14.00 },
			{ x: new Date(2024, 2, 5), y:  14.73 },
			{ x: new Date(2024, 2, 6), y:  14.68},
			{ x: new Date(2024, 2, 8), y:   14.37 },
			{ x: new Date(2024, 2, 11), y:  15.18 },
			{ x: new Date(2024, 2, 12), y:  14.08 },
			{ x: new Date(2024, 2, 15), y:  14.78 },
			{ x: new Date(2024, 2, 19), y:  14.98 },
			{ x: new Date(2024, 2, 21), y:  14.53 },
			{ x: new Date(2024, 3, 2), y:   15.43  },
			{ x: new Date(2024, 3, 4), y:  14.58  },
			{ x: new Date(2024, 3, 5), y:   15.78 },
			{ x: new Date(2024, 3, 11), y:  15.97 },
			{ x: new Date(2024, 3, 12), y:   17.23 },
			{ x: new Date(2024, 3, 16), y: 18.33},
			{ x: new Date(2024, 3, 22), y:  16.94 },
			{ x: new Date(2024, 3, 23), y: 15.98},
			{ x: new Date(2024, 3, 25), y: 16.63},
			{ x: new Date(2024, 3, 26), y:  15.54 },
			{ x: new Date(2024, 4, 1), y:   15.35 },
			{ x: new Date(2024, 4, 3), y:    14.73 },
			{ x: new Date(2024, 4, 6), y:  14.33 },
			{ x: new Date(2024, 4, 7), y:   14.18 },
			{ x: new Date(2024, 4, 10), y:  13.83 },
			{ x: new Date(2024, 4, 15), y:  13.18  },
			{ x: new Date(2024, 4, 16), y:   12.88 },
			{ x: new Date(2024, 4, 31), y:   14.23 },
			{ x: new Date(2024, 5, 3), y:   13.88 },
			{ x: new Date(2024, 5, 5), y:   13.47  },
			{ x: new Date(2024, 5, 6), y:   13.28 },
			{ x: new Date(2024, 5, 12), y:  12.64 }

			











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



