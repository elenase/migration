// See post: http://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps


//for (var x = 0; x < 16; x++) {
    var mi = 1;
    
    var markers = new L.FeatureGroup();
    
    var map_origin = L.map( 'map_origin', {
      center: [33.00, 44.00],
      minZoom: 4,
      maxzoom: 13,
      zoom: 6
    });

    L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
       subdomains: ['otile1','otile2','otile3','otile4']
    }).addTo( map_origin );

    map_origin.attributionControl.addAttribution('Displacement data &copy; <a href="http://iraqdtm.iom.int/Downloads.aspx">IOM Iraq</a>');
    
//    var myicon = L.circle([51.508, -0.11], 500, {
//    color: 'red',
//    fillColor: '#f03',
//    fillOpacity: 0.5
//}).addTo(mymap);

    var myURL = jQuery( 'script[src$="origin_map.js"]' ).attr( 'src' ).replace( 'origin_map.js', '' );


    var myIcon = L.icon({
      iconUrl: myURL + '/maps/images/form_abwanderung.png',
      iconSize: [40, 40],
      iconAnchor: [9, 21],
    });
//################################# MARKER ###############################################################################


    //var values = [DATA_ORIGIN.value1, DATA_ORIGIN.value2];
    
    function irgendwas(mi) {
    
    
        if (event != undefined) {
        var srcElement = event.srcElement;
        var btns = document.getElementsByClassName('btn_monate');
        for (var i = 0; i < btns.length; i++) {
            var btn = btns[i];
            btn.style.backgroundColor = 'white';
            if (btn == srcElement) {
                btn.style.backgroundColor = '#C0D9AF';
            }
        }
    }
    
    
    //map_origin.removeLayer(markers);
   
   markers.clearLayers();
    
    //markers = 0;   
    for ( var i = 0; i < DATA_ORIGIN.length; ++i )
   // var testname = DATA_ORIGIN[i].value1;    

{
        
      var popup_origin = DATA_ORIGIN[i].name +
                  '<br/><b>IDPs:</b> ' +  DATA_ORIGIN[i]["value"+mi] + '<br/><b>WHAT:</b> ' + DATA_ORIGIN[i]["happening"+mi] ; // mi: mapindex
          
      if (DATA_ORIGIN[i]["value"+mi] != "0") {
      var m_origin = L.marker( [DATA_ORIGIN[i].Latitude, DATA_ORIGIN[i].Longitude], {icon: myIcon, html: DATA_ORIGIN[i]["value"+mi]} )
                      .bindPopup( popup_origin );
         }       

    markers.addLayer(m_origin);
}
    map_origin.addLayer(markers);
    };
irgendwas(1);











