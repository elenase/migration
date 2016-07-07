function load() {
	var mydata = JSON.parse(data);
	alert(mydata[0].name);
	alert(mydata[0].age);
}


function createChart() {
    var data = JSON.parse(data);
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


sendRequest(createChart);

