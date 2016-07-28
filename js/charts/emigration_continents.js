//var httpc = new XMLHttpRequest(); // simplified for clarity
//var url = "Test_Server.php";
//httpc.open("GET", url + "?key=Irak_Auswanderung_Kontinente", true);
//httpc.setRequestHeader("Content-Type", "application/json");

var data = 
[{"JAHR":"1990","Afrika_prozentual":"0.50","Asien_prozentual":"90.16","Europa_prozentual":"5.81","LatinAmerica_prozentual":"0.02","Northern_America_prozentual":"3.45","Oceanien_prozentual":"0.06"}, {"JAHR":"1995","Afrika_prozentual":"2.81","Asien_prozentual":"79.05","Europa_prozentual":"11.69","LatinAmerica_prozentual":"0.02","Northern_America_prozentual":"6.30","Oceanien_prozentual":"0.14"}, {"JAHR":"2000","Afrika_prozentual":"5.77","Asien_prozentual":"62.62","Europa_prozentual":"18.88","LatinAmerica_prozentual":"0.03","Northern_America_prozentual":"10.01","Oceanien_prozentual":"2.69"}, {"JAHR":"2005","Afrika_prozentual":"5.21","Asien_prozentual":"61.25","Europa_prozentual":"21.15","LatinAmerica_prozentual":"0.04","Northern_America_prozentual":"9.45","Oceanien_prozentual":"2.91"}, {"JAHR":"2010","Afrika_prozentual":"3.38","Asien_prozentual":"71.03","Europa_prozentual":"16.84","LatinAmerica_prozentual":"0.03","Northern_America_prozentual":"6.48","Oceanien_prozentual":"2.25"}, {"JAHR":"2015","Afrika_prozentual":"6.53","Asien_prozentual":"41.33","Europa_prozentual":"31.84","LatinAmerica_prozentual":"0.06","Northern_America_prozentual":"15.60","Oceanien_prozentual":"4.63"}];



function createChart(data) {
    var labels = [];
    var values1 = [];
    var values2 = [];
    var values3 = [];
    var values4 = [];
    var values5 = [];
    var values6 = [];
    for (var i = 0; i < data.length; i++) {
        labels[i] = {"label": data[i].JAHR};
        values1[i] = {"value": data[i].Afrika_prozentual};
        values2[i] = {"value": data[i].Asien_prozentual};
        values3[i] = {"value": data[i].Europa_prozentual};
        values4[i] = {"value": data[i].LatinAmerica_prozentual};
        values5[i] = {"value": data[i].Northern_America_prozentual};
        values6[i] = {"value": data[i].Oceanien_prozentual};
    }
    
    var vstrChart = new FusionCharts({
        type: 'msline',
        renderAt: 'Emigration_Continents',
        height: '550',
        width: '900',
        dataFormat: 'json',
        dataSource: {
            "chart": {
            
            "caption": "Emigration from Iraq by continent of destination",
            "subCaption": "1990 to 2015",
            "xAxisName": "Year",
            "yAxisName": "Percentual amount of emigrants",
            "numberSuffix": "%",
            "theme": "fint",
            "showValues": "0",
            "adjustDiv": "1",
            "yAxisMaxvalue": "100",
            "yAxisMinValue": "0",
            "labelFontSize": "14",
            "labelFontBold": "1",
            "numDivLines": "9",
            "divLineDashed": "0",
            "anchorSides": "0",
            "anchorRadius": "8",
            "anchorBorderThickness": "2",
            "anchorBgAlpha": "50",
            "bgcolor": "#ffffff",
            "showBorder": "0",
            "showShadow": "0",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "labelpadding": "5",
            "showAxisLines": "0",
            "captionFont": "Georgia",
            "subcaptionFont": "Georgia",
            "lineThickness": "0",
            
            "chartTopMargin": "10",
            "captionFontSize": "15",
            "captionPadding": "30"

            },   
            
            "categories": [
                {
                    "category": labels
                }
            ],            
            "dataset": [
                {
                    "seriesname": "Asia",
                    "data": values2
                },
                {
                    "seriesname": "Europe",
                    "data": values3
                },
                {
                    "seriesname": "USA",
                    "data": values5
                },
                {
                    "seriesname": "Africa",
                    "data": values1
                }, 
                {
                    "seriesname": "Oceania",
                    "data": values6
                },
                {
                    "seriesname": "Latin America",
                    "data": values4
                }
            ]
        }
    }).render();
 return data;
} 



//function sendRequest(callback) {
//    httpc.callback = callback;
//    httpc.send();
    
//    httpc.onloadend = function() {
//        var data = JSON.parse(httpc.responseText);
//        httpc.callback = callback(data.data);
//    }
    
//}
//sendRequest(createChart);

