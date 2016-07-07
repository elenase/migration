


<html><head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Flow Visualization - Straight, Arrows - jsFiddle demo by pierregeo</title>
  
                <link rel="stylesheet" type="text/css" href="css/arc_map/normalize.css">
                <link rel="stylesheet" type="text/css" href="Flow%20Visualization%20-%20Straight,%20Arrows%20-%20jsFiddle%20demo%20by%20pierregeo_fichiers/result-light.css">
                <link rel="stylesheet" type="text/css" href="css/arc_map/bootstrap.min.css">
                <link rel="stylesheet" type="text/css" href="css/arc_map/style_arc_map.css">
                <link rel="stylesheet" type="text/css" href="css/arc_map/tipsy.css">
                
                <script type="text/javascript" src="js/arc_map_js/jquery.js"></script>
                <script type="text/javascript" src="js/arc_map_js/d3.js"></script>
                <script type="text/javascript" src="js/arc_map_js/topojson.js"></script>
                <script type="text/javascript" src="js/arc_map_js/underscore.js"></script>
                <script type="text/javascript" src="js/arc_map_js/tipsy.js"></script>
                <script src="js/arc_map_js/datamaps.world.min.js"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3-legend/1.5.0/d3-legend.js"></script>
    
    
    

    
  

  





</head>
<body>
    <div class="container" style="width:1000px">    
        <div id="title"><h2>Refugeeflows in 1960</h2><br></div>
        <div id="tooltop"></div>
        <div id="arcmap"></div>
        <div class="row">
            <div class="col-md-3" id="legendfleche">
                <svg version="1.0">
                <g>
                    <text transform="matrix(1 0 0 1 130 50.5964)" fill="#010101" font-family="'ArialMT'" font-size="12">less than 10,000</text>
                    <text transform="matrix(1 0 0 1 154 70.2343)" fill="#010101" font-family="'ArialMT'" font-size="12">between 10,000 and 50,000</text>
                    <text transform="matrix(1 0 0 1 157 91.3015)" fill="#010101" font-family="'ArialMT'" font-size="12">bewteen 50,000 and 100,000</text>
                    <text transform="matrix(1 0 0 1 160 113.8712)" fill="#010101" font-family="'ArialMT'" font-size="12">between 100,000 and 600,000</text>
                    <text transform="matrix(1 0 0 1 140 143.4887)" fill="#010101" font-family="'ArialMT'" font-size="12">more than 1,500,000</text>
                </g>
                <path id="link_line252_1_" fill="#3486B5" stroke="#FFFFFF" stroke-width="0.5" stroke-miterlimit="10" d="M6.3,104.8l0,9.5l70.8,0
                    l-14-19.2l0,9.7L6.3,104.8z"></path>
                <polygon fill="#C9C9C9" points="77.1,47.9 6.7,47.9 6.7,46.9 75.5,46.8 75.5,45.2 78,47.9 "></polygon>
                <path id="link_line258_1_" fill="#073958" d="M6.7,127.2l-0.1,27.6l70.2,0.1L63,117.6l0,9.7L6.7,127.2z"></path>
                <path id="link_line233_1_" fill="#358EBD" d="M6.6,85.9l0,5.3h70L62.6,76.1l0,9.7L6.6,85.9z"></path>
                <path id="link_line194_1_" fill="#3690C0" d="M6.5,67.6l0,2.6l70.5,0L63,57.8l0,9.7L6.5,67.6z"></path>
                <text transform="matrix(1 0 0 1 65 22.2631)" fill="#010101" font-family="'ArialMT'" font-size="14">Number of migrants</text>
                </svg>
            </div>
            <div class="col-md-6" id="legendcercle">
                <svg>
                    <text transform="matrix(1 0 0 1 65 40.2631)" fill="#010101" font-family="'ArialMT'" font-size="12">Country population in 2011</text>
                    <circle id="circle2_1_" fill="#FFFFFF" stroke="#676767" stroke-miterlimit="10" cx="48.2" cy="105.7" r="41.8"></circle>
                    <circle id="circle11_1_" fill="#FFFFFF" stroke="#676767" stroke-miterlimit="10" cx="48.2" cy="133.5" r="14"></circle>
                    <rect x="96.9" y="119.4" fill="none" width="129" height="50"></rect>
                    <text transform="matrix(1 0 0 1 120 127.9577)" fill="#010101" font-family="'MyriadPro-Regular'" font-size="12">20,000,000</text>
                    <rect x="96.9" y="64" fill="none" width="129" height="50"></rect>
                    <text transform="matrix(1 0 0 1 116.8535 70)" fill="#010101" font-family="'MyriadPro-Regular'" font-size="12">174,500,000</text>
                    <circle id="circle3_1_" fill="#FFFFFF" stroke="#676767" stroke-miterlimit="10" cx="48.2" cy="144.4" r="4"></circle>
                    <rect x="96.9" y="140.4" fill="none" width="129" height="50"></rect>
                    <text transform="matrix(1 0 0 1 122.3 145)" fill="#010101" font-family="'MyriadPro-Regular'" font-size="12">1,500,000</text>
                </svg>
            </div>
            <div class="col-md-4" id="sources" style="width:200px"><p style="font-size:10px">Sources: United Nations, Department of Economic and Social Affairs (2013). Trends in International Migrant Stock: Migrants by Destination and Origin (United Nations database, POP/DB/MIG/Stock/Rev.2013).</p></div>
        </div>
    </div>

</body>
</html>
