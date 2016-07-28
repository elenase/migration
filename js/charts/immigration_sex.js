//var httpc2 = new XMLHttpRequest(); // simplified for clarity
//var url = "Test_Server.php";
//httpc2.open("GET", url + "?key=Einwanderung_geschlechter", true);
//httpc2.setRequestHeader("Content-Type", "application/json");


//var data =
//[{"Einwanderung_Frauen_gesamt":"445791","Einwanderung_Maenner_gesamt":"652017"}];



/*function createChart(data) {
    var einwanderungMaenner = [];
    var einwanderungFrauen = [];

    for (var i = 0; i < data.length; i++) {
        einwanderungMaenner[i] = {"label": data[i].Einwanderung_Maenner_gesamt};
        einwanderungFrauen[i] = {"value": data[i].Einwanderung_Frauen_gesamt};
    }
    */
    
    var Migration2Chart = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'einwanderung_geschlechter',
        width: '350',
        height: '300',
        dataFormat: 'json',
        dataSource: {            
            "chart": {
                "caption": "Immigration",
                "subcaption": "Total 1990-2015:<br>1 097 808 persons",
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
                "legendBorderAlpha": "0",
                "legendBorderColor": "#7A7A7A",
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
                    "value": 652017
                    //data[0].einwanderungMaenner
                }, 
                {
                    "label": "Woman",
                    "value": 445791
                    //data[0].einwanderungFrauen
                } 
            ]
        }
    }).render();
 return data;

//}


//function sendRequest(callback) {
 //   httpc2.callback = callback;
 //   httpc2.send();
    
 //   httpc2.onloadend = function() {
 //       var data = JSON.parse(httpc2.responseText);
 //       httpc2.callback = callback(data.data);
 //   }
    
//}
//sendRequest(createChart);
