var httpc1 = new XMLHttpRequest(); // simplified for clarity
var url = "Test_Server.php";
httpc1.open("GET", url + "?key=Ein_und_Abwanderung", true);
httpc1.setRequestHeader("Content-Type", "application/json");

/*
function createChart() {
    // erstellt das Diagramm (ohne Daten)
}

function setData(data) {
    FusionCharts.setChartData(data);
}
*/

function createChart(data) {
    var labels = [];
    var values1 = [];
    var values2 = [];
    var values3 = [];
    for (var i = 0; i < data.length; i++) {
        labels[i] = {"label": data[i].label};
        values1[i] = {"value": data[i].einwanderung};
        values2[i] = {"value": data[i].abwanderung};
        values3[i] = {"value": data[i].nettoMigration};
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
    return data;
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


