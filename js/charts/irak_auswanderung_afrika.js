var httpc6 = new XMLHttpRequest(); // simplified for clarity
var url = "Test_Server.php";
httpc6.open("GET", url + "?key=Irak_Auswanderung_Afrika", true);
httpc6.setRequestHeader("Content-Type", "application/json");



function createChart(data) {

        var salesHMChart = new FusionCharts({
        type: 'heatmap',
        renderAt: 'Irak_Auswanderung_Afrika',
        width: '900',
        height: '650',
        dataFormat: 'json',
        dataSource:  {
            "chart": {
                "theme": "fint",
                "caption": "Emigration from Iraq to african countries",
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
                "id": "Algeria"
            },
            {
                "id": "Egypt"
            },
            {
                "id": "Libya"
            },
            {
                "id": "Morocco"
            },
            {
                "id": "Tunisia"
            },
            {
                "id": "South Africa"
            },
            {
                "id": "Mauritania"
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
                    "rowid": "Algeria",
                    "columnid": "0",
                    "value": data[0].year1
                },
                {
                    "rowid": "Algeria",
                    "columnid": "1",
                    "value": data[0].year2
                },
                {
                    "rowid": "Algeria",
                    "columnid": "2",
                    "value": data[0].year3
                },
                {
                    "rowid": "Algeria",
                    "columnid": "3",
                    "value": data[0].year4
                },
                {
                    "rowid": "Algeria",
                    "columnid": "4",
                    "value": data[0].year5
                },
                {
                    "rowid": "Algeria",
                    "columnid": "5",
                    "value": data[0].year6
                },
                
                
                {
                    "rowid": "Egypt",
                    "columnid": "0",
                    "value": data[1].year1
                },
                {
                    "rowid": "Egypt",
                    "columnid": "1",
                    "value": data[1].year2
                },
                {
                    "rowid": "Egypt",
                    "columnid": "2",
                    "value": data[1].year3
                },
                {
                    "rowid": "Egypt",
                    "columnid": "3",
                    "value": data[1].year4
                },
                {
                    "rowid": "Egypt",
                    "columnid": "4",
                    "value": data[1].year5
                },
                {
                    "rowid": "Egypt",
                    "columnid": "5",
                    "value": data[1].year6
                },
              
              
                {
                    "rowid": "Libya",
                    "columnid": "0",
                    "value": data[2].year1
                },
                {
                    "rowid": "Libya",
                    "columnid": "1",
                    "value": data[2].year2
                },
                {
                    "rowid": "Libya",
                    "columnid": "2",
                    "value": data[2].year3
                },
                {
                    "rowid": "Libya",
                    "columnid": "3",
                    "value": data[2].year4
                },
                {
                    "rowid": "Libya",
                    "columnid": "4",
                    "value": data[2].year5
                },
                {
                    "rowid": "Libya",
                    "columnid": "5",
                    "value": data[2].year6
                },
                
                
                
                {
                    "rowid": "Morocco",
                    "columnid": "0",
                    "value": data[3].year1
                },
                {
                    "rowid": "Morocco",
                    "columnid": "1",
                    "value": data[3].year2
                },
                {
                    "rowid": "Morocco",
                    "columnid": "2",
                    "value": data[3].year3
                },
                {
                    "rowid": "Morocco",
                    "columnid": "3",
                    "value": data[3].year4
                },
                {
                    "rowid": "Morocco",
                    "columnid": "4",
                    "value": data[3].year5
                },
                {
                    "rowid": "Morocco",
                    "columnid": "5",
                    "value": data[3].year6
                },
                
                
                {
                    "rowid": "Tunisia",
                    "columnid": "0",
                    "value": data[4].year1
                },
                {
                    "rowid": "Tunisia",
                    "columnid": "1",
                    "value": data[4].year2
                },
                {
                    "rowid": "Tunisia",
                    "columnid": "2",
                    "value": data[4].year3
                },
                {
                    "rowid": "Tunisia",
                    "columnid": "3",
                    "value": data[4].year4
                },
                {
                    "rowid": "Tunisia",
                    "columnid": "4",
                    "value": data[4].year5
                },
                {
                    "rowid": "Tunisia",
                    "columnid": "5",
                    "value": data[4].year6
                },
                
                
                {
                    "rowid": "South Africa",
                    "columnid": "0",
                    "value": data[5].year1
                },
                {
                    "rowid": "South Africa",
                    "columnid": "1",
                    "value": data[5].year2
                },
                {
                    "rowid": "South Africa",
                    "columnid": "2",
                    "value": data[5].year3
                },
                {
                    "rowid": "South Africa",
                    "columnid": "3",
                    "value": data[5].year4
                },
                {
                    "rowid": "South Africa",
                    "columnid": "4",
                    "value": data[5].year5
                },
                {
                    "rowid": "South Africa",
                    "columnid": "5",
                    "value": data[5].year6
                },
                
                
                
                {
                    "rowid": "Mauritania",
                    "columnid": "0",
                    "value": data[6].year1
                },
                {
                    "rowid": "Mauritania",
                    "columnid": "1",
                    "value": data[6].year2
                },
                {
                    "rowid": "Mauritania",
                    "columnid": "2",
                    "value": data[6].year3
                },
                {
                    "rowid": "Mauritania",
                    "columnid": "3",
                    "value": data[6].year4
                },
                {
                    "rowid": "Mauritania",
                    "columnid": "4",
                    "value": data[6].year5
                },
                {
                    "rowid": "Mauritania",
                    "columnid": "5",
                    "value": data[6].year6
                }
                
            ]
        }
    ],



            "colorRange": {
                "gradient": "1",
                "minValue": "0",
                "code": "#ffffff",
                "startLabel": "no emigration",
                "endLabel": "highest emigration",
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
            },
            
        }
    })
    .render();
     return data;
}


function sendRequest(callback) {
    httpc6.callback = callback;
    httpc6.send();
    
    httpc6.onloadend = function() {
        var data = JSON.parse(httpc6.responseText);
        httpc6.callback = callback(data.data);
    }
    
}
sendRequest(createChart);

