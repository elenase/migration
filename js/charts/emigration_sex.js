/*
var httpc33 = new XMLHttpRequest(); // simplified for clarity
var url = "Test_Server.php";
httpc33.open("GET", url + "?key=Abwanderung_geschlechter", true);
httpc33.setRequestHeader("Content-Type", "application/json");





function createChart(data) {
*/

    var Migration2Chart = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'abwanderung_geschlechter',
        width: '350',
        height: '300',
        dataFormat: 'json',
        dataSource: {            
            "chart": {
                "caption": "Emigration",
                "subcaption": "Total 1990-2015:<br>9 489 305 persons: ~ 28% of total population",
                "subcaption-color": "white",
                "subCaptionFontSize":"11",
                "captionFont": "Georgia",
                "captionFontSize": "16",
                "subCaptionFont": "Georgia",
                "captionFontColor": "white",
                "subCaptionFontColor": "white",
                
                
                "paletteColors": "#4d6884,#A87979",
                "bgColor": "#7A7A7A",
                "bgAlpha": "100",
                "showBorder": "0",
                "labelFontSize": "12",
                "use3DLighting": "0",
                "showShadow": "0",
                "enableSmartLabels": "0",
                "startingAngle": "310",
                "showLabels": "1",
                "showPercentValues": "1",
                "showLegend": "0",
                "legendShadow": "0",
                "legendBorderAlpha": "100",
                "defaultCenterLabel": "",
                "centerLabel": "",
                "centerLabelBold": "1",
                "showTooltip": "0",
                "decimals": "0",
                "doughnutRadius": "200",
                "labelDistance": "2",
                "labelFont": "Georgia",
                "labelFontColor": "#ffffff"
            },
            "data": [
                {
                    "label": "Men",
                    "value": 5246120
                    //data[0].abwanderungMaenner
                }, 
                {
                    "label": "Woman",
                    "value": 4243185
                    //data[0].abwanderungFrauen
                } 
            ]
        }
    }).render();
/*
return data;

}


function sendRequest(callback) {
    httpc33.callback = callback;
    httpc33.send();
    
    httpc33.onloadend = function() {
        var data = JSON.parse(httpc33.responseText);
        httpc33.callback = callback(data.data);
    }
    
}
sendRequest(createChart);
*/
