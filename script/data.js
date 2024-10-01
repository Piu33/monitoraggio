


window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Monitoraggio PIU33 e correlazione VIX",
			margin: 50,
			fontSize:50,
			fontFamily: "tahoma",
			color: "black"
			
		},
		axisX:{
			interval: 2,
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
			interval:40000,
			includeZero: true,
			suffix: ""
		},
		// {
		// 	title: "SP500",
		// 	lineColor: "#141414",
		// 	tickColor: "#141414",
		// 	labelFontColor: "#141414",
		// 	titleFontColor: "#141414",
		// 	titleFontSize:30,
		// 	labelFontSize:30,
		// 	interval:200,
		// 	includeZero: false,
		// 	suffix: ""
		// }
		],
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
				{ x: new Date(2024, 5, 12), y: 153675},
				{ x: new Date(2024, 5, 20), y: 153041},
				{ x: new Date(2024, 5, 28), y: 121518},
				{ x: new Date(2024, 6, 1), y:  115811},
				{ x: new Date(2024, 6, 3), y:  121511 },
				{ x: new Date(2024, 6, 8), y: 126861},
				{ x: new Date(2024, 6, 11), y: 133686 },
				{ x: new Date(2024, 6, 18), y:  161225 },
				{ x: new Date(2024, 6, 24), y: 169019},
				{ x: new Date(2024, 6, 30), y: 175566},
				{ x: new Date(2024, 6, 31), y:  202250 },
				{ x: new Date(2024, 7, 1), y:  225797},
				{ x: new Date(2024, 7, 2), y: 299611 },
				{ x: new Date(2024, 7, 5), y:  387441 },
				{ x: new Date(2024, 7, 6), y: 424197},
				{ x: new Date(2024, 7, 13), y: 340784},
				{ x: new Date(2024, 7, 14), y: 323043},
				{ x: new Date(2024, 7, 15), y: 331032},
				{ x: new Date(2024, 7, 19), y: 325059},
				{ x: new Date(2024, 7, 21), y: 370564},
				{ x: new Date(2024, 7, 29), y: 330956},
				{ x: new Date(2024, 8, 3), y: 345118},
				{ x: new Date(2024, 8, 4), y: 346442},
				{ x: new Date(2024, 8, 5), y: 350257},
				{ x: new Date(2024, 8, 6), y: 357433},
				{ x: new Date(2024, 8, 9), y: 345817},
				{ x: new Date(2024, 8, 11), y: 329852},
				{ x: new Date(2024, 8, 12), y: 380656},
				{ x: new Date(2024, 8, 13), y: 388962},
				{ x: new Date(2024, 8, 19), y: 398129},
				{ x: new Date(2024, 8, 27), y: 391487},
				{ x: new Date(2024, 9, 1), y: 423915}
	
	
	
				
	
			]
		},
		// {
		// 	type: "line",
		// 	name: "SP500",
		// 	color: "#141414",
		// 	axisYIndex: 1,
		// 	showInLegend: true,
		// 	lineThickness: 5,
		// 	dataPoints: [
		// 		{ x: new Date(2023, 6, 31), y: 4609.80 },
		// 		{ x: new Date(2023, 7, 2), y: 4544.00  },
		// 		{ x: new Date(2023, 7, 8), y: 4487.75   },
		// 		{ x: new Date(2023, 7, 16), y: 4452.75  },
		// 		{ x: new Date(2023, 7, 24), y: 4408.50  },
		// 		{ x: new Date(2023, 7, 28), y: 4430.50 },
		// 		{ x: new Date(2023, 7, 29), y: 4476.00  },
		// 		{ x: new Date(2023, 7, 30), y: 4523.50  },
		// 		{ x: new Date(2023, 8, 7), y: 4449.50 },
		// 		{ x: new Date(2023, 8, 14), y: 4548.25  },
		// 		{ x: new Date(2023, 8, 15), y: 4509.50   },
		// 		{ x: new Date(2023, 8, 19), y: 4470.00  },
		// 		{ x: new Date(2023, 8, 21), y: 4400.50 },
		// 		{ x: new Date(2023, 8, 22), y: 4398.00 },
		// 		{ x: new Date(2023, 8, 26), y: 4343.75  },
		// 		{ x: new Date(2023, 8, 27), y: 4306.00  },
		// 		{ x: new Date(2023, 8, 28), y: 4347.50  },
		// 		{ x: new Date(2023, 9, 2), y: 4317.25},
		// 		{ x: new Date(2023, 9, 3), y: 4266.25},
		// 		{ x: new Date(2023, 9, 6), y: 4323.75},
		// 		{ x: new Date(2023, 9, 10), y: 4399.50 },
		// 		{ x: new Date(2023, 9, 13), y: 4369.00 },
		// 		{ x: new Date(2023, 9, 17), y: 4416.75 },
		// 		{ x: new Date(2023, 9, 18), y: 4371.9 },
		// 		{ x: new Date(2023, 9, 20), y: 4264.50 },
		// 		{ x: new Date(2023, 9, 26), y: 4177.63 },
		// 		{ x: new Date(2023, 10, 1), y: 4223},
		// 		{ x: new Date(2023, 10, 2), y: 4316},
		// 		{ x: new Date(2023, 10, 3), y: 4380.75},
		// 		{ x: new Date(2023, 10, 7), y: 4396.00 },
		// 		{ x: new Date(2023, 10, 13), y: 4421.75 },
		// 		{ x: new Date(2023, 10, 14), y: 4518.25 },
		// 		{ x: new Date(2023, 10, 16), y: 4507.33 },
		// 		{ x: new Date(2023, 10, 22), y: 4571.5 },
		// 		{ x: new Date(2023, 10, 30), y: 4570},
		// 		{ x: new Date(2023, 11, 11), y: 4609.25},
		// 		{ x: new Date(2023, 11, 14), y: 4777.75 },
		// 		{ x: new Date(2023, 11, 19), y: 4813.50 },
		// 		{ x: new Date(2023, 11, 21), y:  4764.00 },
		// 		{ x: new Date(2023, 11, 22), y:  4808.75 },
		// 		{ x: new Date(2024, 0, 3), y:   4756.00  },
		// 		{ x: new Date(2024, 0, 10), y:   4797.60 },
		// 		{ x: new Date(2024, 0, 17), y:   4772.25  },
		// 		{ x: new Date(2024, 0, 18), y:    4792.50   },
		// 		{ x: new Date(2024, 0, 19), y:  4831.00 },
		// 		{ x: new Date(2024, 0, 22), y: 4880.5},
		// 		{ x: new Date(2024, 0, 23), y:  4876.25 },
		// 		{ x: new Date(2024, 0, 24), y:  4925.75 },
		// 		{ x: new Date(2024, 0, 30), y:  4947.25 },
		// 		{ x: new Date(2024, 0, 31), y:  4907.00 },
		// 		{ x: new Date(2024, 1, 2), y:   4957.50  },
		// 		{ x: new Date(2024, 1, 8), y:    5013.25 },
		// 		{ x: new Date(2024, 1, 12), y:   5052.00  },
		// 		{ x: new Date(2024, 1, 13), y:   4980.75 },
		// 		{ x: new Date(2024, 1, 15), y:    5024.25 },
		// 		{ x: new Date(2024, 1, 20), y:    4977.75  },
		// 		{ x: new Date(2024, 1, 22), y:    5070.25 },
		// 		{ x: new Date(2024, 1, 23), y:  5166.40 },
		// 		{ x: new Date(2024, 2, 4), y:  5200.90 },
		// 		{ x: new Date(2024, 2, 5), y:   5155.00 },
		// 		{ x: new Date(2024, 2, 6), y:   5190.00 },
		// 		{ x: new Date(2024, 2, 8), y:  5250.50 },
		// 		{ x: new Date(2024, 2, 11), y:  5178.70 },
		// 		{ x: new Date(2024, 2, 12), y:  5229.00 },
		// 		{ x: new Date(2024, 2, 15), y:  5181.00 },
		// 		{ x: new Date(2024, 2, 19), y:  5223.00 },
		// 		{ x: new Date(2024, 2, 21), y:  5318.50 },
		// 		{ x: new Date(2024, 3, 2), y:   5240.00  },
		// 		{ x: new Date(2024, 3, 4), y:   5299.50 },
		// 		{ x: new Date(2024, 3, 5), y:   5247.00 },
		// 		{ x: new Date(2024, 3, 11), y:  5193.50 },
		// 		{ x: new Date(2024, 3, 12), y:  5190.00 },
		// 		{ x: new Date(2024, 3, 16), y:  5089.00 },
		// 		{ x: new Date(2024, 3, 22), y:  5012.00 },
		// 		{ x: new Date(2024, 3, 23), y:  5104.50 },
		// 		{ x: new Date(2024, 3, 25), y:  5037.50},
		// 		{ x: new Date(2024, 3, 26), y:  5136.00 },
		// 		{ x: new Date(2024, 4, 1), y:  5057.50 },
		// 		{ x: new Date(2024, 4, 3), y:   5134.25 },
		// 		{ x: new Date(2024, 4, 6), y:   5184.25 },
		// 		{ x: new Date(2024, 4, 7), y:  5222.25 },
		// 		{ x: new Date(2024, 4, 10), y:   5253.75 },
		// 		{ x: new Date(2024, 4, 15), y:  5306.75 },
		// 		{ x: new Date(2024, 4, 16), y:  5347.50  },
		// 		{ x: new Date(2024, 4, 31), y:   5231.00 },
		// 		{ x: new Date(2024, 5, 3), y:   5281.25  },
		// 		{ x: new Date(2024, 5, 5), y:   5329.50 },
		// 		{ x: new Date(2024, 5, 6), y:  5363.50 },
		// 		{ x: new Date(2024, 5, 12), y:  5445.50 },
		// 		{ x: new Date(2024, 5, 20), y:  5567.64 },
		// 		{ x: new Date(2024, 5, 28), y: 5556.75 },
		// 		{ x: new Date(2024, 6, 1), y:  5513.00 },
		// 		{ x: new Date(2024, 6, 3), y:   5576.25 },
		// 		{ x: new Date(2024, 6, 8), y:  5626.75 },
		// 		{ x: new Date(2024, 6, 11), y:   5657.25  },
		// 		{ x: new Date(2024, 6, 18), y:  5603.75  },
		// 		{ x: new Date(2024, 6, 24), y:  5514.00 },
		// 		{ x: new Date(2024, 6, 30), y:   5460.00 },
		// 		{ x: new Date(2024, 6, 31), y:  5560.00  },
		// 		{ x: new Date(2024, 7, 1), y:  5513.75 },
		// 		{ x: new Date(2024, 7, 2), y:  5398.00 },
		// 		{ x: new Date(2024, 7, 5), y:  5203.70 },
		// 		{ x: new Date(2024, 7, 6), y:  5298.50 }
	
	
	
		// 	]
		// },
		{
			type: "line",
			name: "VIX",
			color: "#f50505",
			axisYIndex: 2,
			axisYType: "secondary",
			showInLegend: true,
			lineThickness: 2,
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
				{ x: new Date(2024, 5, 12), y:  12.64 },
				{ x: new Date(2024, 5, 20), y: 14.48},
				{ x: new Date(2024, 5, 28), y:  14.48 },
				{ x: new Date(2024, 6, 1), y:   13.87 },
				{ x: new Date(2024, 6, 3), y:  13.18 },
				{ x: new Date(2024, 6, 8), y:  13.03  },
				{ x: new Date(2024, 6, 11), y:   12.98  },
				{ x: new Date(2024, 6, 18), y:  15.28 },
				{ x: new Date(2024, 6, 24), y:  16.08 },
				{ x: new Date(2024, 6, 30), y:  16.63 },
				{ x: new Date(2024, 6, 31), y:   15.73  },
				{ x: new Date(2024, 7, 1), y:  16.98  },
				{ x: new Date(2024, 7, 2), y:   19.33 },
				{ x: new Date(2024, 7, 5), y:   29.00  },
				{ x: new Date(2024, 7, 6), y:   25.03  },
				{ x: new Date(2024, 7, 13), y:   18.48  },
				{ x: new Date(2024, 7, 14), y:   16.68  },
				{ x: new Date(2024, 7, 15), y:   15.13  },
				{ x: new Date(2024, 7, 19), y:   15.33  },
				{ x: new Date(2024, 7, 21), y:   16.34  },
				{ x: new Date(2024, 7, 29), y:   15.78  },
				{ x: new Date(2024, 8, 3), y:   17.25  },
				{ x: new Date(2024, 8, 4), y:   18.76  },
				{ x: new Date(2024, 8, 5), y:   19.50  },
				{ x: new Date(2024, 8, 6), y:   20.89  },
				{ x: new Date(2024, 8, 9), y:   18.90  },
				{ x: new Date(2024, 8, 11), y: 19.62},
				{ x: new Date(2024, 8, 12), y: 17.45},
				{ x: new Date(2024, 8, 13), y: 16.40},
				{ x: new Date(2024, 8, 19), y: 16.60},
				{ x: new Date(2024, 9, 1), y: 20.30}

	
			]
		}]
	});
