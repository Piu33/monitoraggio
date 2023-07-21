// function norm (array){
//   var i;
//   var max = Number.MIN_VALUE;
//   var min = Number.MAX_VALUE;
//   for (i = 0; i < array.length; i++) {
//     if(array[i]>max) {
//         max = array[i];
//     }
//   }

//   for (i = 0; i < array.length; i++){
//     if(array[i]<min) {
//         min = array[i];
//     }
//   }

//   // if ((Math.abs(max) > Math.abs(min) )&& (max || min < 0 )){
//   //   min = max * - 1
//   // }else{
//   //   max = min * - 1
//   // }

//   for (i = 0; i < array.length; i++) {
//     var norm = (2 * (array[i] - min) / (max - min))-1;
//     array[i] = norm;
//   }
//   return array;
// }
// // -2 ((x - min) / max - min)  -1

// Math.abs()



// window.onload = function(){

// var speedCanvas = document.getElementById("speedChart");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;

// var data33 = [-145, -10688, -13442, -25537, -10002, 3679, -6762, 454, 4927, 5649, 2621, -5982, -89, -6906]
// var datasp = [ 4425.50, 4411.75,4396.00,4421.25,4478.75,4434.00,4472.25,4432.75,4507.75,4533.50,4551.75,4576.25,4604.50,4579.00 ]

// var dataFirst = {
//     label: "PIU33 Performance",
//     data: data33,
//     lineTension: 0,
//     fill: false,
//     borderColor: 'red',
//     yAxisID: 'y-axis-1',
//   };

// var dataSecond = {
//     label: "S&P500",
//     data: datasp,
//     lineTension: 0,
//     fill: false,
//     borderColor: 'blue',
//     yAxisID: 'y-axis-2',
//   };

// var speedData = {
//   labels: ["20.06.23","22.06.23","23.06.23","28.06.23 ","30.06.23","06.07.23","07.07.23","10.07.23 ","12.07.23 ","13.07.23","17.07.23","18.07.23","19.07.23","20.07.23"],
//   datasets: [dataFirst, dataSecond]
// };

// var chartOptions = {
//   legend: {
//     display: true,
//     position: 'top',
//     labels: {
//       boxWidth: 80,
//       fontColor: 'black'
//     }
//   },
//   yAxes: [{
//     id: 'y-axis-1',                             
//     type: 'linear',
//     position: 'left',
//   }, {
//     id: 'y-axis-2',                             
//     type: 'linear',
//     position: 'right',
//   }]
// };

// var lineChart = new Chart(speedCanvas, {
//   type: 'line',
//   data: speedData,
//   options: chartOptions
// });
//}



window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
	title:{
		text: "Monitoraggio PIU33 vs S&P500 and VIX",
    margin: 100
	},
	axisY:[{
		title: "PIU33",
		lineColor: "#C24642",
		tickColor: "#C24642",
		labelFontColor: "#C24642",
		titleFontColor: "#C24642",
		includeZero: true,
		suffix: ""
	},
	{
		title: "S&P500",
		lineColor: "#369EAD",
		tickColor: "#369EAD",
		labelFontColor: "#369EAD",
		titleFontColor: "#369EAD",
		includeZero: false,
		suffix: ""
	}],
	axisY2: {
		title: "VIX",
		lineColor: "#7F6084",
		tickColor: "#7F6084",
		labelFontColor: "#7F6084",
		titleFontColor: "#7F6084",
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
		color: "#C24642",
		showInLegend: true,
		axisYIndex: 0,
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
		type: "line",
		name: "S&P500",
		color: "#369EAD",
		axisYIndex: 1,
		showInLegend: true,
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
		type: "line",
		name: "VIX",
		color: "#7F6084",
    axisYIndex: 2,
		axisYType: "secondary",
		showInLegend: true,
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



