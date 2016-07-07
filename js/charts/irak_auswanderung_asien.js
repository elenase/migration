var httpc4 = new XMLHttpRequest(); // simplified for clarity
var url = "Test_Server.php";
httpc4.open("GET", url + "?key=Irak_Auswanderung_Asien", true);
httpc4.setRequestHeader("Content-Type", "application/json");



function createChart(data) {

        var salesHMChart = new FusionCharts({
        type: 'heatmap',
        renderAt: 'Irak_Auswanderung_Asien',
        height: '650',
        width: '900',
        dataFormat: 'json',
        dataSource:  {
            "chart": {
                "theme": "fint",
                "caption": "Emigration from Iraq to Asian countries",
                "subCaption": "by Year 1990-2015",
                "xAxisName":"Years",
                "yAxisName":"Countries",
                "showPlotBorder": "1",
                "formatNumber": "1",
                "formatNumberScale": "0",
                "captionFont": "Georgia",
                "subcaptionFont": "Georgia",
                "showPercentInTooltip": "0",
                "thousandSeparator": " "
            },


"rows": {
        "row": [
            {
                "id": "Tajikistan"
            },
            {
                "id": "Malaysia"
            },
            {
                "id": "Philippines"
            },
            {
                "id": "Thailand"
            },
            {
                "id": "India"
            },
            {
                "id": "Iran"
            },
            {
                "id": "Pakistan"
            },
            {
                "id": "Sri Lanka"
            },
            {
                "id": "Cyprus"
            },
            {
                "id": "Israel"
            },
            {
                "id": "Jordan"
            },
            {
                "id": "Lebanon"
            },
            {
                "id": "Oman"
            },
            {
                "id": "Saudi Arabia"
            },
            {
                "id": "Syria"
            },
            {
                "id": "Turkey"
            },
            {
                "id": "Yemen"
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
                    "rowid": "Tajikistan",
                    "columnid": "0",
                    "value": data[0].year1
                },
                {
                    "rowid": "Tajikistan",
                    "columnid": "1",
                    "value": data[0].year2
                },
                {
                    "rowid": "Tajikistan",
                    "columnid": "2",
                    "value": data[0].year3
                },
                {
                    "rowid": "Tajikistan",
                    "columnid": "3",
                    "value": data[0].year4
                },
                {
                    "rowid": "Tajikistan",
                    "columnid": "4",
                    "value": data[0].year5
                },
                {
                    "rowid": "Tajikistan",
                    "columnid": "5",
                    "value": data[0].year6
                },
                
                
                {
                    "rowid": "Malaysia",
                    "columnid": "0",
                    "value": data[1].year1
                },
                {
                    "rowid": "Malaysia",
                    "columnid": "1",
                    "value": data[1].year2
                },
                {
                    "rowid": "Malaysia",
                    "columnid": "2",
                    "value": data[1].year3
                },
                {
                    "rowid": "Malaysia",
                    "columnid": "3",
                    "value": data[1].year4
                },
                {
                    "rowid": "Malaysia",
                    "columnid": "4",
                    "value": data[1].year5
                },
                {
                    "rowid": "Malaysia",
                    "columnid": "5",
                    "value": data[1].year6
                },
              
              
                {
                    "rowid": "Philippines",
                    "columnid": "0",
                    "value": data[2].year1
                },
                {
                    "rowid": "Philippines",
                    "columnid": "1",
                    "value": data[2].year2
                },
                {
                    "rowid": "Philippines",
                    "columnid": "2",
                    "value": data[2].year3
                },
                {
                    "rowid": "Philippines",
                    "columnid": "3",
                    "value": data[2].year4
                },
                {
                    "rowid": "Philippines",
                    "columnid": "4",
                    "value": data[2].year5
                },
                {
                    "rowid": "Philippines",
                    "columnid": "5",
                    "value": data[2].year6
                },
                
                
                
                {
                    "rowid": "Thailand",
                    "columnid": "0",
                    "value": data[3].year1
                },
                {
                    "rowid": "Thailand",
                    "columnid": "1",
                    "value": data[3].year2
                },
                {
                    "rowid": "Thailand",
                    "columnid": "2",
                    "value": data[3].year3
                },
                {
                    "rowid": "Thailand",
                    "columnid": "3",
                    "value": data[3].year4
                },
                {
                    "rowid": "Thailand",
                    "columnid": "4",
                    "value": data[3].year5
                },
                {
                    "rowid": "Thailand",
                    "columnid": "5",
                    "value": data[3].year6
                },
                
                
                {
                    "rowid": "India",
                    "columnid": "0",
                    "value": data[4].year1
                },
                {
                    "rowid": "India",
                    "columnid": "1",
                    "value": data[4].year2
                },
                {
                    "rowid": "India",
                    "columnid": "2",
                    "value": data[4].year3
                },
                {
                    "rowid": "India",
                    "columnid": "3",
                    "value": data[4].year4
                },
                {
                    "rowid": "India",
                    "columnid": "4",
                    "value": data[4].year5
                },
                {
                    "rowid": "India",
                    "columnid": "5",
                    "value": data[4].year6
                },
                
                
                {
                    "rowid": "Iran",
                    "columnid": "0",
                    "value": data[5].year1
                },
                {
                    "rowid": "Iran",
                    "columnid": "1",
                    "value": data[5].year2
                },
                {
                    "rowid": "Iran",
                    "columnid": "2",
                    "value": data[5].year3
                },
                {
                    "rowid": "Iran",
                    "columnid": "3",
                    "value": data[5].year4
                },
                {
                    "rowid": "Iran",
                    "columnid": "4",
                    "value": data[5].year5
                },
                {
                    "rowid": "Iran",
                    "columnid": "5",
                    "value": data[5].year6
                },
                
                
                
                {
                    "rowid": "Pakistan",
                    "columnid": "0",
                    "value": data[6].year1
                },
                {
                    "rowid": "Pakistan",
                    "columnid": "1",
                    "value": data[6].year2
                },
                {
                    "rowid": "Pakistan",
                    "columnid": "2",
                    "value": data[6].year3
                },
                {
                    "rowid": "Pakistan",
                    "columnid": "3",
                    "value": data[6].year4
                },
                {
                    "rowid": "Pakistan",
                    "columnid": "4",
                    "value": data[6].year5
                },
                {
                    "rowid": "Pakistan",
                    "columnid": "5",
                    "value": data[6].year6
                },
                
                
                
                {
                    "rowid": "Sri Lanka",
                    "columnid": "0",
                    "value": data[7].year1
                },
                {
                    "rowid": "Sri Lanka",
                    "columnid": "1",
                    "value": data[7].year2
                },
                {
                    "rowid": "Sri Lanka",
                    "columnid": "2",
                    "value": data[7].year3
                },
                {
                    "rowid": "Sri Lanka",
                    "columnid": "3",
                    "value": data[7].year4
                },
                {
                    "rowid": "Sri Lanka",
                    "columnid": "4",
                    "value": data[7].year5
                },
                {
                    "rowid": "Sri Lanka",
                    "columnid": "5",
                    "value": data[7].year6
                },
                
                
                
                {
                    "rowid": "Cyprus",
                    "columnid": "0",
                    "value": data[8].year1
                },
                {
                    "rowid": "Cyprus",
                    "columnid": "1",
                    "value": data[8].year2
                },
                {
                    "rowid": "Cyprus",
                    "columnid": "2",
                    "value": data[8].year3
                },
                {
                    "rowid": "Cyprus",
                    "columnid": "3",
                    "value": data[8].year4
                },
                {
                    "rowid": "Cyprus",
                    "columnid": "4",
                    "value": data[8].year5
                },
                {
                    "rowid": "Cyprus",
                    "columnid": "5",
                    "value": data[8].year6
                },
                
                
                
                {
                    "rowid": "Israel",
                    "columnid": "0",
                    "value": data[9].year1
                },
                {
                    "rowid": "Israel",
                    "columnid": "1",
                    "value": data[9].year2
                },
                {
                    "rowid": "Israel",
                    "columnid": "2",
                    "value": data[9].year3
                },
                {
                    "rowid": "Israel",
                    "columnid": "3",
                    "value": data[9].year4
                },
                {
                    "rowid": "Israel",
                    "columnid": "4",
                    "value": data[9].year5
                },
                {
                    "rowid": "Israel",
                    "columnid": "5",
                    "value": data[9].year6
                },
                
                
                
                {
                    "rowid": "Jordan",
                    "columnid": "0",
                    "value": data[10].year1
                },
                {
                    "rowid": "Jordan",
                    "columnid": "1",
                    "value": data[10].year2
                },
                {
                    "rowid": "Jordan",
                    "columnid": "2",
                    "value": data[10].year3
                },
                {
                    "rowid": "Jordan",
                    "columnid": "3",
                    "value": data[10].year4
                },
                {
                    "rowid": "Jordan",
                    "columnid": "4",
                    "value": data[10].year5
                },
                {
                    "rowid": "Jordan",
                    "columnid": "5",
                    "value": data[10].year6
                },
                
                
                
                {
                    "rowid": "Lebanon",
                    "columnid": "0",
                    "value": data[11].year1
                },
                {
                    "rowid": "Lebanon",
                    "columnid": "1",
                    "value": data[11].year2
                },
                {
                    "rowid": "Lebanon",
                    "columnid": "2",
                    "value": data[11].year3
                },
                {
                    "rowid": "Lebanon",
                    "columnid": "3",
                    "value": data[11].year4
                },
                {
                    "rowid": "Lebanon",
                    "columnid": "4",
                    "value": data[11].year5
                },
                {
                    "rowid": "Lebanon",
                    "columnid": "5",
                    "value": data[11].year6
                },
                
                
                
                {
                    "rowid": "Oman",
                    "columnid": "0",
                    "value": data[12].year1
                },
                {
                    "rowid": "Oman",
                    "columnid": "1",
                    "value": data[12].year2
                },
                {
                    "rowid": "Oman",
                    "columnid": "2",
                    "value": data[12].year3
                },
                {
                    "rowid": "Oman",
                    "columnid": "3",
                    "value": data[12].year4
                },
                {
                    "rowid": "Oman",
                    "columnid": "4",
                    "value": data[12].year5
                },
                {
                    "rowid": "Oman",
                    "columnid": "5",
                    "value": data[12].year6
                },
                
                
                
                {
                    "rowid": "Saudi Arabia",
                    "columnid": "0",
                    "value": data[13].year1
                },
                {
                    "rowid": "Saudi Arabia",
                    "columnid": "1",
                    "value": data[13].year2
                },
                {
                    "rowid": "Saudi Arabia",
                    "columnid": "2",
                    "value": data[13].year3
                },
                {
                    "rowid": "Saudi Arabia",
                    "columnid": "3",
                    "value": data[13].year4
                },
                {
                    "rowid": "Saudi Arabia",
                    "columnid": "4",
                    "value": data[13].year5
                },
                {
                    "rowid": "Saudi Arabia",
                    "columnid": "5",
                    "value": data[13].year6
                },
                
                
                
                {
                    "rowid": "Syria",
                    "columnid": "0",
                    "value": data[14].year1
                },
                {
                    "rowid": "Syria",
                    "columnid": "1",
                    "value": data[14].year2
                },
                {
                    "rowid": "Syria",
                    "columnid": "2",
                    "value": data[14].year3
                },
                {
                    "rowid": "Syria",
                    "columnid": "3",
                    "value": data[14].year4
                },
                {
                    "rowid": "Syria",
                    "columnid": "4",
                    "value": data[14].year5
                },
                {
                    "rowid": "Syria",
                    "columnid": "5",
                    "value": data[14].year6
                },
                
                
                
                {
                    "rowid": "Turkey",
                    "columnid": "0",
                    "value": data[15].year1
                },
                {
                    "rowid": "Turkey",
                    "columnid": "1",
                    "value": data[15].year2
                },
                {
                    "rowid": "Turkey",
                    "columnid": "2",
                    "value": data[15].year3
                },
                {
                    "rowid": "Turkey",
                    "columnid": "3",
                    "value": data[15].year4
                },
                {
                    "rowid": "Turkey",
                    "columnid": "4",
                    "value": data[15].year5
                },
                {
                    "rowid": "Turkey",
                    "columnid": "5",
                    "value": data[15].year6
                },
                
                
                
                {
                    "rowid": "Yemen",
                    "columnid": "0",
                    "value": data[16].year1
                },
                {
                    "rowid": "Yemen",
                    "columnid": "1",
                    "value": data[16].year2
                },
                {
                    "rowid": "Yemen",
                    "columnid": "2",
                    "value": data[16].year3
                },
                {
                    "rowid": "Yemen",
                    "columnid": "3",
                    "value": data[16].year4
                },
                {
                    "rowid": "Yemen",
                    "columnid": "4",
                    "value": data[16].year5
                },
                {
                    "rowid": "Yemen",
                    "columnid": "5",
                    "value": data[16].year6
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
    httpc4.callback = callback;
    httpc4.send();
    
    httpc4.onloadend = function() {
        var data = JSON.parse(httpc4.responseText);
        httpc4.callback = callback(data.data);
    }
    
}
sendRequest(createChart);