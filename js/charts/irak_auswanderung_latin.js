var httpc9 = new XMLHttpRequest(); // simplified for clarity
var url = "Test_Server.php";
httpc9.open("GET", url + "?key=Irak_Auswanderung_Latin", true);
httpc9.setRequestHeader("Content-Type", "application/json");



function createChart(data) {

        var salesHMChart = new FusionCharts({
        type: 'heatmap',
        renderAt: 'Irak_Auswanderung_Latin',
        width: '900',
        height: '650',
        dataFormat: 'json',
        dataSource:  {
            "chart": {
                "theme": "fint",
                "caption": "Emigration from Iraq to Latin American countries",
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
                "id": "Dominican Republic"
            },
            {
                "id": "Costa Rica"
            },
            {
                "id": "Mexico"
            },
            {
                "id": "Argentina"
            },
            {
                "id": "Bolivia"
            },
            {
                "id": "Brazil"
            },
            {
                "id": "Chile"
            },
            {
                "id": "Colombia"
            },
            {
                "id": "Ecuador"
            },
            {
                "id": "Peru"
            },
            {
                "id": "Venezuela"
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
                    "rowid": "Dominican Republic",
                    "columnid": "0",
                    "value": data[0].year1
                },
                {
                    "rowid": "Dominican Republic",
                    "columnid": "1",
                    "value": data[0].year2
                },
                {
                    "rowid": "Dominican Republic",
                    "columnid": "2",
                    "value": data[0].year3
                },
                {
                    "rowid": "Dominican Republic",
                    "columnid": "3",
                    "value": data[0].year4
                },
                {
                    "rowid": "Dominican Republic",
                    "columnid": "4",
                    "value": data[0].year5
                },
                {
                    "rowid": "Dominican Republic",
                    "columnid": "5",
                    "value": data[0].year6
                },
                
                
                {
                    "rowid": "Costa Rica",
                    "columnid": "0",
                    "value": data[1].year1
                },
                {
                    "rowid": "Costa Rica",
                    "columnid": "1",
                    "value": data[1].year2
                },
                {
                    "rowid": "Costa Rica",
                    "columnid": "2",
                    "value": data[1].year3
                },
                {
                    "rowid": "Costa Rica",
                    "columnid": "3",
                    "value": data[1].year4
                },
                {
                    "rowid": "Costa Rica",
                    "columnid": "4",
                    "value": data[1].year5
                },
                {
                    "rowid": "Costa Rica",
                    "columnid": "5",
                    "value": data[1].year6
                },
              
              
                {
                    "rowid": "Mexico",
                    "columnid": "0",
                    "value": data[2].year1
                },
                {
                    "rowid": "Mexico",
                    "columnid": "1",
                    "value": data[2].year2
                },
                {
                    "rowid": "Mexico",
                    "columnid": "2",
                    "value": data[2].year3
                },
                {
                    "rowid": "Mexico",
                    "columnid": "3",
                    "value": data[2].year4
                },
                {
                    "rowid": "Mexico",
                    "columnid": "4",
                    "value": data[2].year5
                },
                {
                    "rowid": "Mexico",
                    "columnid": "5",
                    "value": data[2].year6
                },
                
                
                
                {
                    "rowid": "Argentina",
                    "columnid": "0",
                    "value": data[3].year1
                },
                {
                    "rowid": "Argentina",
                    "columnid": "1",
                    "value": data[3].year2
                },
                {
                    "rowid": "Argentina",
                    "columnid": "2",
                    "value": data[3].year3
                },
                {
                    "rowid": "Argentina",
                    "columnid": "3",
                    "value": data[3].year4
                },
                {
                    "rowid": "Argentina",
                    "columnid": "4",
                    "value": data[3].year5
                },
                {
                    "rowid": "Argentina",
                    "columnid": "5",
                    "value": data[3].year6
                },
                
                
                {
                    "rowid": "Bolivia",
                    "columnid": "0",
                    "value": data[4].year1
                },
                {
                    "rowid": "Bolivia",
                    "columnid": "1",
                    "value": data[4].year2
                },
                {
                    "rowid": "Bolivia",
                    "columnid": "2",
                    "value": data[4].year3
                },
                {
                    "rowid": "Bolivia",
                    "columnid": "3",
                    "value": data[4].year4
                },
                {
                    "rowid": "Bolivia",
                    "columnid": "4",
                    "value": data[4].year5
                },
                {
                    "rowid": "Bolivia",
                    "columnid": "5",
                    "value": data[4].year6
                },
                
                
                {
                    "rowid": "Brazil",
                    "columnid": "0",
                    "value": data[5].year1
                },
                {
                    "rowid": "Brazil",
                    "columnid": "1",
                    "value": data[5].year2
                },
                {
                    "rowid": "Brazil",
                    "columnid": "2",
                    "value": data[5].year3
                },
                {
                    "rowid": "Brazil",
                    "columnid": "3",
                    "value": data[5].year4
                },
                {
                    "rowid": "Brazil",
                    "columnid": "4",
                    "value": data[5].year5
                },
                {
                    "rowid": "Brazil",
                    "columnid": "5",
                    "value": data[5].year6
                },
                
                
                
                {
                    "rowid": "Chile",
                    "columnid": "0",
                    "value": data[6].year1
                },
                {
                    "rowid": "Chile",
                    "columnid": "1",
                    "value": data[6].year2
                },
                {
                    "rowid": "Chile",
                    "columnid": "2",
                    "value": data[6].year3
                },
                {
                    "rowid": "Chile",
                    "columnid": "3",
                    "value": data[6].year4
                },
                {
                    "rowid": "Chile",
                    "columnid": "4",
                    "value": data[6].year5
                },
                {
                    "rowid": "Chile",
                    "columnid": "5",
                    "value": data[6].year6
                },
                
                
                
                {
                    "rowid": "Colombia",
                    "columnid": "0",
                    "value": data[7].year1
                },
                {
                    "rowid": "Colombia",
                    "columnid": "1",
                    "value": data[7].year2
                },
                {
                    "rowid": "Colombia",
                    "columnid": "2",
                    "value": data[7].year3
                },
                {
                    "rowid": "Colombia",
                    "columnid": "3",
                    "value": data[7].year4
                },
                {
                    "rowid": "Colombia",
                    "columnid": "4",
                    "value": data[7].year5
                },
                {
                    "rowid": "Colombia",
                    "columnid": "5",
                    "value": data[7].year6
                },
                
                
                
                {
                    "rowid": "Ecuador",
                    "columnid": "0",
                    "value": data[8].year1
                },
                {
                    "rowid": "Ecuador",
                    "columnid": "1",
                    "value": data[8].year2
                },
                {
                    "rowid": "Ecuador",
                    "columnid": "2",
                    "value": data[8].year3
                },
                {
                    "rowid": "Ecuador",
                    "columnid": "3",
                    "value": data[8].year4
                },
                {
                    "rowid": "Ecuador",
                    "columnid": "4",
                    "value": data[8].year5
                },
                {
                    "rowid": "Ecuador",
                    "columnid": "5",
                    "value": data[8].year6
                },
                
                
                
                {
                    "rowid": "Peru",
                    "columnid": "0",
                    "value": data[9].year1
                },
                {
                    "rowid": "Peru",
                    "columnid": "1",
                    "value": data[9].year2
                },
                {
                    "rowid": "Peru",
                    "columnid": "2",
                    "value": data[9].year3
                },
                {
                    "rowid": "Peru",
                    "columnid": "3",
                    "value": data[9].year4
                },
                {
                    "rowid": "Peru",
                    "columnid": "4",
                    "value": data[9].year5
                },
                {
                    "rowid": "Peru",
                    "columnid": "5",
                    "value": data[9].year6
                },
                
                
                
                {
                    "rowid": "Venezuela",
                    "columnid": "0",
                    "value": data[10].year1
                },
                {
                    "rowid": "Venezuela",
                    "columnid": "1",
                    "value": data[10].year2
                },
                {
                    "rowid": "Venezuela",
                    "columnid": "2",
                    "value": data[10].year3
                },
                {
                    "rowid": "Venezuela",
                    "columnid": "3",
                    "value": data[10].year4
                },
                {
                    "rowid": "Venezuela",
                    "columnid": "4",
                    "value": data[10].year5
                },
                {
                    "rowid": "Venezuela",
                    "columnid": "5",
                    "value": data[10].year6
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
    httpc9.callback = callback;
    httpc9.send();
    
    httpc9.onloadend = function() {
        var data = JSON.parse(httpc9.responseText);
        httpc9.callback = callback(data.data);
    }
    
}
sendRequest(createChart);


