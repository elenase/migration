var httpc17 = new XMLHttpRequest(); // simplified for clarity
var url = "Test_Server.php";
httpc17.open("GET", url + "?key=Todesfaelle", true);
httpc17.setRequestHeader("Content-Type", "application/json");

/*
function createChart() {
    // erstellt das Diagramm (ohne Daten)
}

function setData(data) {
    FusionCharts.setChartData(data);
}
*/

function createChart(data) {
    
    var monate = [];
    var tode = [];
    
    for (var i = 0; i < data.length; i++) {  
                
        monate[i] = {"label": data[i].monate};
        tode[i] = {"value": data[i].tode};
        
    }


var Migration1Chart = new FusionCharts({
        type: 'scrollcolumn2d',
        renderAt: 'todesfaelle_gesamt',
        height: '300',
        width: '1024',
        dataFormat: 'json',
        dataSource: {            
            "chart": 
            {
            "caption": "Number of civilian fatalities by war actions from January 2003 to May 2016 in Iraq<br>on monthly basis",
            "captionFontSize": "20",
            "captionPadding": "30",
            "captionFont": "Georgia",
            "yAxisName": "",
            "yAxisNameFontSize": "14",
            "yAxisNameFont": "Arial",
            "yAxisMaxValue": "4500",
            "labelFontSize": "14",
            "labelFontBold": "0",
            "numDivLines": "5",
            "adjustDiv": "1",
            "maxColWidth": "20",
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
            "periodlength": "12",
            "periodcolor": "#cccccc",
            "periodalpha": "50",
            "xAxisLineColor": "#999999",
            "divLineColor": "#999999",               
            "showAlternateHGridColor": "0",
            "subcaptionFontBold": "0",
            "subcaptionFontSize": "0",
            "showHoverEffect":"1",   
            "labelStep":"5",
            "labelDisplay":'WRAP',
            
                "scrollShowButtons" : "1",
                "scrollColor" : "#999999",
                "scrollHeight" : "30",
                "scrollPadding" : "1",
                "numVisiblePlot": "50",
                "theme" : "fint"
            },
            
            "categories": [
                {"category": monate}

            ],
            "dataset": [
                
                {"data": tode}

            ]
        
        
        
                },
        
        
        events: {
                //dataPlotRollOver event is raised whenever you hover over a data plot (column, anchor of line or area, pie etc.)
               "chartclick" : function(evtObj, argObj){
                var indctrDiv = document.getElementById("indicatorDiv");
                    label = argObj.categoriesLabel,
                    plotvalue = argObj.datasetValue,
                    value = evtObj.sender.formatNumber(plotvalue);
                indctrDiv.innerHTML = "<p>Total number of deaths 2003 to 2016 : 150.000 persons</p><p>Number of deaths in "+label+" : "+value+"</p>";
                indctrDiv.style.display = "block";
                indctrDiv.style.backgroundColor = "#ffffff";                
            }
        }
        
        

    }).render();
    return data;
} 

function sendRequest(callback) {
    httpc17.callback = callback;
    httpc17.send();
    
    httpc17.onloadend = function() {
        var data = JSON.parse(httpc17.responseText);
        httpc17.callback = callback(data.data);
    }
    
}
sendRequest(createChart);





//        events: {
//                //dataPlotRollOver event is raised whenever you hover over a data plot (column, anchor of line or area, pie etc.)
//               "dataplotClick" : function(evtObj, argObj){
//                   var obj = argObj;
//                   if (obj.dataIndex >= 140 && obj.dataIndex < 170) {
//                       // mach nichts
//                       var mapId = 'map' + obj.dataIndex;
//                       
//                       $('.map .map_inner').hide(); // this hides all currently open articles (if any);
//                       $('.map #' + mapId).show(); // show article
//                   }
//            }
//        }