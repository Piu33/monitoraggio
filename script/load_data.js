async function caricaDati() {
  //const response = await fetch('files/table.json');
  //const dati = await response.json();
  const response_vix = await fetch('files/vix.json');
  const dati_vix = await response_vix.json();
  const response_sp = await fetch('files/sp.json');
  const dati_sp = await response_sp.json();

  
  // let table = "<table><thead><tr>";
  // for (let key in dati[0]) {
  //     table += `<th>${key}</th>`;
  // }
  // table += "</tr></thead>";
  
  // dati.forEach(row => {
  //     table += "<tr>";
  //     for (let key in row) {
  //       if (row[key] == "BOT" || row[key] == "SOLD"){
  //         if (row[key] == "BOT"){
  //           table += `<td style="color: blue">${row[key]}</td>`
  //         }
  //         if (row[key] == "SOLD"){
  //           table += `<td style="color:red">${row[key]}</td>`
  //         }
  //       }
  //       else {
  //         table += `<td>${row[key]}</td>`;
  //       }
  //     }
  //     table += "</tr>";
  // });
  // table += "</table>";
  // document.getElementById("tabella").innerHTML = table;

  const vixPoints = dati_vix.map(d => ({
    x: new Date(d.DATA.split('.').reverse().join('-')), // Converte la data in formato Date
    y: d.VIX 
  }));
  const piu33Points = dati_vix.map(d => ({
    x: new Date(d.DATA.split('.').reverse().join('-')), // Converte la data in formato Date
    y: d.PIU33 
  }));

  const percent33Points  = dati_sp.map(d => ({
    x: new Date(d.DATA.split('.').reverse().join('-')), // Converte la data in formato Date
    y: d.PIU33 
  }));
  const spPoints = dati_sp.map(d => ({
    x: new Date(d.DATA.split('.').reverse().join('-')), // Converte la data in formato Date
    y: d.SP500 
  }));

  var dataRiferimento = new Date(2025, 1, 7); // 15 Febbraio 2024


  var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Monitoraggio PIU33 (%) e correlazione VIX dal 31.07.23",
			margin: 50,
			fontSize:50,
			fontFamily: "tahoma",
			color: "black"
			
		},
		axisX: {
      interval: 2,
      intervalType: "month",
      labelFontSize: 20,
      stripLines: [{
          value: dataRiferimento,
          color: "lightblue",
          thickness: 2
      }]
  },
		axisY:[{
			title: "PIU33",
			lineColor: "#64a102",
			tickColor: "#64a102",
			labelFontColor: "#64a102",
			titleFontColor: "#64a102",
			titleFontSize:30,
			labelFontSize:30,
			interval:5,
			includeZero: true,
			suffix: ""
		},
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
			lineThickness: 2,
			dataPoints: piu33Points,
      
		},
		{
			type: "line",
			name: "VIX",
			color: "#f50505",
			axisYIndex: 1,
			axisYType: "secondary",
			showInLegend: true,
			lineThickness: 1,
			dataPoints: vixPoints
		}]
	});
  // Trova l'ultimo valore X di piu33Points
  var lastDate = piu33Points[0].x;
  console.log(lastDate)

  // Aggiunge 5 giorni
  var extendedDate = new Date(lastDate);
  extendedDate.setDate(extendedDate.getDate() + 10);

  // Setta l'asse X massimo
  chart.options.axisX.maximum = extendedDate;

  // Trova i massimi reali dei tuoi punti
  var maxY1 = Math.max(...piu33Points.map(p => p.y));
  var maxY2 = Math.max(...vixPoints.map(p => p.y));

  // Calcola margine proporzionale
  var marginY1 = maxY1 * 0.1;
  var marginY2 = maxY2 * 0.1;

  // Imposta i nuovi massimi asseY e asseY2
  chart.options.axisY[0].includeZero = false;    
  chart.options.axisY[0].maximum = maxY1 + marginY1;
  chart.options.axisY2.includeZero = false;     
  chart.options.axisY2.maximum = maxY2 + marginY2;

  chart.render();


  var chart1 = new CanvasJS.Chart("chartContainer1", {
    title:{
        text: "Performance (%) PIU33 vs S&P500 dal 31.07.23",
        margin: 50,
        fontSize: 50,
        fontFamily: "tahoma",
        color: "black"
    },
    axisX:{
        interval: 2,
        intervalType: "month",
        labelFontSize: 20,
        stripLines: [{
          value: dataRiferimento,
          color: "lightblue",
          thickness: 2
      }]
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
        maximum: 80 // Imposta il valore massimo
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
        maximum: 80 // Imposta il valore massimo
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
      lineThickness: 2,
      dataPoints: percent33Points 
      },
    {
      type: "line",
      name: "SP500",
      color: "#141414",
      axisYIndex:1,
      showInLegend: true,
      lineThickness: 2,
      dataPoints: spPoints
    }],
  });
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

window.onload = caricaDati;