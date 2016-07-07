//<![CDATA[
$(window).load(function(){
(function() {
    var width = 940,
        height = 570;
    // set projection
    var projection = d3.geo.mercator().scale(1000).translate([width / 2.2, height / 1.2]);
    // create path variable
    //var path = d3.geo.path()
    //.projection(projection)      
      
   //var radius = 10; /* radius of circles */
    //var numCircles = 8; /* number of circles - you must update link source/target values to match changes in the number of circles */
    var d3LineLinear = d3.svg.line().interpolate("linear");
    var d3color = d3.interpolateRgb("#3690c0","#023858"); /* color range for flow lines -- PIERRE Not that clear */ 
    //var d3color = d3.interpolateRgb("#638aa0"); /* color range for flow lines */
    //A LIST OF LINKS BETWEEN CIRCLES
    
    
    //1961
    var links = [
        { source:89, target:17,strength: 100.0,name:'Rwanda->Burundi'},
        { source:4, target:25,strength: 1.5,name:'Angola->Congo'},
        { source:89, target:25,strength: 0.53,name:'Rwanda->Congo'},
        { source:89, target:105,strength: 0.12,name:'Rwanda->Tanzania'},
        { source:89, target:113,strength: 0.52,name:'Rwanda->Uganda'}
    ];
    
    function createDefs(defs) {
        var dropShadowFilter = defs.append('svg:filter').attr('id', 'dropShadow');
        dropShadowFilter.append('svg:feGaussianBlur').attr('in', 'SourceAlpha').attr('stdDeviation', 1);
        dropShadowFilter.append('svg:feOffset').attr('dx', 0.4).attr('dy', 0.4).attr('result', 'offsetblur');
        var feMerge = dropShadowFilter.append('svg:feMerge');
        feMerge.append('svg:feMergeNode');
        feMerge.append('svg:feMergeNode').attr('in', "SourceGraphic");
    }
    //var drag = d3.behavior.drag().origin(Object).on("drag", function() {
     //   dragmove(this);
    //});
    var circles = [
//    [34.31,69.11,"Afghanistan","AFG",9325032],                   //1
//    [41.19,19.49,"Albania","ALB",9325032],                        //2
//    [36.45,3.03,"Algeria","DZA",9325032],                   //3
    [8.5,13.13,"Angola","AGO",1000000],                      //4
//    [34.35,58.4,"Argentina","ARG",100000],                  //5
//    [40.1,44.3,"Armenia","ARM",1596677],                    //6
//    [35.16,149.08,"Australia","AUS",1596677],               //7
//    [48.12,16.22,"Austria","AUT",1596677],                  //8
//    [40.23,49.52,"Azerbaijan","AZE",21504162],              //9
//    [23.43,90.24,"Bangladesh","BGD",3977000],               //10
//    [6.29,2.37,"Benin","BEN",3977000],                      //11
//    [27.28,89.38,"Bhutan","BTN",10589000],                  //12
//    [43.52,18.25,"Bosnia and Herzegovina","BHI",15085000],  //13
//    [24.38,25.54,"Botswana","BWA",15085000],                //14
//    [15.47,47.55,"Brazil","BRA",15085000],                  //15
//    [12.22,1.31,"Burkina Faso","BFA",15085000],             //16
    [3.22,29.21,"Burundi","BDI",1000000],                   //17
//    [11.33,104.55,"Cambodia","KHM",491875],                 //18
//    [3.52,11.31,"Cameroon","CMR",491875],                   //19
//    [45.25,75.42,"Canada","CAN",491875],                    //20
//    [4.22,18.35,"Central African Republic","CAF",3786764],  //21
//    [12.06,15.02,"Chad","TCD",19711291],                    //22
//    [33.27,70.4,"Chile","CHL",12643799],                    //23
//    [39.55,116.23,"China","CHN",10478000],                  //24
    [4.15,15.17,"Congo","COL",1000000],                    //25
//    [9.56,84.05,"Costa Rica","CRI",15034000],               //26
//    [6.49,5.16,"Cote d'Ivoire","CIV",3256000],              //27
//    [45.48,16.0,"Croatia","HRV",1791000],                   //28
//    [23.07,82.21,"Cuba","CUB",13803000],                    //29
//    [55.4,12.35,"Denmark","DNK",1791000],                   //30
//    [11.35,43.09,"Djibouti","DJI",163000],                  //31
//    [13.00,78.3,"Ecuador","ECU",163000],                    //32
//    [30.03,31.15,"Egypt","EGY",5363669],                    //33
//    [13.42,89.12,"El Salvador","GNQ",1518000],              //34
//    [3.45,8.47,"Equatorial Guinea","GHA",24304000],         //35
//    [15.2,38.56,"Eritrea","ERI",24304000],                  //36    
//    [9.02,38.42,"Ethiopia","ETH",24304000],                 //37
//    [48.52,2.2,"France","France",24304000],                 //38
//    [23.00,9.27,"Gabon","GAB",24304000],                    //39
//    [52.31,13.24,"Germany","DEU",24304000],                 //40
//    [41.41,44.5,"Georgia","GEO",24304000],                  //41
//    [5.33,13.00,"Ghana","GHA",24304000],                    //42
//    [37.59,23.44,"Greece","GRC",24304000],                  //43
//    [14.37,90.31,"Guatemala","GTM",24304000],               //44
//    [9.3,13.42,"Guinea","GIN",24304000],                    //45
//    [11.51,15.35,"Guinea-Bissau","GNB",24304000],           //46
//    [18.32,72.2,"Haiti","HTI",24304000],                    //47
//    [14.06,87.13,"Honduras","HND",24304000],                //48
//    [47.3,19.05,"Hungary","HUN",24304000],                  //49
//    [28.36,77.12,"India","IND",24304000],                   //50
//    [6.1,106.49,"Indonesia","IDN",24304000],                //51
//    [35.42,51.25,"Iran","IRN",24304000],                    //52
//    [33.2,44.24,"Iraq","IRQ",24304000],                     //53
//    [31.46,35.14,"Israel","ISR",24304000],                  //54
//    [41.54,12.29,"Italy","ITA",24304000],                   //55
//    [31.57,35.56,"Jordan","JOR",24304000],                  //56    
//    [51.1,71.25,"Kazakhstan","KAZ",24304000],               //57
//    [1.17,36.49,"Kenya","KEN",24304000],                    //58
//    [29.22,47.58,"Kuwait","KWT",24304000],                  //59
//    [42.52,74.36,"Kyrgyzstan","KGZ",24304000],              //60
//    [33.52,35.3,"Lebanon","LBN",24304000],                  //61
//    [29.19,27.29,"Lesotho","LSO",24304000],                 //62    
//    [6.18,10.48,"Liberia","LBR",24304000],                  //63    
//    [32.53,13.1,"Libya","LBY",24304000],                    //64    
//    [13.58,33.47,"Malawi","MWI",24304000],                  //65
//    [3.1,101.42,"Malaysia","MYS",24304000],                 //66
//    [12.39,8.00,"Mali","MLI",24304000],                     //67
//    [18.04,15.58,"Mauritania","MRT",24304000],              //68
//    [19.26,99.08,"Maxico","MEX",24304000],                  //69    
//    [42.26,19.16,"Montenegro","MNE",24304000],              //70
//    [25.57,32.35,"Mozambique","MOZ",24304000],              //71
//    [22.00,98.00,"Myanmar","MMR",24304000],                 //72
//    [22.34,17.05,"Namibia","NAM",24304000],                 //73
//    [27.43,85.19,"Nepal","NPL",24304000],                   //74
//    [52.21,4.55,"Netherlands","NLD",24304000],              //75
//    [12.08,86.15,"Nicaragua","NIC",24304000],               //76
//    [13.31,2.07,"Niger","NER",24304000],                    //77
//    [9.05,7.32,"Nigeria","NGA",24304000],                   //78    
//    [59.55,10.45,"Norway","NOR",24304000],                  //79
//    [33.41,73.03,"Pakistan","PAK",24304000],                //80
//    [31.57,35.13,"Palestinian","PSE",24304000],             //81
//    [8.58,79.32,"Panama","PAN",24304000],                   //82
//    [9.27,147.11,"Papua New Guinea","PNG",24304000],        //83    
//    [14.36,120.58,"Philippines","PHL",24304000],            //84
//    [52.15,21.00,"Poland","POL",24304000],                  //85
//    [42.00,21.26,"Republic of Macedonia","MKD",24304000],   //86
//    [44.26,26.06,"Romania","ROM",24304000],                 //87
//    [55.45,37.36,"Russia","RUS",24304000],                  //88
    [1.57,30.03,"Rwanda","RWA",1000000],                   //89
//    [24.39,46.42,"Saudi Arabia","SAU",24304000],            //90
//    [14.44,17.38,"Senegal","SEN",24304000],                 //91
//    [44.5,20.3,"Serbia","SRB",24304000],                    //92
//    [8.29,13.14,"Sierra Leone","SLE",24304000],             //93
//    [46.03,14.31,"Slovenia","SVN",24304000],                //94
//    [2.04,45.2,"Somalia","SOM",24304000],                   //95
//    [25.42,28.13,"South Africa","ZAF",24304000],            //96    
//    [4.51,31.37,"South Sudan","SSD",24304000],              //97
//    [6.55,79.5,"Sri Lanka","LKA",24304000],                 //98    
//    [15.36,32.32,"Sudan","SDN",24304000],                   //99
//    [26.19,31.08,"Swaziland","SWZ",24304000],               //100
//    [59.2,18.03,"Sweden","SWE",24304000],                   //101
//    [46.55,7.28,"Switzerland","CHE",24304000],              //102
//    [33.3,36.18,"Syria","SYR",24304000],                    //103
//    [38.33,68.46,"Tajikistan","TJK",24304000],              //104
    [6.48,39.17,"Tanzania","TZA",1000000],                 //105
//    [13.45,100.31,"Thailand","THA",24304000],               //106    
//    [13.27,16.34,"Gambia","GMB",24304000],                  //107
//    [29.65,91.17,"Tibetan","CHN",24304000],                 //108
//    [-8.52,125.43,"Timor-Leste","TLS",24304000],            //109
//    [6.07,1.13,"Togo","TGO",24304000],                      //110
//    [39.56,32.52,"Turkey","TUR",24304000],                  //111
//    [37.57,58.23,"Turkmenistan","TKM",24304000],            //112
    [19.00,32.33,"Uganda","UGA",1000000]                       //113
//    [50.26,30.31,"Ukraine","UKR",24304000],                 //114
//    [24.28,54.22,"United Arab Emirates","ARE",24304000],    //115    
//    [51.3,5.00,"United Kingdom","GBR",24304000],            //116
//    [38.53,77.02,"United States","USA",24304000],           //117
//    [41.19,69.15,"Uzbekistan","UZB",24304000],              //118
//    [10.29,66.52,"Venezuela","VEN",24304000],               //119
//    [21.02,105.51,"Vietnam","VNM",24304000],                //120
//    [25.19,-13.18,"Western Sahara","ESH",24304000],         //121
//    [15.21,44.12,"Yemen","YEM",24304000],                   //122
//    [15.25,28.17,"Zambia","ZMB",24304000],                  //123
//    [17.49,31.02,"Zimbabwe","ZWE",24304000],                //124
//    [4.36,74.05,"Colombia","COL",6771993]                  //125
    ];
    var strength_scale = 
        d3.scale.linear()
        .range([2, 20]) /* thickness range for flow lines */
        .domain([1.6, d3.max(links, function(d) {
            return d.strength;
    })]);
    
     var color_scale = 
         d3.scale.linear().range([0, 1]).domain([0, d3.max(links, function(d) {return d.strength;})]);
    
    //if (d.strength<1000)
    // var color_scale = 
    //     d3.scale.linear().range([0, 1]).domain([0, d3.max(links, function(d) {
    //     return d.strength;
    // })]);
    
        
    var tooltip = d3.select("#tooltop").attr("class", "d3-tip");
    var svg = d3.select("#arcmap").append("svg").attr("width", width).attr("height", height);
    
    var geo = svg.append("g").attr("class", "geo");
    var g_lines = svg.append("g").attr("class", "lines");
    var g_circles = svg.append("g").attr("class", "circles");
    var g_midpoints = svg.append("g").attr("class", "midpoints");
    
    //SHADOW DEFINITION
    createDefs(svg.append('svg:defs'));
    d3.json("ROWCA_COUNTRIES_2015.json", function(topology) {
        console.log(topology);
      geo.append("path")
          .datum(topojson.feature(topology, topology.objects.collection))
          .attr("d", d3.geo.path().projection(projection));
    }); 
    
    //ABSTÄNDE BESCHRIFTUNG ZU KREISEN
    $.each(circles, function(i, d) {
        
        if(d[3]=="AGO"||d[3]=="BDI"||d[3]=="COL"){
            var decal_y=15
        }
        else if(d[3]=="RWA"){
            var decal_y=-6
        }
        else if(d[3]=="TZA"){
            var decal_y=15
        }
        else if(d[3]=="UGA"){
            var decal_y=-10
        }
        else{
            var decal_y=4;
            var decal_x=-0.0002;
        };
        g_circles.append("circle")
        .attr("class", "circle")
        .attr("id", "circle" + i)
        .attr("r", Math.sqrt(d[4])/Math.sqrt(100000))
        .attr("cx", projection(d)[0])
        .attr("cy", projection(d)[1])
        //.attr("title", d[2]+":"+d[4])
        g_circles.append("text").attr("class", "label") 
        .text(d[3])
        .attr('x', projection(d)[0])
        .attr('y', projection(d)[1]+decal_y);
        //console.log(projection(d)[0],projection(d)[1])
    });
    var fnb = d3.format(",.0f");
    g_lines.selectAll(".link_line")
        .data(links)
        .enter()
        .append("path")
        .attr("class", "link_line")
        //.attr("title",function(d){return d.name;})
        .attr("fill", function(d) {
            return d3color(color_scale(d.strength));
        })
        .attr("id", function(i, d) {
            return "link_line" + d;
        })
        .attr("d", function(d) {
        return drawCurve(d);
        })
        .on('mouseover', function(d) {
          tooltip.html("<span class='name'>"+d.name+" : </span><span class='label1'>"+fnb((d.strength*100000).toFixed(0))+"</span>");
          tooltip.attr('x', d3.event.pageX );
          tooltip.attr('y', d3.event.pageY +10);
          tooltip
            .style('display', 'block')
            //.style('height', '30px')
            //.style('width', '30px')
            .style('top', (d3.event.pageY+10) + 'px')
            .style('left', (d3.event.pageX) + 'px');
            //console.log(d3.event.pageY);
        })
        .on('mouseout', function() {
          tooltip.style('display', 'none');
        })
        .on('mousemove', function(d) {
            tooltip.style('top', (d3.event.pageY+10 ) + 'px')
            .style('left', (d3.event.pageX ) + 'px');
        })
    function drawCurve(d) {
        
        var slope = Math.atan2((+d3.select('#circle' + d.target).attr("cy") - d3.select('#circle' + d.source).attr("cy")), (+d3.select('#circle' + d.target).attr("cx") - d3.select('#circle' + d.source).attr("cx")));
        
        var slopePlus90 = Math.atan2((+d3.select('#circle' + d.target).attr("cy") - d3.select('#circle' + d.source).attr("cy")), (+d3.select('#circle' + d.target).attr("cx") - d3.select('#circle' + d.source).attr("cx"))) + (Math.PI / 2);
        var sourceX = +d3.select('#circle' + d.source).attr("cx");
        var sourceY = +d3.select('#circle' + d.source).attr("cy");
        var targetX = +d3.select('#circle' + d.target).attr("cx");
        var targetY = +d3.select('#circle' + d.target).attr("cy");
        var radiusX = +d3.select('#circle' + d.source).attr("r")+2;
        var radiusY = +d3.select('#circle' + d.target).attr("r")+2;
        
        var radius = 0;
        console.log(d)
        //TODO RADIUS X RADIUS Y + CLASSIF POUR LES FLECHES
        var arrowOffset = 14;
        
        var points = [];
        
        //Less than 10 000
        if(d.strength<0.1){
            points.push([sourceX + radiusX * Math.cos(slope) - strength_scale(0.2) * Math.cos(slopePlus90), sourceY + radiusX * Math.sin(slope) - strength_scale(0.2) * Math.sin(slopePlus90)]);
            
            points.push([sourceX + radiusX* Math.cos(slope) , sourceY + radiusX * Math.sin(slope) ]);
            
            points.push([targetX - radiusY * Math.cos(slope), targetY - radiusY * Math.sin(slope)]);
            
            points.push([targetX - (radiusY) * Math.cos(slope) - strength_scale(0.2) * Math.cos(slopePlus90), targetY - radiusY  * Math.sin(slope) - strength_scale(0.2 ) * Math.sin(slopePlus90)]);
            
            points.push([targetX - (radiusY + arrowOffset) * Math.cos(slope) - strength_scale(0.2) * Math.cos(slopePlus90), targetY - (radiusY + arrowOffset) * Math.sin(slope) - strength_scale(0.2) * Math.sin(slopePlus90)]);
            
            return d3LineLinear(points) + "Z";
        }
        //Between 10 000 and 50 000
        if(d.strength<0.5&&d.strength>0.1){
            points.push([sourceX + radiusX * Math.cos(slope) - strength_scale(2) * Math.cos(slopePlus90), sourceY + radiusX * Math.sin(slope) - strength_scale(2) * Math.sin(slopePlus90)]);
            
            points.push([sourceX + radiusX* Math.cos(slope) , sourceY + radiusX * Math.sin(slope) ]);
            
            points.push([targetX - radiusY * Math.cos(slope), targetY - radiusY * Math.sin(slope)]);
            
            points.push([targetX - (radiusY + arrowOffset) * Math.cos(slope) - strength_scale(2 + (arrowOffset / 2)) * Math.cos(slopePlus90), targetY - (radiusY + arrowOffset) * Math.sin(slope) - strength_scale(2 + (arrowOffset / 2)) * Math.sin(slopePlus90)]);
            
            points.push([targetX - (radiusY + arrowOffset) * Math.cos(slope) - strength_scale(2) * Math.cos(slopePlus90), targetY - (radiusY + arrowOffset) * Math.sin(slope) - strength_scale(2) * Math.sin(slopePlus90)]);
            
            return d3LineLinear(points) + "Z";
        }
        //Between 50 000 and 100 000
        if(d.strength<1&&d.strength>0.5){
            points.push([sourceX + radiusX * Math.cos(slope) - strength_scale(4) * Math.cos(slopePlus90), sourceY + radiusX * Math.sin(slope) - strength_scale(4) * Math.sin(slopePlus90)]);
            
            points.push([sourceX + radiusX* Math.cos(slope) , sourceY + radiusX * Math.sin(slope) ]);
            
            points.push([targetX - radiusY * Math.cos(slope), targetY - radiusY * Math.sin(slope)]);
            
            points.push([targetX - (radiusY + arrowOffset) * Math.cos(slope) - strength_scale(4 + (arrowOffset / 2)) * Math.cos(slopePlus90), targetY - (radiusY + arrowOffset) * Math.sin(slope) - strength_scale(4 + (arrowOffset / 2)) * Math.sin(slopePlus90)]);
            
            points.push([targetX - (radiusY + arrowOffset) * Math.cos(slope) - strength_scale(4) * Math.cos(slopePlus90), targetY - (radiusY + arrowOffset) * Math.sin(slope) - strength_scale(4) * Math.sin(slopePlus90)]);
            
            return d3LineLinear(points) + "Z";
        }
        //Between 100 000 and 600 000
        if(d.strength>1&&d.strength<10){
            points.push([sourceX + radiusX * Math.cos(slope) - strength_scale(7) * Math.cos(slopePlus90), sourceY + radiusX * Math.sin(slope) - strength_scale(7) * Math.sin(slopePlus90)]);
            
            points.push([sourceX + radiusX* Math.cos(slope) , sourceY + radiusX * Math.sin(slope) ]);
            
            points.push([targetX - radiusY * Math.cos(slope), targetY - radiusY * Math.sin(slope)]);
            
            points.push([targetX - (radiusY + arrowOffset) * Math.cos(slope) - strength_scale(7 + (arrowOffset / 2)) * Math.cos(slopePlus90), targetY - (radiusY + arrowOffset) * Math.sin(slope) - strength_scale(7 + (arrowOffset / 2)) * Math.sin(slopePlus90)]);
            
            points.push([targetX - (radiusY + arrowOffset) * Math.cos(slope) - strength_scale(7) * Math.cos(slopePlus90), targetY - (radiusY + arrowOffset) * Math.sin(slope) - strength_scale(7) * Math.sin(slopePlus90)]);
            
            return d3LineLinear(points) + "Z";
        }
        //More than 1 000 000
        if(d.strength>10){
            points.push([sourceX + radiusX* Math.cos(slope) - strength_scale(20) * Math.cos(slopePlus90), sourceY + radiusX * Math.sin(slope) - strength_scale(20) * Math.sin(slopePlus90)]);
            
            points.push([sourceX + radiusX* Math.cos(slope) , sourceY + radiusX * Math.sin(slope) ]);
            //points.push([sourceX - radiusX * Math.cos(slope), sourceY - radiusX * Math.sin(slope) ]);
            
            points.push([targetX - radiusY * Math.cos(slope), targetY - radiusY * Math.sin(slope)]);
            
            points.push([targetX - (radiusY + arrowOffset) * Math.cos(slope) - strength_scale(20 + (arrowOffset / 2)) * Math.cos(slopePlus90), targetY - (radiusY + arrowOffset) * Math.sin(slope) - strength_scale(20 + (arrowOffset / 2)) * Math.sin(slopePlus90)]);
            
            points.push([targetX - (radiusY + arrowOffset) * Math.cos(slope) - strength_scale(20) * Math.cos(slopePlus90), targetY - (radiusY + arrowOffset) * Math.sin(slope) - strength_scale(20) * Math.sin(slopePlus90)]);
            
            return d3LineLinear(points) + "Z";
        }
        else{console.log("haha")}
    }
            // points.push([sourceX + radiusX * Math.cos(slope) - strength_scale(d.strength) * Math.cos(slopePlus90), sourceY + radiusX * Math.sin(slope) - strength_scale(d.strength) * Math.sin(slopePlus90)]);
            
            // points.push([sourceX - radius * Math.cos(slope), sourceY - radius * Math.sin(slope)]);
            
            // points.push([targetX - radiusY * Math.cos(slope), targetY - radiusY * Math.sin(slope)]);
            
            // points.push([targetX - (radiusY + arrowOffset) * Math.cos(slope) - strength_scale(d.strength + (arrowOffset / 2)) * Math.cos(slopePlus90), targetY - (radiusY + arrowOffset) * Math.sin(slope) - strength_scale(d.strength + (arrowOffset / 2)) * Math.sin(slopePlus90)]);
            
            // points.push([targetX - (radiusY + arrowOffset) * Math.cos(slope) - strength_scale(d.strength) * Math.cos(slopePlus90), targetY - (radiusY + arrowOffset) * Math.sin(slope) - strength_scale(d.strength) * Math.sin(slopePlus90)]);
            
            // return d3LineLinear(points) + "Z";
})();
});//]]> 

