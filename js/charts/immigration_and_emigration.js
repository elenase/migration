/*
var httpc1 = new XMLHttpRequest(); // simplified for clarity
var url = "Test_Server.php";
httpc1.open("GET", url + "?key=Ein_und_Abwanderung", true);
httpc1.setRequestHeader("Content-Type", "application/json");


function createChart() {
    // erstellt das Diagramm (ohne Daten)
}

function setData(data) {
    FusionCharts.setChartData(data);
}
*/


var data =
[{"Year":"1990","Total_Einwanderung":"83638","Total_Abwanderung":"-1501477","Netto_Migration":"-1417839"}, {"Year":"1995","Total_Einwanderung":"199460","Total_Abwanderung":"-1310112","Netto_Migration":"-1110652"}, {"Year":"2000","Total_Einwanderung":"210525","Total_Abwanderung":"-1161698","Netto_Migration":"-951173"}, {"Year":"2005","Total_Einwanderung":"132915","Total_Abwanderung":"-1474570","Netto_Migration":"-1341655"}, {"Year":"2010","Total_Einwanderung":"117389","Total_Abwanderung":"-2561482","Netto_Migration":"-2444093"}, {"Year":"2015","Total_Einwanderung":"353881","Total_Abwanderung":"-1479966","Netto_Migration":"-1126085"}];



function createChart(data) {
    var labels = [];
    var values1 = [];
    var values2 = [];
    var values3 = [];
    for (var i = 0; i < data.length; i++) {
        labels[i] = {"label": data[i].Year};
        values1[i] = {"value": data[i].Total_Einwanderung};
        values2[i] = {"value": data[i].Total_Abwanderung};
        values3[i] = {"value": data[i].Netto_Migration};
    }
    
    var Migration1Chart = new FusionCharts({
        type: 'stackedcolumn2dline',
        renderAt: 'Ein_und_Abwanderung',
        height: '420',
        width: '900',
        dataFormat: 'json',
        dataSource: {            
            "chart": 
            {
            "caption": "Immigration, emigration and net migration Iraq 1990 - 2015",
            "captionFont": "Georgia",
            "captionFontSize": "20",
            "yAxisName": "Number of migrants",
            "yAxisNameFontSize": "14",
            "yAxisNameFont": "Georgia",
            "yAxisMaxValue": "250000",
            "labelFontSize": "12",
            "labelFontBold": "1",
            "numDivLines": "12",
            "adjustDiv": "1",
            "divlineColor": "#999999",
            "divLineDashed": "0",
            "formatNumber": "1",
            "formatNumberScale": "0",
            "thousandSeparator": " ",
            "paletteColors": "#9BCD9B,#CD5C5C,#EEB422",
            "bgColor": "#ffffff",
            "borderAlpha": "0",               
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "0",
            "drawAnchors": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "legendBgAlpha": "0",
            "showValues": "0",
            "showXAxisLine": "1",
            "xAxisLineColor": "#999999",
            "divLineColor": "#999999",               
            "showAlternateHGridColor": "0",
            "subcaptionFontBold": "0",
            "subcaptionFontSize": "0",
            "showHoverEffect":"0"   
            },
            
            "categories": [
                {
                    "category": labels
                }
            ],
            "dataset": [
                {
                    "seriesname": "Immigration",
                    "data": values1
                },
                {
                    "seriesname": "Emigration",
                    "data": values2
                },
                {
                    "seriesname": "Net migration",
                    "renderAs": "line",
                    "showValues": "0",
                    "data": values3
                }
            ]
        }
    }).render();
/*    return data;
} 



function sendRequest(callback) {
    httpc1.callback = callback;
    httpc1.send();
    
    httpc1.onloadend = function() {
        var data = JSON.parse(httpc1.responseText);
        httpc1.callback = callback(data.data);
    }
    
}
sendRequest(createChart);


