var httpc5 = new XMLHttpRequest(); // simplified for clarity
var url = "Test_Server.php";
httpc5.open("GET", url + "?key=Irak_Auswanderung_Ozeanien", true);
httpc5.setRequestHeader("Content-Type", "application/json");


function createChart(data) {
    

 var salesHMChart = new FusionCharts({
        type: 'heatmap',
        renderAt: 'Irak_Auswanderung_Ozeanien',
        width: '900',
        height: '650',
        dataFormat: 'json',
        dataSource:  {
            "chart": {
                "theme": "fint",
                "caption": "Emigration from Iraq to Oceanian countries",
                "subCaption": "by Year 1990-2015",
                "xAxisName":"Years",
                "yAxisName":"Countries",
                "showPlotBorder": "1",
                "formatNumber": "1",
                "formatNumberScale": "0",
                "captionFont": "Georgia",
                "subcaptionFont": "Georgia",
                "thousandSeparator": " "
            },


"rows": {
        "row": [
            {
                "id": "Australia"
            },
            {
                "id": "New Zealand"
            }
        ]
    },
    "columns": {
        "column": [
            {
                "id": "0",
                "label": "1990"
            },
            {
                "id": "1",
                "label": "1995"
            },
            {
                "id": "2",
                "label": "2000"
            },
            {
                "id": "3",
                "label": "2005"
            },
            {
                "id": "4",
                "label": "2010"
            },
            {
                "id": "5",
                "label": "2015"
            }
        ]
    },
    "dataset": [
        {
            "data": [
                {
                    "rowid": "Australia",
                    "columnid": "0",
                    "value": data[0].year1
                },
                {
                    "rowid": "Australia",
                    "columnid": "1",
                    "value": data[0].year2
                },
                {
                    "rowid": "Australia",
                    "columnid": "2",
                    "value": data[0].year3
                },
                {
                    "rowid": "Australia",
                    "columnid": "3",
                    "value": data[0].year4
                },
                {
                    "rowid": "Australia",
                    "columnid": "4",
                    "value": data[0].year5
                },
                {
                    "rowid": "Australia",
                    "columnid": "5",
                    "value": data[0].year6
                },
                
                
                {
                    "rowid": "New Zealand",
                    "columnid": "0",
                    "value": data[1].year1
                },
                {
                    "rowid": "New Zealand",
                    "columnid": "1",
                    "value": data[1].year2
                },
                {
                    "rowid": "New Zealand",
                    "columnid": "2",
                    "value": data[1].year3
                },
                {
                    "rowid": "New Zealand",
                    "columnid": "3",
                    "value": data[1].year4
                },
                {
                    "rowid": "New Zealand",
                    "columnid": "4",
                    "value": data[1].year5
                },
                {
                    "rowid": "New Zealand",
                    "columnid": "5",
                    "value": data[1].year6
                }
                
            ]
        }
    ],



            "colorRange": {
                "gradient": "1",
                "minValue": "0",
                "code": "#ffffff",
                "startLabel": "no emigration",
                "endLabel": "high emigration",
                "color": [
                    
                    {
                        "code": "EBC9CD",
                        "minValue": "1",
                        "maxValue": "1000"
                        
                    },
                    {
                        "code": "#CD7883",
                        "minValue": "1001",
                        "maxValue": "137526",
                        "label": "Average"
                        
                    },
                    {
                        "code": "#A50D20",
                        "minValue": "35001",
                        "maxValue": "1153969"
                        
                    }
                ]
            }
        }
 })
    .render();
     return data;
}
     


function sendRequest(callback) {
    httpc5.callback = callback;
    httpc5.send();
    
    httpc5.onloadend = function() {
        var data = JSON.parse(httpc5.responseText);
        httpc5.callback = callback(data.data);
    }
    
}
sendRequest(createChart);