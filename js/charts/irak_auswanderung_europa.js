var httpc7 = new XMLHttpRequest(); // simplified for clarity
var url = "Test_Server.php";
httpc7.open("GET", url + "?key=Irak_Auswanderung_Europa", true);
httpc7.setRequestHeader("Content-Type", "application/json");



function createChart(data) {

        var salesHMChart = new FusionCharts({
        type: 'heatmap',
        renderAt: 'Irak_Auswanderung_Europa',
        width: '900',
        height: '650',
        dataFormat: 'json',
        dataSource:  {
            "chart": {
                "theme": "fint",
                "caption": "Emigration from Iraq to European countries",
                "subCaption": "by Year 1990-2015",
                "xAxisName":"Years",
                "yAxisName":"Countries",
                "showPlotBorder": "1",
                "formatNumber": "1",
                "formatNumberScale": "0",
                "captionFont": "Georgia",
                "subcaptionFont": "Georgia",
                "thousandSeparator": " ",
                "yAxisNameFontSize": "5"
            },


"rows": {
        "row": [
            {
                "id": "Bulgaria"
            },
            {
                "id": "Czech Republic"
            },
            {
                "id": "Hungary"
            },
            {
                "id": "Poland"
            },
            {
                "id": "Romania"
            },
            {
                "id": "Russian Federation"
            },
            {
                "id": "Slovakia"
            },
            {
                "id": "Denmark"
            },
            {
                "id": "Estonia"
            },
            {
                "id": "Finland"
            },
            {
                "id": "Iceland"
            },
            {
                "id": "Ireland"
            },
            {
                "id": "Latvia"
            },
            {
                "id": "Norway"
            },
            {
                "id": "Sweden"
            },
            {
                "id": "UK"
            },
            {
                "id": "Croatia"
            },
            {
                "id": "Greece"
            },
            {
                "id": "Italy"
            },
            {
                "id": "Malta"
            },
            {
                "id": "Portugal"
            },
            {
                "id": "Serbia"
            },
            {
                "id": "Slovenia"
            },
            {
                "id": "Spain"
            },
            {
                "id": "Austria"
            },
            {
                "id": "Belgium"
            },
            {
                "id": "France"
            },
            {
                "id": "Germany"
            },
            {
                "id": "Netherlands"
            },
            {
                "id": "Switzerland"
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
                    "rowid": "Bulgaria",
                    "columnid": "0",
                    "value": data[0].year1
                },
                {
                    "rowid": "Bulgaria",
                    "columnid": "1",
                    "value": data[0].year2
                },
                {
                    "rowid": "Bulgaria",
                    "columnid": "2",
                    "value": data[0].year3
                },
                {
                    "rowid": "Bulgaria",
                    "columnid": "3",
                    "value": data[0].year4
                },
                {
                    "rowid": "Bulgaria",
                    "columnid": "4",
                    "value": data[0].year5
                },
                {
                    "rowid": "Bulgaria",
                    "columnid": "5",
                    "value": data[0].year6
                },
                
                
                {
                    "rowid": "Czech Republic",
                    "columnid": "0",
                    "value": data[1].year1
                },
                {
                    "rowid": "Czech Republic",
                    "columnid": "1",
                    "value": data[1].year2
                },
                {
                    "rowid": "Czech Republic",
                    "columnid": "2",
                    "value": data[1].year3
                },
                {
                    "rowid": "Czech Republic",
                    "columnid": "3",
                    "value": data[1].year4
                },
                {
                    "rowid": "Czech Republic",
                    "columnid": "4",
                    "value": data[1].year5
                },
                {
                    "rowid": "Czech Republic",
                    "columnid": "5",
                    "value": data[1].year6
                },
              
              
                {
                    "rowid": "Hungary",
                    "columnid": "0",
                    "value": data[2].year1
                },
                {
                    "rowid": "Hungary",
                    "columnid": "1",
                    "value": data[2].year2
                },
                {
                    "rowid": "Hungary",
                    "columnid": "2",
                    "value": data[2].year3
                },
                {
                    "rowid": "Hungary",
                    "columnid": "3",
                    "value": data[2].year4
                },
                {
                    "rowid": "Hungary",
                    "columnid": "4",
                    "value": data[2].year5
                },
                {
                    "rowid": "Hungary",
                    "columnid": "5",
                    "value": data[2].year6
                },
                
                
                
                {
                    "rowid": "Poland",
                    "columnid": "0",
                    "value": data[3].year1
                },
                {
                    "rowid": "Poland",
                    "columnid": "1",
                    "value": data[3].year2
                },
                {
                    "rowid": "Poland",
                    "columnid": "2",
                    "value": data[3].year3
                },
                {
                    "rowid": "Poland",
                    "columnid": "3",
                    "value": data[3].year4
                },
                {
                    "rowid": "Poland",
                    "columnid": "4",
                    "value": data[3].year5
                },
                {
                    "rowid": "Poland",
                    "columnid": "5",
                    "value": data[3].year6
                },
                
                
                {
                    "rowid": "Romania",
                    "columnid": "0",
                    "value": data[4].year1
                },
                {
                    "rowid": "Romania",
                    "columnid": "1",
                    "value": data[4].year2
                },
                {
                    "rowid": "Romania",
                    "columnid": "2",
                    "value": data[4].year3
                },
                {
                    "rowid": "Romania",
                    "columnid": "3",
                    "value": data[4].year4
                },
                {
                    "rowid": "Romania",
                    "columnid": "4",
                    "value": data[4].year5
                },
                {
                    "rowid": "Romania",
                    "columnid": "5",
                    "value": data[4].year6
                },
                
                
                {
                    "rowid": "Russian Federation",
                    "columnid": "0",
                    "value": data[5].year1
                },
                {
                    "rowid": "Russian Federation",
                    "columnid": "1",
                    "value": data[5].year2
                },
                {
                    "rowid": "Russian Federation",
                    "columnid": "2",
                    "value": data[5].year3
                },
                {
                    "rowid": "Russian Federation",
                    "columnid": "3",
                    "value": data[5].year4
                },
                {
                    "rowid": "Russian Federation",
                    "columnid": "4",
                    "value": data[5].year5
                },
                {
                    "rowid": "Russian Federation",
                    "columnid": "5",
                    "value": data[5].year6
                },
                
                
                
                {
                    "rowid": "Slovakia",
                    "columnid": "0",
                    "value": data[6].year1
                },
                {
                    "rowid": "Slovakia",
                    "columnid": "1",
                    "value": data[6].year2
                },
                {
                    "rowid": "Slovakia",
                    "columnid": "2",
                    "value": data[6].year3
                },
                {
                    "rowid": "Slovakia",
                    "columnid": "3",
                    "value": data[6].year4
                },
                {
                    "rowid": "Slovakia",
                    "columnid": "4",
                    "value": data[6].year5
                },
                {
                    "rowid": "Slovakia",
                    "columnid": "5",
                    "value": data[6].year6
                },
                
                
                
                {
                    "rowid": "Denmark",
                    "columnid": "0",
                    "value": data[7].year1
                },
                {
                    "rowid": "Denmark",
                    "columnid": "1",
                    "value": data[7].year2
                },
                {
                    "rowid": "Denmark",
                    "columnid": "2",
                    "value": data[7].year3
                },
                {
                    "rowid": "Denmark",
                    "columnid": "3",
                    "value": data[7].year4
                },
                {
                    "rowid": "Denmark",
                    "columnid": "4",
                    "value": data[7].year5
                },
                {
                    "rowid": "Denmark",
                    "columnid": "5",
                    "value": data[7].year6
                },
                
                
                
                {
                    "rowid": "Estonia",
                    "columnid": "0",
                    "value": data[8].year1
                },
                {
                    "rowid": "Estonia",
                    "columnid": "1",
                    "value": data[8].year2
                },
                {
                    "rowid": "Estonia",
                    "columnid": "2",
                    "value": data[8].year3
                },
                {
                    "rowid": "Estonia",
                    "columnid": "3",
                    "value": data[8].year4
                },
                {
                    "rowid": "Estonia",
                    "columnid": "4",
                    "value": data[8].year5
                },
                {
                    "rowid": "Estonia",
                    "columnid": "5",
                    "value": data[8].year6
                },
                
                
                
                {
                    "rowid": "Finland",
                    "columnid": "0",
                    "value": data[9].year1
                },
                {
                    "rowid": "Finland",
                    "columnid": "1",
                    "value": data[9].year2
                },
                {
                    "rowid": "Finland",
                    "columnid": "2",
                    "value": data[9].year3
                },
                {
                    "rowid": "Finland",
                    "columnid": "3",
                    "value": data[9].year4
                },
                {
                    "rowid": "Finland",
                    "columnid": "4",
                    "value": data[9].year5
                },
                {
                    "rowid": "Finland",
                    "columnid": "5",
                    "value": data[9].year6
                },
                
                
                
                {
                    "rowid": "Iceland",
                    "columnid": "0",
                    "value": data[10].year1
                },
                {
                    "rowid": "Iceland",
                    "columnid": "1",
                    "value": data[10].year2
                },
                {
                    "rowid": "Iceland",
                    "columnid": "2",
                    "value": data[10].year3
                },
                {
                    "rowid": "Iceland",
                    "columnid": "3",
                    "value": data[10].year4
                },
                {
                    "rowid": "Iceland",
                    "columnid": "4",
                    "value": data[10].year5
                },
                {
                    "rowid": "Iceland",
                    "columnid": "5",
                    "value": data[10].year6
                },
                
                
                
                {
                    "rowid": "Ireland",
                    "columnid": "0",
                    "value": data[11].year1
                },
                {
                    "rowid": "Ireland",
                    "columnid": "1",
                    "value": data[11].year2
                },
                {
                    "rowid": "Ireland",
                    "columnid": "2",
                    "value": data[11].year3
                },
                {
                    "rowid": "Ireland",
                    "columnid": "3",
                    "value": data[11].year4
                },
                {
                    "rowid": "Ireland",
                    "columnid": "4",
                    "value": data[11].year5
                },
                {
                    "rowid": "Ireland",
                    "columnid": "5",
                    "value": data[11].year6
                },
                
                
                
                {
                    "rowid": "Latvia",
                    "columnid": "0",
                    "value": data[12].year1
                },
                {
                    "rowid": "Latvia",
                    "columnid": "1",
                    "value": data[12].year2
                },
                {
                    "rowid": "Latvia",
                    "columnid": "2",
                    "value": data[12].year3
                },
                {
                    "rowid": "Latvia",
                    "columnid": "3",
                    "value": data[12].year4
                },
                {
                    "rowid": "Latvia",
                    "columnid": "4",
                    "value": data[12].year5
                },
                {
                    "rowid": "Latvia",
                    "columnid": "5",
                    "value": data[12].year6
                },
                
                
                
                {
                    "rowid": "Norway",
                    "columnid": "0",
                    "value": data[13].year1
                },
                {
                    "rowid": "Norway",
                    "columnid": "1",
                    "value": data[13].year2
                },
                {
                    "rowid": "Norway",
                    "columnid": "2",
                    "value": data[13].year3
                },
                {
                    "rowid": "Norway",
                    "columnid": "3",
                    "value": data[13].year4
                },
                {
                    "rowid": "Norway",
                    "columnid": "4",
                    "value": data[13].year5
                },
                {
                    "rowid": "Norway",
                    "columnid": "5",
                    "value": data[13].year6
                },
                
                
                
                {
                    "rowid": "Sweden",
                    "columnid": "0",
                    "value": data[14].year1
                },
                {
                    "rowid": "Sweden",
                    "columnid": "1",
                    "value": data[14].year2
                },
                {
                    "rowid": "Sweden",
                    "columnid": "2",
                    "value": data[14].year3
                },
                {
                    "rowid": "Sweden",
                    "columnid": "3",
                    "value": data[14].year4
                },
                {
                    "rowid": "Sweden",
                    "columnid": "4",
                    "value": data[14].year5
                },
                {
                    "rowid": "Sweden",
                    "columnid": "5",
                    "value": data[14].year6
                },
                
                
                
                {
                    "rowid": "UK",
                    "columnid": "0",
                    "value": data[15].year1
                },
                {
                    "rowid": "UK",
                    "columnid": "1",
                    "value": data[15].year2
                },
                {
                    "rowid": "UK",
                    "columnid": "2",
                    "value": data[15].year3
                },
                {
                    "rowid": "UK",
                    "columnid": "3",
                    "value": data[15].year4
                },
                {
                    "rowid": "UK",
                    "columnid": "4",
                    "value": data[15].year5
                },
                {
                    "rowid": "UK",
                    "columnid": "5",
                    "value": data[15].year6
                },
                
                
                
                {
                    "rowid": "Croatia",
                    "columnid": "0",
                    "value": data[16].year1
                },
                {
                    "rowid": "Croatia",
                    "columnid": "1",
                    "value": data[16].year2
                },
                {
                    "rowid": "Croatia",
                    "columnid": "2",
                    "value": data[16].year3
                },
                {
                    "rowid": "Croatia",
                    "columnid": "3",
                    "value": data[16].year4
                },
                {
                    "rowid": "Croatia",
                    "columnid": "4",
                    "value": data[16].year5
                },
                {
                    "rowid": "Croatia",
                    "columnid": "5",
                    "value": data[16].year6
                },
                
                
                {
                    "rowid": "Greece",
                    "columnid": "0",
                    "value": data[17].year1
                },
                {
                    "rowid": "Greece",
                    "columnid": "1",
                    "value": data[17].year2
                },
                {
                    "rowid": "Greece",
                    "columnid": "2",
                    "value": data[17].year3
                },
                {
                    "rowid": "Greece",
                    "columnid": "3",
                    "value": data[17].year4
                },
                {
                    "rowid": "Greece",
                    "columnid": "4",
                    "value": data[17].year5
                },
                {
                    "rowid": "Greece",
                    "columnid": "5",
                    "value": data[17].year6
                },
                
                
                
                {
                    "rowid": "Italy",
                    "columnid": "0",
                    "value": data[17].year1
                },
                {
                    "rowid": "Italy",
                    "columnid": "1",
                    "value": data[17].year2
                },
                {
                    "rowid": "Italy",
                    "columnid": "2",
                    "value": data[17].year3
                },
                {
                    "rowid": "Italy",
                    "columnid": "3",
                    "value": data[17].year4
                },
                {
                    "rowid": "Italy",
                    "columnid": "4",
                    "value": data[17].year5
                },
                {
                    "rowid": "Italy",
                    "columnid": "5",
                    "value": data[17].year6
                },
                
                
                
                {
                    "rowid": "Malta",
                    "columnid": "0",
                    "value": data[18].year1
                },
                {
                    "rowid": "Malta",
                    "columnid": "1",
                    "value": data[18].year2
                },
                {
                    "rowid": "Malta",
                    "columnid": "2",
                    "value": data[18].year3
                },
                {
                    "rowid": "Malta",
                    "columnid": "3",
                    "value": data[18].year4
                },
                {
                    "rowid": "Malta",
                    "columnid": "4",
                    "value": data[18].year5
                },
                {
                    "rowid": "Malta",
                    "columnid": "5",
                    "value": data[18].year6
                },
                
                
                
                {
                    "rowid": "Portugal",
                    "columnid": "0",
                    "value": data[18].year1
                },
                {
                    "rowid": "Portugal",
                    "columnid": "1",
                    "value": data[18].year2
                },
                {
                    "rowid": "Portugal",
                    "columnid": "2",
                    "value": data[18].year3
                },
                {
                    "rowid": "Portugal",
                    "columnid": "3",
                    "value": data[18].year4
                },
                {
                    "rowid": "Portugal",
                    "columnid": "4",
                    "value": data[18].year5
                },
                {
                    "rowid": "Portugal",
                    "columnid": "5",
                    "value": data[18].year6
                },
                
                
                
                {
                    "rowid": "Serbia",
                    "columnid": "0",
                    "value": data[19].year1
                },
                {
                    "rowid": "Serbia",
                    "columnid": "1",
                    "value": data[19].year2
                },
                {
                    "rowid": "Serbia",
                    "columnid": "2",
                    "value": data[19].year3
                },
                {
                    "rowid": "Serbia",
                    "columnid": "3",
                    "value": data[19].year4
                },
                {
                    "rowid": "Serbia",
                    "columnid": "4",
                    "value": data[19].year5
                },
                {
                    "rowid": "Serbia",
                    "columnid": "5",
                    "value": data[19].year6
                },
                
                
                
                {
                    "rowid": "Slovenia",
                    "columnid": "0",
                    "value": data[20].year1
                },
                {
                    "rowid": "Slovenia",
                    "columnid": "1",
                    "value": data[20].year2
                },
                {
                    "rowid": "Slovenia",
                    "columnid": "2",
                    "value": data[20].year3
                },
                {
                    "rowid": "Slovenia",
                    "columnid": "3",
                    "value": data[20].year4
                },
                {
                    "rowid": "Slovenia",
                    "columnid": "4",
                    "value": data[20].year5
                },
                {
                    "rowid": "Slovenia",
                    "columnid": "5",
                    "value": data[20].year6
                },
                
                
                {
                    "rowid": "Spain",
                    "columnid": "0",
                    "value": data[20].year1
                },
                {
                    "rowid": "Spain",
                    "columnid": "1",
                    "value": data[20].year2
                },
                {
                    "rowid": "Spain",
                    "columnid": "2",
                    "value": data[20].year3
                },
                {
                    "rowid": "Spain",
                    "columnid": "3",
                    "value": data[20].year4
                },
                {
                    "rowid": "Spain",
                    "columnid": "4",
                    "value": data[20].year5
                },
                {
                    "rowid": "Spain",
                    "columnid": "5",
                    "value": data[20].year6
                },
                
                
                
                {
                    "rowid": "Austria",
                    "columnid": "0",
                    "value": data[21].year1
                },
                {
                    "rowid": "Austria",
                    "columnid": "1",
                    "value": data[21].year2
                },
                {
                    "rowid": "Austria",
                    "columnid": "2",
                    "value": data[21].year3
                },
                {
                    "rowid": "Austria",
                    "columnid": "3",
                    "value": data[21].year4
                },
                {
                    "rowid": "Austria",
                    "columnid": "4",
                    "value": data[21].year5
                },
                {
                    "rowid": "Austria",
                    "columnid": "5",
                    "value": data[21].year6
                },
                
                
                
                
                {
                    "rowid": "Belgium",
                    "columnid": "0",
                    "value": data[22].year1
                },
                {
                    "rowid": "Belgium",
                    "columnid": "1",
                    "value": data[22].year2
                },
                {
                    "rowid": "Belgium",
                    "columnid": "2",
                    "value": data[22].year3
                },
                {
                    "rowid": "Belgium",
                    "columnid": "3",
                    "value": data[22].year4
                },
                {
                    "rowid": "Belgium",
                    "columnid": "4",
                    "value": data[22].year5
                },
                {
                    "rowid": "Belgium",
                    "columnid": "5",
                    "value": data[22].year6
                },
                
                
                
                {
                    "rowid": "France",
                    "columnid": "0",
                    "value": data[23].year1
                },
                {
                    "rowid": "France",
                    "columnid": "1",
                    "value": data[23].year2
                },
                {
                    "rowid": "France",
                    "columnid": "2",
                    "value": data[23].year3
                },
                {
                    "rowid": "France",
                    "columnid": "3",
                    "value": data[23].year4
                },
                {
                    "rowid": "France",
                    "columnid": "4",
                    "value": data[23].year5
                },
                {
                    "rowid": "France",
                    "columnid": "5",
                    "value": data[23].year6
                },
                
                
                
                
                {
                    "rowid": "Germany",
                    "columnid": "0",
                    "value": data[24].year1
                },
                {
                    "rowid": "Germany",
                    "columnid": "1",
                    "value": data[24].year2
                },
                {
                    "rowid": "Germany",
                    "columnid": "2",
                    "value": data[24].year3
                },
                {
                    "rowid": "Germany",
                    "columnid": "3",
                    "value": data[24].year4
                },
                {
                    "rowid": "Germany",
                    "columnid": "4",
                    "value": data[24].year5
                },
                {
                    "rowid": "Germany",
                    "columnid": "5",
                    "value": data[24].year6
                },
                
                
                
                
                {
                    "rowid": "Netherlands",
                    "columnid": "0",
                    "value": data[25].year1
                },
                {
                    "rowid": "Netherlands",
                    "columnid": "1",
                    "value": data[25].year2
                },
                {
                    "rowid": "Netherlands",
                    "columnid": "2",
                    "value": data[25].year3
                },
                {
                    "rowid": "Netherlands",
                    "columnid": "3",
                    "value": data[25].year4
                },
                {
                    "rowid": "Netherlands",
                    "columnid": "4",
                    "value": data[25].year5
                },
                {
                    "rowid": "Netherlands",
                    "columnid": "5",
                    "value": data[25].year6
                },
                
                
                
                {
                    "rowid": "Switzerland",
                    "columnid": "0",
                    "value": data[26].year1
                },
                {
                    "rowid": "Switzerland",
                    "columnid": "1",
                    "value": data[26].year2
                },
                {
                    "rowid": "Switzerland",
                    "columnid": "2",
                    "value": data[26].year3
                },
                {
                    "rowid": "Switzerland",
                    "columnid": "3",
                    "value": data[26].year4
                },
                {
                    "rowid": "Switzerland",
                    "columnid": "4",
                    "value": data[26].year5
                },
                {
                    "rowid": "Switzerland",
                    "columnid": "5",
                    "value": data[26].year6
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
    httpc7.callback = callback;
    httpc7.send();
    
    httpc7.onloadend = function() {
        var data = JSON.parse(httpc7.responseText);
        httpc7.callback = callback(data.data);
    }
    
}
sendRequest(createChart);