var chart1 = new CanvasJS.Chart("chartContainer1", {
	title:{
			text: "Performance (%) PIU33 vs S&P500",
			margin: 50,
			fontSize: 50,
			fontFamily: "tahoma",
			color: "black"
	},
	axisX:{
			interval: 2,
			intervalType: "month",
			labelFontSize: 20
	},
	axisY:[{
			title: "PIU33",
			lineColor: "#64a102",
			tickColor: "#64a102",
			labelFontColor: "#64a102",
			titleFontColor: "#64a102",
			titleFontSize: 30,
			labelFontSize: 30,
			interval: 5,
			includeZero: true,
			suffix: "",
			minimum: -10, // Imposta il valore minimo
			maximum: 50 // Imposta il valore massimo
	},
	{
			title: "SP500",
			lineColor: "#141414",
			tickColor: "#141414",
			labelFontColor: "#141414",
			titleFontColor: "#141414",
			titleFontSize: 30,
			labelFontSize: 30,
			interval: 5,
			includeZero: true,
			suffix: "",
			minimum: -10, // Imposta il valore minimo
			maximum: 50 // Imposta il valore massimo
	}],
	
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
			{ x: new Date(2023, 6, 31), y: 0 },
			{ x: new Date(2023, 7, 2), y: 0.52838},
			{ x: new Date(2023, 7, 8), y: 0.95853 },
			{ x: new Date(2023, 7, 16), y: 0.85787},
			{ x: new Date(2023, 7, 24), y:0.77890 },
			{ x: new Date(2023, 7, 28), y: 0.57890},
			{ x: new Date(2023, 7, 29), y: 1.27648},
			{ x: new Date(2023, 7, 30), y: 2.16134 },
			{ x: new Date(2023, 8, 7), y: 1.56628},
			{ x: new Date(2023, 8, 14), y: -0.81132 },
			{ x: new Date(2023, 8, 15), y:-0.08627},
			{ x: new Date(2023, 8, 19), y: 0.62403 },
			{ x: new Date(2023, 8, 21), y: 1.11065 },
			{ x: new Date(2023, 8, 22), y: 0.99957 },
			{ x: new Date(2023, 8, 26), y: 1.28781 },
			{ x: new Date(2023, 8, 27), y: 2.35192},
			{ x: new Date(2023, 8, 28), y: 2.76433},
			{ x: new Date(2023, 9, 2), y: 2.07823},
			{ x: new Date(2023, 9, 3), y: 2.60235},
			{ x: new Date(2023, 9, 6), y: 2.20457},
			{ x: new Date(2023, 9, 10), y: 2.48112},
			{ x: new Date(2023, 9, 13), y: 2.50870},
			{ x: new Date(2023, 9, 17), y: 2.11047 },
			{ x: new Date(2023, 9, 18), y: 2.68083 },
			{ x: new Date(2023, 9, 20), y: 3.39141},
			{ x: new Date(2023, 9, 26), y: 4.22935},
			{ x: new Date(2023, 10, 1), y: 3.35775},
			{ x: new Date(2023, 10, 2), y: 3.57857},
			{ x: new Date(2023, 10, 3), y: 4.46821},
			{ x: new Date(2023, 10, 7), y: 3.98336 },
			{ x: new Date(2023, 10, 13), y: 3.58682 },
			{ x: new Date(2023, 10, 14), y: 5.19160},
			{ x: new Date(2023, 10, 16), y: 5.27550},
			{ x: new Date(2023, 10, 22), y: 5.07445},
			{ x: new Date(2023, 10, 30), y: 4.51545},
			{ x: new Date(2023, 11, 11), y: 4.21075},
			{ x: new Date(2023, 11, 14), y: 5.46985},
			{ x: new Date(2023, 11, 19), y: 6.22478},
			{ x: new Date(2023, 11, 21), y: 7.04508},
			{ x: new Date(2023, 11, 22), y: 8.26913},
			{ x: new Date(2024, 0, 3), y:  8.61818},
			{ x: new Date(2024, 0, 10), y:  7.72688 },
			{ x: new Date(2024, 0, 17), y:  7.68312},
			{ x: new Date(2024, 0, 18), y: 7.92136},
			{ x: new Date(2024, 0, 19), y: 8.03938},
			{ x: new Date(2024, 0, 22), y: 8.25012},
			{ x: new Date(2024, 0, 23), y: 7.54791},
			{ x: new Date(2024, 0, 24), y: 8.92071},
			{ x: new Date(2024, 0, 30), y: 8.71961},
			{ x: new Date(2024, 0, 31), y: 9.42410},
			{ x: new Date(2024, 1, 2), y:  10.02940 },
			{ x: new Date(2024, 1, 8), y:  9.02720 },
			{ x: new Date(2024, 1, 12), y: 10.18110},
			{ x: new Date(2024, 1, 13), y: 11.26640},
			{ x: new Date(2024, 1, 15), y: 11.85486},
			{ x: new Date(2024, 1, 20), y: 11.47104},
			{ x: new Date(2024, 1, 22), y: 13.45524},
			{ x: new Date(2024, 1, 23), y: 14.12414},
			{ x: new Date(2024, 2, 4), y: 13.66782},
			{ x: new Date(2024, 2, 5), y:  14.42456},
			{ x: new Date(2024, 2, 6), y: 13.04824},
			{ x: new Date(2024, 2, 8), y: 14.84376},
			{ x: new Date(2024, 2, 11), y: 16.07134},
			{ x: new Date(2024, 2, 12), y: 15.88108},
			{ x: new Date(2024, 2, 15), y: 15.45954},
			{ x: new Date(2024, 2, 19), y: 15.35778},
			{ x: new Date(2024, 2, 21), y: 16.63492},
			{ x: new Date(2024, 3, 2), y:  15.17544},
			{ x: new Date(2024, 3, 4), y: 15.50302},
			{ x: new Date(2024, 3, 5), y: 17.28832},
			{ x: new Date(2024, 3, 11), y: 17.31428},
			{ x: new Date(2024, 3, 12), y: 17.92374},
			{ x: new Date(2024, 3, 16), y: 19.26088},
			{ x: new Date(2024, 3, 22), y: 16.96846},
			{ x: new Date(2024, 3, 23), y: 17.52810},
			{ x: new Date(2024, 3, 25), y: 18.10568},
			{ x: new Date(2024, 3, 26), y:  19.12988},
			{ x: new Date(2024, 4, 1), y:  18.28724},
			{ x: new Date(2024, 4, 3), y:  17.30960},
			{ x: new Date(2024, 4, 6), y:  17.30762},
			{ x: new Date(2024, 4, 7), y:  18.21630},
			{ x: new Date(2024, 4, 10), y: 17.41248},
			{ x: new Date(2024, 4, 15), y:  16.06572},
			{ x: new Date(2024, 4, 16), y:  16.18587 },
			{ x: new Date(2024, 4, 31), y:  14.77801},
			{ x: new Date(2024, 5, 3), y:   14.55956},
			{ x: new Date(2024, 5, 5), y: 14.65927},
			{ x: new Date(2024, 5, 6), y:  14.75839},
			{ x: new Date(2024, 5, 12), y: 15.36751},
			{ x: new Date(2024, 5, 20), y: 15.30405},
			{ x: new Date(2024, 5, 28), y: 12.15178},
			{ x: new Date(2024, 6, 1), y:  11.58105},
			{ x: new Date(2024, 6, 3), y:  12.15113 },
			{ x: new Date(2024, 6, 8), y: 12.73665},
			{ x: new Date(2024, 6, 11), y: 13.44967},
			{ x: new Date(2024, 6, 18), y:  16.14997},
			{ x: new Date(2024, 6, 24), y: 16.74992},
			{ x: new Date(2024, 6, 30), y: 17.55662},
			{ x: new Date(2024, 6, 31), y: 20.22502},
			{ x: new Date(2024, 7, 1), y:  22.57973},
			{ x: new Date(2024, 7, 2), y: 29.96107 },
			{ x: new Date(2024, 7, 5), y: 38.74411 },
			{ x: new Date(2024, 7, 6), y: 42.41969},
			{ x: new Date(2024, 7, 13), y: 34.07840},
			{ x: new Date(2024, 7, 14), y: 32.30434},
			{ x: new Date(2024, 7, 15), y: 33.10318},
			{ x: new Date(2024, 7, 19), y: 32.50592},
			{ x: new Date(2024, 7, 21), y: 37.05640},
			{ x: new Date(2024, 7, 29), y: 33.09559},
			{ x: new Date(2024, 8, 3), y: 34.51178},
			{ x: new Date(2024, 8, 4), y: 34.64420},
			{ x: new Date(2024, 8, 5), y: 35.02573},
			{ x: new Date(2024, 8, 6), y: 35.74329},
			{ x: new Date(2024, 8, 9), y: 34.58168},
			{ x: new Date(2024, 8, 11), y: 32.98522},
			{ x: new Date(2024, 8, 12), y: 38.06557},
			{ x: new Date(2024, 8, 13), y: 38.89621},
			{ x: new Date(2024, 8, 19), y: 39.81287},
			{ x: new Date(2024, 8, 27), y: 39.14},
			{ x: new Date(2024, 9, 1), y: 42.39},



			

    ]
	},
	{
		type: "line",
		name: "SP500",
		color: "#141414",
		axisYIndex:1,
		showInLegend: true,
    lineThickness: 5,
		dataPoints: [
			{ x: new Date(2023, 6, 31), y: 0.0000 },
			{ x: new Date(2023, 7, 2), y: 0.0000 },
			{ x: new Date(2023, 7, 8), y: -1.2456  },
			{ x: new Date(2023, 7, 16), y: -2.0286 },
			{ x: new Date(2023, 7, 24), y: -3.0273 },
			{ x: new Date(2023, 7, 28), y: -2.5295},
			{ x: new Date(2023, 7, 29), y: -1.5078 },
			{ x: new Date(2023, 7, 30), y: -0.4522  },
			{ x: new Date(2023, 8, 7), y: -2.1016 },
			{ x: new Date(2023, 8, 14), y: 0.0935  },
			{ x: new Date(2023, 8, 15), y: -0.7621   },
			{ x: new Date(2023, 8, 19), y: -1.6419 },
			{ x: new Date(2023, 8, 21), y: -3.2090 },
			{ x: new Date(2023, 8, 22), y: -3.4251 },
			{ x: new Date(2023, 8, 26), y: -4.5070 },
			{ x: new Date(2023, 8, 27), y: -5.3798 },
			{ x: new Date(2023, 8, 28), y: -4.4207  },
			{ x: new Date(2023, 9, 2), y: -5.1189},
			{ x: new Date(2023, 9, 3), y: -6.3072},
			{ x: new Date(2023, 9, 6), y: -4.9685},
			{ x: new Date(2023, 9, 10), y: -3.2317 },
			{ x: new Date(2023, 9, 13), y: -3.9274},
			{ x: new Date(2023, 9, 17), y: -2.8404 },
			{ x: new Date(2023, 9, 18), y: -3.8610},
			{ x: new Date(2023, 9, 20), y: -6.3483 },
			{ x: new Date(2023, 9, 26), y: -8.4064 },
			{ x: new Date(2023, 10, 1), y: -7.3262},
			{ x: new Date(2023, 10, 2), y: -5.1479},
			{ x: new Date(2023, 10, 3), y: -3.6588},
			{ x: new Date(2023, 10, 7), y: -3.3113 },
			{ x: new Date(2023, 10, 13), y: -2.7272 },
			{ x: new Date(2023, 10, 14), y: -0.5683},
			{ x: new Date(2023, 10, 16), y: -0.8103},
			{ x: new Date(2023, 10, 22), y: 0.6034 },
			{ x: new Date(2023, 10, 30), y: 0.5706},
			{ x: new Date(2023, 11, 11), y: 1.4257},
			{ x: new Date(2023, 11, 14), y: 5.0162 },
			{ x: new Date(2023, 11, 19), y: 5.7617 },
			{ x: new Date(2023, 11, 21), y:  4.7280 },
			{ x: new Date(2023, 11, 22), y:  5.6629 },
			{ x: new Date(2024, 0, 3), y:   4.5599 },
			{ x: new Date(2024, 0, 10), y:   5.4308 },
			{ x: new Date(2024, 0, 17), y:   4.9010 },
			{ x: new Date(2024, 0, 18), y:  5.3245   },
			{ x: new Date(2024, 0, 19), y:  6.1246 },
			{ x: new Date(2024, 0, 22), y: 7.1440},
			{ x: new Date(2024, 0, 23), y:  7.0569 },
			{ x: new Date(2024, 0, 24), y:  8.0669 },
			{ x: new Date(2024, 0, 30), y:  8.5024 },
			{ x: new Date(2024, 0, 31), y:  7.6855 },
			{ x: new Date(2024, 1, 2), y:   8.7094  },
			{ x: new Date(2024, 1, 8), y:    9.8277 },
			{ x: new Date(2024, 1, 12), y:   10.5977  },
			{ x: new Date(2024, 1, 13), y:   9.1773 },
			{ x: new Date(2024, 1, 15), y:   10.0469 },
			{ x: new Date(2024, 1, 20), y:   9.1170  },
			{ x: new Date(2024, 1, 22), y:   10.9582},
			{ x: new Date(2024, 1, 23), y:  12.8368 },
			{ x: new Date(2024, 2, 4), y:  13.5024 },
			{ x: new Date(2024, 2, 5), y:   12.6159 },
			{ x: new Date(2024, 2, 6), y:  13.2926 },
			{ x: new Date(2024, 2, 8), y:  14.4516 },
			{ x: new Date(2024, 2, 11), y:  13.0746 },
			{ x: new Date(2024, 2, 12), y:  14.0412 },
			{ x: new Date(2024, 2, 15), y:  13.1190 },
			{ x: new Date(2024, 2, 19), y:  13.9264 },
			{ x: new Date(2024, 2, 21), y:  15.7384 },
			{ x: new Date(2024, 3, 2), y:   14.2514  },
			{ x: new Date(2024, 3, 4), y:   15.3805 },
			{ x: new Date(2024, 3, 5), y:   14.3849 },
			{ x: new Date(2024, 3, 11), y:  13.3600 },
			{ x: new Date(2024, 3, 12), y:  13.2926 },
			{ x: new Date(2024, 3, 16), y:  11.3274 },
			{ x: new Date(2024, 3, 22), y:  9.8027 },
			{ x: new Date(2024, 3, 23), y:  11.6315 },
			{ x: new Date(2024, 3, 25), y:  10.3102},
			{ x: new Date(2024, 3, 26), y:  12.2467},
			{ x: new Date(2024, 4, 1), y:  10.7065},
			{ x: new Date(2024, 4, 3), y:   12.2126 },
			{ x: new Date(2024, 4, 6), y:   13.1818 },
			{ x: new Date(2024, 4, 7), y:  13.9121},
			{ x: new Date(2024, 4, 10), y:  14.5134 },
			{ x: new Date(2024, 4, 15), y:  15.5172 },
			{ x: new Date(2024, 4, 16), y:  16.2821  },
			{ x: new Date(2024, 4, 31), y:  14.0795 },
			{ x: new Date(2024, 5, 3), y:   15.0355  },
			{ x: new Date(2024, 5, 5), y:   15.9450 },
			{ x: new Date(2024, 5, 6), y:  16.5809 },
			{ x: new Date(2024, 5, 12), y:  18.0982 },
			{ x: new Date(2024, 5, 20), y:  20.3164 },
			{ x: new Date(2024, 5, 28), y: 20.1206 },
			{ x: new Date(2024, 6, 1), y:  19.3301 },
			{ x: new Date(2024, 6, 3), y:   20.4709 },
			{ x: new Date(2024, 6, 8), y:  21.3724},
			{ x: new Date(2024, 6, 11), y:  21.9130  },
			{ x: new Date(2024, 6, 18), y: 20.9628 },
			{ x: new Date(2024, 6, 24), y: 19.3483},
			{ x: new Date(2024, 6, 30), y:  18.3641 },
			{ x: new Date(2024, 6, 31), y:  20.1790  },
			{ x: new Date(2024, 7, 1), y:  19.3437 },
			{ x: new Date(2024, 7, 2), y:  17.2221 },
			{ x: new Date(2024, 7, 5), y:  13.5562},
			{ x: new Date(2024, 7, 6), y:  15.3616 },
			{ x: new Date(2024, 7, 13), y:  17.4349 },
			{ x: new Date(2024, 7, 14), y:  18.3641 },
			{ x: new Date(2024, 7, 15), y:  20.0531 },
			{ x: new Date(2024, 7, 19), y:  20.9494 },
			{ x: new Date(2024, 7, 21), y:  21.4799 },
			{ x: new Date(2024, 7, 29), y:  21.8158 },
			{ x: new Date(2024, 8, 3), y:  20.4395 },
			{ x: new Date(2024, 8, 4), y:  19.8187 },
			{ x: new Date(2024, 8, 5), y:  19.0304 },
			{ x: new Date(2024, 8, 6), y:  17.8131 },
			{ x: new Date(2024, 8, 9), y:  18.7662 },
			{ x: new Date(2024, 8, 11), y: 17.8868 },
			{ x: new Date(2024, 8, 12), y: 21.3324},
			{ x: new Date(2024, 8, 13), y: 22.6132},
			{ x: new Date(2024, 8, 19), y: 23.8518},
			{ x: new Date(2024, 8, 27), y: 24.68},
			{ x: new Date(2024, 9, 1), y: 23.55}






    ]
	}],
});
chart.render();
chart1.render();

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}

}




