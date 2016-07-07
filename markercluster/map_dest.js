//for (var x = 0; x < 16; x++) {

var map = L.map('map', {
//    center: [33.00, 44.00],
    minZoom: 4,
    maxzoom: 13

});

map.on("load", function(){
    irgendwie(1)
})

map.setView(L.latLng(33.8, 44.00), 6);

L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
}).addTo(map);

var myURL = jQuery('script[src$="map_dest.js"]').attr('src').replace('map_dest.js', '');

var myIcon = L.icon({
    iconUrl: myURL + '/images/icon.png',
    iconRetinaUrl: myURL + '/images/icon.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});

var markerClusters = [];

function clearLayers() {
    for (var i = 0; i < markerClusters.length; i++) {
        markerClusters[i].clearLayers();
    }
}


//################################# MARKERCLUSTER ###############################################################################


function irgendwo(mi) {
     


    clearLayers();

    switch (mi) {
        case 1:
            DATA_ANBAR = DATA_ANBAR_SEP14;
            DATA_BABYLON = DATA_BABYLON_SEP14;
            DATA_BASRAH = DATA_BASRAH_SEP14;
            DATA_BAGHDAD = DATA_BAGHDAD_SEP14;
            DATA_DIYALA = DATA_DIYALA_SEP14;
            DATA_DOHUK = DATA_DOHUK_SEP14;
            DATA_ERBIL = DATA_ERBIL_SEP14;
            DATA_KIRKUK = DATA_KIRKUK_SEP14;
            DATA_KERBALA = DATA_KERBALA_SEP14;
            DATA_MISSAN = DATA_MISSAN_SEP14;
            DATA_NAJAF = DATA_NAJAF_SEP14;
            DATA_NINEWA = DATA_NINEWA_SEP14;
            DATA_QADISSYIA = DATA_QADISSYIA_SEP14;
            DATA_SALAHALDIN = DATA_SALAHALDIN_SEP14;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_SEP14;
            DATA_THIQAR = DATA_THIQAR_SEP14;
            DATA_WASSIT = DATA_WASSIT_SEP14;
            statesData = statesData1;
            break;
        case 2:
            DATA_ANBAR = DATA_ANBAR_OCT14;
            DATA_BABYLON = DATA_BABYLON_OCT14;
            DATA_BASRAH = DATA_BASRAH_OCT14;
            DATA_BAGHDAD = DATA_BAGHDAD_OCT14;
            DATA_DIYALA = DATA_DIYALA_OCT14;
            DATA_DOHUK = DATA_DOHUK_OCT14;
            DATA_ERBIL = DATA_ERBIL_OCT14;
            DATA_KIRKUK = DATA_KIRKUK_OCT14;
            DATA_KERBALA = DATA_KERBALA_OCT14;
            DATA_MISSAN = DATA_MISSAN_OCT14;
            DATA_NAJAF = DATA_NAJAF_OCT14;
            DATA_NINEWA = DATA_NINEWA_OCT14;
            DATA_QADISSYIA = DATA_QADISSYIA_OCT14;
            DATA_SALAHALDIN = DATA_SALAHALDIN_OCT14;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_OCT14;
            DATA_THIQAR = DATA_THIQAR_OCT14;
            DATA_WASSIT = DATA_WASSIT_OCT14;
            statesData = statesData2;
            break;
        case 3:
            DATA_ANBAR = DATA_ANBAR_NOV14;
            DATA_BABYLON = DATA_BABYLON_NOV14;
            DATA_BASRAH = DATA_BASRAH_NOV14;
            DATA_BAGHDAD = DATA_BAGHDAD_NOV14;
            DATA_DIYALA = DATA_DIYALA_NOV14;
            DATA_DOHUK = DATA_DOHUK_NOV14;
            DATA_ERBIL = DATA_ERBIL_NOV14;
            DATA_KIRKUK = DATA_KIRKUK_NOV14;
            DATA_KERBALA = DATA_KERBALA_NOV14;
            DATA_MISSAN = DATA_MISSAN_NOV14;
            DATA_NAJAF = DATA_NAJAF_NOV14;
            DATA_NINEWA = DATA_NINEWA_NOV14;
            DATA_QADISSYIA = DATA_QADISSYIA_NOV14;
            DATA_SALAHALDIN = DATA_SALAHALDIN_NOV14;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_NOV14;
            DATA_THIQAR = DATA_THIQAR_NOV14;
            DATA_WASSIT = DATA_WASSIT_NOV14;
            statesData = statesData3;
            break;
        case 4:
            DATA_ANBAR = DATA_ANBAR_DEC14;
            DATA_BABYLON = DATA_BABYLON_DEC14;
            DATA_BASRAH = DATA_BASRAH_DEC14;
            DATA_BAGHDAD = DATA_BAGHDAD_DEC14;
            DATA_DIYALA = DATA_DIYALA_DEC14;
            DATA_DOHUK = DATA_DOHUK_DEC14;
            DATA_ERBIL = DATA_ERBIL_DEC14;
            DATA_KIRKUK = DATA_KIRKUK_DEC14;
            DATA_KERBALA = DATA_KERBALA_DEC14;
            DATA_MISSAN = DATA_MISSAN_DEC14;
            DATA_NAJAF = DATA_NAJAF_DEC14;
            DATA_NINEWA = DATA_NINEWA_DEC14;
            DATA_QADISSYIA = DATA_QADISSYIA_DEC14;
            DATA_SALAHALDIN = DATA_SALAHALDIN_DEC14;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_DEC14;
            DATA_THIQAR = DATA_THIQAR_DEC14;
            DATA_WASSIT = DATA_WASSIT_DEC14;
            statesData = statesData4;
            break;
        case 5:
            DATA_ANBAR = DATA_ANBAR_JAN15;
            DATA_BABYLON = DATA_BABYLON_JAN15;
            DATA_BASRAH = DATA_BASRAH_JAN15;
            DATA_BAGHDAD = DATA_BAGHDAD_JAN15;
            DATA_DIYALA = DATA_DIYALA_JAN15;
            DATA_DOHUK = DATA_DOHUK_JAN15;
            DATA_ERBIL = DATA_ERBIL_JAN15;
            DATA_KIRKUK = DATA_KIRKUK_JAN15;
            DATA_KERBALA = DATA_KERBALA_JAN15;
            DATA_MISSAN = DATA_MISSAN_JAN15;
            DATA_NAJAF = DATA_NAJAF_JAN15;
            DATA_NINEWA = DATA_NINEWA_JAN15;
            DATA_QADISSYIA = DATA_QADISSYIA_JAN15;
            DATA_SALAHALDIN = DATA_SALAHALDIN_JAN15;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_JAN15;
            DATA_THIQAR = DATA_THIQAR_JAN15;
            DATA_WASSIT = DATA_WASSIT_JAN15;
            statesData = statesData5;
            break;
        case 6:
            DATA_ANBAR = DATA_ANBAR_FEB15;
            DATA_BABYLON = DATA_BABYLON_FEB15;
            DATA_BASRAH = DATA_BASRAH_FEB15;
            DATA_BAGHDAD = DATA_BAGHDAD_FEB15;
            DATA_DIYALA = DATA_DIYALA_FEB15;
            DATA_DOHUK = DATA_DOHUK_FEB15;
            DATA_ERBIL = DATA_ERBIL_FEB15;
            DATA_KIRKUK = DATA_KIRKUK_FEB15;
            DATA_KERBALA = DATA_KERBALA_FEB15;
            DATA_MISSAN = DATA_MISSAN_FEB15;
            DATA_MUTHANNA = DATA_MUTHANNA_FEB15;
            DATA_NAJAF = DATA_NAJAF_FEB15;
            DATA_NINEWA = DATA_NINEWA_FEB15;
            DATA_QADISSYIA = DATA_QADISSYIA_FEB15;
            DATA_SALAHALDIN = DATA_SALAHALDIN_FEB15;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_FEB15;
            DATA_THIQAR = DATA_THIQAR_FEB15;
            DATA_WASSIT = DATA_WASSIT_FEB15;
            statesData = statesData6;
            break;
        case 7:
            DATA_ANBAR = DATA_ANBAR_MAR15;
            DATA_BABYLON = DATA_BABYLON_MAR15;
            DATA_BASRAH = DATA_BASRAH_MAR15;
            DATA_BAGHDAD = DATA_BAGHDAD_MAR15;
            DATA_DIYALA = DATA_DIYALA_MAR15;
            DATA_DOHUK = DATA_DOHUK_MAR15;
            DATA_ERBIL = DATA_ERBIL_MAR15;
            DATA_KIRKUK = DATA_KIRKUK_MAR15;
            DATA_KERBALA = DATA_KERBALA_MAR15;
            DATA_MISSAN = DATA_MISSAN_MAR15;
            DATA_MUTHANNA = DATA_MUTHANNA_MAR15;
            DATA_NAJAF = DATA_NAJAF_MAR15;
            DATA_NINEWA = DATA_NINEWA_MAR15;
            DATA_QADISSYIA = DATA_QADISSYIA_MAR15;
            DATA_SALAHALDIN = DATA_SALAHALDIN_MAR15;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_MAR15;
            DATA_THIQAR = DATA_THIQAR_MAR15;
            DATA_WASSIT = DATA_WASSIT_MAR15;
            statesData = statesData7;
            break;
        case 8:
            DATA_ANBAR = DATA_ANBAR_APR15;
            DATA_BABYLON = DATA_BABYLON_APR15;
            DATA_BASRAH = DATA_BASRAH_APR15;
            DATA_BAGHDAD = DATA_BAGHDAD_APR15;
            DATA_DIYALA = DATA_DIYALA_APR15;
            DATA_DOHUK = DATA_DOHUK_APR15;
            DATA_ERBIL = DATA_ERBIL_APR15;
            DATA_KIRKUK = DATA_KIRKUK_APR15;
            DATA_KERBALA = DATA_KERBALA_APR15;
            DATA_MISSAN = DATA_MISSAN_APR15;
            DATA_MUTHANNA = DATA_MUTHANNA_APR15;
            DATA_NAJAF = DATA_NAJAF_APR15;
            DATA_NINEWA = DATA_NINEWA_APR15;
            DATA_QADISSYIA = DATA_QADISSYIA_APR15;
            DATA_SALAHALDIN = DATA_SALAHALDIN_APR15;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_APR15;
            DATA_THIQAR = DATA_THIQAR_APR15;
            DATA_WASSIT = DATA_WASSIT_APR15;
            statesData = statesData8;
            break;
        case 9:
            DATA_ANBAR = DATA_ANBAR_MAY15;
            DATA_BABYLON = DATA_BABYLON_MAY15;
            DATA_BASRAH = DATA_BASRAH_MAY15;
            DATA_BAGHDAD = DATA_BAGHDAD_MAY15;
            DATA_DIYALA = DATA_DIYALA_MAY15;
            DATA_DOHUK = DATA_DOHUK_MAY15;
            DATA_ERBIL = DATA_ERBIL_MAY15;
            DATA_KIRKUK = DATA_KIRKUK_MAY15;
            DATA_KERBALA = DATA_KERBALA_MAY15;
            DATA_MISSAN = DATA_MISSAN_MAY15;
            DATA_MUTHANNA = DATA_MUTHANNA_MAY15;
            DATA_NAJAF = DATA_NAJAF_MAY15;
            DATA_NINEWA = DATA_NINEWA_MAY15;
            DATA_QADISSYIA = DATA_QADISSYIA_MAY15;
            DATA_SALAHALDIN = DATA_SALAHALDIN_MAY15;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_MAY15;
            DATA_THIQAR = DATA_THIQAR_MAY15;
            DATA_WASSIT = DATA_WASSIT_MAY15;
            statesData = statesData9;
            break;
        case 10:
            DATA_ANBAR = DATA_ANBAR_JUN15;
            DATA_BABYLON = DATA_BABYLON_JUN15;
            DATA_BASRAH = DATA_BASRAH_JUN15;
            DATA_BAGHDAD = DATA_BAGHDAD_JUN15;
            DATA_DIYALA = DATA_DIYALA_JUN15;
            DATA_DOHUK = DATA_DOHUK_JUN15;
            DATA_ERBIL = DATA_ERBIL_JUN15;
            DATA_KIRKUK = DATA_KIRKUK_JUN15;
            DATA_KERBALA = DATA_KERBALA_JUN15;
            DATA_MISSAN = DATA_MISSAN_JUN15;
            DATA_MUTHANNA = DATA_MUTHANNA_JUN15;
            DATA_NAJAF = DATA_NAJAF_JUN15;
            DATA_NINEWA = DATA_NINEWA_JUN15;
            DATA_QADISSYIA = DATA_QADISSYIA_JUN15;
            DATA_SALAHALDIN = DATA_SALAHALDIN_JUN15;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_JUN15;
            DATA_THIQAR = DATA_THIQAR_JUN15;
            DATA_WASSIT = DATA_WASSIT_JUN15;
            statesData = statesData10;
            break;
        case 11:
            DATA_ANBAR = DATA_ANBAR_JUL15;
            DATA_BABYLON = DATA_BABYLON_JUL15;
            DATA_BASRAH = DATA_BASRAH_JUL15;
            DATA_BAGHDAD = DATA_BAGHDAD_JUL15;
            DATA_DIYALA = DATA_DIYALA_JUL15;
            DATA_DOHUK = DATA_DOHUK_JUL15;
            DATA_ERBIL = DATA_ERBIL_JUL15;
            DATA_KIRKUK = DATA_KIRKUK_JUL15;
            DATA_KERBALA = DATA_KERBALA_JUL15;
            DATA_MISSAN = DATA_MISSAN_JUL15;
            DATA_MUTHANNA = DATA_MUTHANNA_JUL15;
            DATA_NAJAF = DATA_NAJAF_JUL15;
            DATA_NINEWA = DATA_NINEWA_JUL15;
            DATA_QADISSYIA = DATA_QADISSYIA_JUL15;
            DATA_SALAHALDIN = DATA_SALAHALDIN_JUL15;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_JUL15;
            DATA_THIQAR = DATA_THIQAR_JUL15;
            DATA_WASSIT = DATA_WASSIT_JUL15;
            statesData = statesData11;
            break;
        case 12:
            DATA_ANBAR = DATA_ANBAR_AUG15;
            DATA_BABYLON = DATA_BABYLON_AUG15;
            DATA_BASRAH = DATA_BASRAH_AUG15;
            DATA_BAGHDAD = DATA_BAGHDAD_AUG15;
            DATA_DIYALA = DATA_DIYALA_AUG15;
            DATA_DOHUK = DATA_DOHUK_AUG15;
            DATA_ERBIL = DATA_ERBIL_AUG15;
            DATA_KIRKUK = DATA_KIRKUK_AUG15;
            DATA_KERBALA = DATA_KERBALA_AUG15;
            DATA_MISSAN = DATA_MISSAN_AUG15;
            DATA_MUTHANNA = DATA_MUTHANNA_AUG15;
            DATA_NAJAF = DATA_NAJAF_AUG15;
            DATA_NINEWA = DATA_NINEWA_AUG15;
            DATA_QADISSYIA = DATA_QADISSYIA_AUG15;
            DATA_SALAHALDIN = DATA_SALAHALDIN_AUG15;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_AUG15;
            DATA_THIQAR = DATA_THIQAR_AUG15;
            DATA_WASSIT = DATA_WASSIT_AUG15;
            statesData = statesData12;
            break;
        case 13:
            DATA_ANBAR = DATA_ANBAR_SEP15;
            DATA_BABYLON = DATA_BABYLON_SEP15;
            DATA_BASRAH = DATA_BASRAH_SEP15;
            DATA_BAGHDAD = DATA_BAGHDAD_SEP15;
            DATA_DIYALA = DATA_DIYALA_SEP15;
            DATA_DOHUK = DATA_DOHUK_SEP15;
            DATA_ERBIL = DATA_ERBIL_SEP15;
            DATA_KIRKUK = DATA_KIRKUK_SEP15;
            DATA_KERBALA = DATA_KERBALA_SEP15;
            DATA_MISSAN = DATA_MISSAN_SEP15;
            DATA_MUTHANNA = DATA_MUTHANNA_SEP15;
            DATA_NAJAF = DATA_NAJAF_SEP15;
            DATA_NINEWA = DATA_NINEWA_SEP15;
            DATA_QADISSYIA = DATA_QADISSYIA_SEP15;
            DATA_SALAHALDIN = DATA_SALAHALDIN_SEP15;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_SEP15;
            DATA_THIQAR = DATA_THIQAR_SEP15;
            DATA_WASSIT = DATA_WASSIT_SEP15;
            statesData = statesData13;
            break;
        case 14:
            DATA_ANBAR = DATA_ANBAR_OCT15;
            DATA_BABYLON = DATA_BABYLON_OCT15;
            DATA_BASRAH = DATA_BASRAH_OCT15;
            DATA_BAGHDAD = DATA_BAGHDAD_OCT15;
            DATA_DIYALA = DATA_DIYALA_OCT15;
            DATA_DOHUK = DATA_DOHUK_OCT15;
            DATA_ERBIL = DATA_ERBIL_OCT15;
            DATA_KIRKUK = DATA_KIRKUK_OCT15;
            DATA_KERBALA = DATA_KERBALA_OCT15;
            DATA_MISSAN = DATA_MISSAN_OCT15;
            DATA_MUTHANNA = DATA_MUTHANNA_OCT15;
            DATA_NAJAF = DATA_NAJAF_OCT15;
            DATA_NINEWA = DATA_NINEWA_OCT15;
            DATA_QADISSYIA = DATA_QADISSYIA_OCT15;
            DATA_SALAHALDIN = DATA_SALAHALDIN_OCT15;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_OCT15;
            DATA_THIQAR = DATA_THIQAR_OCT15;
            DATA_WASSIT = DATA_WASSIT_OCT15;
            statesData = statesData14;
            break;
        case 15:
            DATA_ANBAR = DATA_ANBAR_NOV15;
            DATA_BABYLON = DATA_BABYLON_NOV15;
            DATA_BASRAH = DATA_BASRAH_NOV15;
            DATA_BAGHDAD = DATA_BAGHDAD_NOV15;
            DATA_DIYALA = DATA_DIYALA_NOV15;
            DATA_DOHUK = DATA_DOHUK_NOV15;
            DATA_ERBIL = DATA_ERBIL_NOV15;
            DATA_KIRKUK = DATA_KIRKUK_NOV15;
            DATA_KERBALA = DATA_KERBALA_NOV15;
            DATA_MISSAN = DATA_MISSAN_NOV15;
            DATA_MUTHANNA = DATA_MUTHANNA_NOV15;
            DATA_NAJAF = DATA_NAJAF_NOV15;
            DATA_NINEWA = DATA_NINEWA_NOV15;
            DATA_QADISSYIA = DATA_QADISSYIA_NOV15;
            DATA_SALAHALDIN = DATA_SALAHALDIN_NOV15;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_NOV15;
            DATA_THIQAR = DATA_THIQAR_NOV15;
            DATA_WASSIT = DATA_WASSIT_NOV15;
            statesData = statesData15;
            break;
        case 16:
            DATA_ANBAR = DATA_ANBAR_DEC15;
            DATA_BABYLON = DATA_BABYLON_DEC15;
            DATA_BASRAH = DATA_BASRAH_DEC15;
            DATA_BAGHDAD = DATA_BAGHDAD_DEC15;
            DATA_DIYALA = DATA_DIYALA_DEC15;
            DATA_DOHUK = DATA_DOHUK_DEC15;
            DATA_ERBIL = DATA_ERBIL_DEC15;
            DATA_KIRKUK = DATA_KIRKUK_DEC15;
            DATA_KERBALA = DATA_KERBALA_DEC15;
            DATA_MISSAN = DATA_MISSAN_DEC15;
            DATA_MUTHANNA = DATA_MUTHANNA_DEC15;
            DATA_NAJAF = DATA_NAJAF_DEC15;
            DATA_NINEWA = DATA_NINEWA_DEC15;
            DATA_QADISSYIA = DATA_QADISSYIA_DEC15;
            DATA_SALAHALDIN = DATA_SALAHALDIN_DEC15;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_DEC15;
            DATA_THIQAR = DATA_THIQAR_DEC15;
            DATA_WASSIT = DATA_WASSIT_DEC15;
            statesData = statesData16;
            break;
        case 17:
            DATA_ANBAR = DATA_ANBAR_JAN16;
            DATA_BABYLON = DATA_BABYLON_JAN16;
            DATA_BASRAH = DATA_BASRAH_JAN16;
            DATA_BAGHDAD = DATA_BAGHDAD_JAN16;
            DATA_DIYALA = DATA_DIYALA_JAN16;
            DATA_DOHUK = DATA_DOHUK_JAN16;
            DATA_ERBIL = DATA_ERBIL_JAN16;
            DATA_KIRKUK = DATA_KIRKUK_JAN16;
            DATA_KERBALA = DATA_KERBALA_JAN16;
            DATA_MISSAN = DATA_MISSAN_JAN16;
            DATA_MUTHANNA = DATA_MUTHANNA_JAN16;
            DATA_NAJAF = DATA_NAJAF_JAN16;
            DATA_NINEWA = DATA_NINEWA_JAN16;
            DATA_QADISSYIA = DATA_QADISSYIA_JAN16;
            DATA_SALAHALDIN = DATA_SALAHALDIN_JAN16;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_JAN16;
            DATA_THIQAR = DATA_THIQAR_JAN16;
            DATA_WASSIT = DATA_WASSIT_JAN16;
            break;
        case 18:
            DATA_ANBAR = DATA_ANBAR_FEB16;
            DATA_BABYLON = DATA_BABYLON_FEB16;
            DATA_BASRAH = DATA_BASRAH_FEB16;
            DATA_BAGHDAD = DATA_BAGHDAD_FEB16;
            DATA_DIYALA = DATA_DIYALA_FEB16;
            DATA_DOHUK = DATA_DOHUK_FEB16;
            DATA_ERBIL = DATA_ERBIL_FEB16;
            DATA_KIRKUK = DATA_KIRKUK_FEB16;
            DATA_KERBALA = DATA_KERBALA_FEB16;
            DATA_MISSAN = DATA_MISSAN_FEB16;
            DATA_MUTHANNA = DATA_MUTHANNA_FEB16;
            DATA_NAJAF = DATA_NAJAF_FEB16;
            DATA_NINEWA = DATA_NINEWA_FEB16;
            DATA_QADISSYIA = DATA_QADISSYIA_FEB16;
            DATA_SALAHALDIN = DATA_SALAHALDIN_FEB16;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_FEB16;
            DATA_THIQAR = DATA_THIQAR_FEB16;
            DATA_WASSIT = DATA_WASSIT_FEB16;
            break;
        case 19:
            DATA_ANBAR = DATA_ANBAR_MAR16;
            DATA_BABYLON = DATA_BABYLON_MAR16;
            DATA_BASRAH = DATA_BASRAH_MAR16;
            DATA_BAGHDAD = DATA_BAGHDAD_MAR16;
            DATA_DIYALA = DATA_DIYALA_MAR16;
            DATA_DOHUK = DATA_DOHUK_MAR16;
            DATA_ERBIL = DATA_ERBIL_MAR16;
            DATA_KIRKUK = DATA_KIRKUK_MAR16;
            DATA_KERBALA = DATA_KERBALA_MAR16;
            DATA_MISSAN = DATA_MISSAN_MAR16;
            DATA_MUTHANNA = DATA_MUTHANNA_MAR16;
            DATA_NAJAF = DATA_NAJAF_MAR16;
            DATA_NINEWA = DATA_NINEWA_MAR16;
            DATA_QADISSYIA = DATA_QADISSYIA_MAR16;
            DATA_SALAHALDIN = DATA_SALAHALDIN_MAR16;
            DATA_SULAYMANIYA = DATA_SULAYMANIYA_MAR16;
            DATA_THIQAR = DATA_THIQAR_MAR16;
            DATA_WASSIT = DATA_WASSIT_MAR16;
    }






    //var DATA_ANBAR = [DATA_ANBAR1, DATA_ANBAR2]
    var markerClusters_anbar = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_ANBAR[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });

    markerClusters.push(markerClusters_anbar);



    for (var i = 0; i < DATA_ANBAR.length; ++i)
    {
        var popup = DATA_ANBAR[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_ANBAR[i].IDP_Individuals;

        var m_anbar = L.marker([DATA_ANBAR[i].Latitude, DATA_ANBAR[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_anbar.addLayer(m_anbar);
    }

    map.addLayer(markerClusters_anbar);



//}

    ////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_babylon = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_BABYLON[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });

    markerClusters.push(markerClusters_babylon);



    for (var i = 0; i < DATA_BABYLON.length; ++i)
    {
        var popup = DATA_BABYLON[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_BABYLON[i].IDP_Individuals;

        var m_babylon = L.marker([DATA_BABYLON[i].Latitude, DATA_BABYLON[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_babylon.addLayer(m_babylon);
    }

    map.addLayer(markerClusters_babylon);



    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_baghdad = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_BAGHDAD[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_baghdad);


    for (var i = 0; i < DATA_BAGHDAD.length; ++i)
    {
        var popup = DATA_BAGHDAD[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_BAGHDAD[i].IDP_Individuals;

        var m_baghdad = L.marker([DATA_BAGHDAD[i].Latitude, DATA_BAGHDAD[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_baghdad.addLayer(m_baghdad);
    }

    map.addLayer(markerClusters_baghdad);



    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_basrah = new L.MarkerClusterGroup
            ({
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_BASRAH[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_basrah);


    for (var i = 0; i < DATA_BASRAH.length; ++i)
    {
        var popup = DATA_BASRAH[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_BASRAH[i].IDP_Individuals;

        var m_basrah = L.marker([DATA_BASRAH[i].Latitude, DATA_BASRAH[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_basrah.addLayer(m_basrah);
    }

    map.addLayer(markerClusters_basrah);



    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_diyala = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_DIYALA[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_diyala);


    for (var i = 0; i < DATA_DIYALA.length; ++i)
    {
        var popup = DATA_DIYALA[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_DIYALA[i].IDP_Individuals;

        var m_diyala = L.marker([DATA_DIYALA[i].Latitude, DATA_DIYALA[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_diyala.addLayer(m_diyala);
    }

    map.addLayer(markerClusters_diyala);



    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_dohuk = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_DOHUK[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_dohuk);


    for (var i = 0; i < DATA_DOHUK.length; ++i)
    {
        var popup = DATA_DOHUK[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_DOHUK[i].IDP_Individuals;

        var m_dohuk = L.marker([DATA_DOHUK[i].Latitude, DATA_DOHUK[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_dohuk.addLayer(m_dohuk);
    }

    map.addLayer(markerClusters_dohuk);



    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_erbil = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_ERBIL[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_erbil);


    for (var i = 0; i < DATA_ERBIL.length; ++i)
    {
        var popup = DATA_ERBIL[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_ERBIL[i].IDP_Individuals;

        var m_erbil = L.marker([DATA_ERBIL[i].Latitude, DATA_ERBIL[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_erbil.addLayer(m_erbil);
    }

    map.addLayer(markerClusters_erbil);



    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_kerbala = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_KERBALA[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_kerbala);


    for (var i = 0; i < DATA_KERBALA.length; ++i)
    {
        var popup = DATA_KERBALA[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_KERBALA[i].IDP_Individuals;

        var m_kerbala = L.marker([DATA_KERBALA[i].Latitude, DATA_KERBALA[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_kerbala.addLayer(m_kerbala);
    }

    map.addLayer(markerClusters_kerbala);



    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_kirkuk = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_KIRKUK[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_kirkuk);


    for (var i = 0; i < DATA_KIRKUK.length; ++i)
    {
        var popup = DATA_KIRKUK[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_KIRKUK[i].IDP_Individuals;

        var m_kirkuk = L.marker([DATA_KIRKUK[i].Latitude, DATA_KIRKUK[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_kirkuk.addLayer(m_kirkuk);
    }

    map.addLayer(markerClusters_kirkuk);



    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_missan = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_MISSAN[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_missan);


    for (var i = 0; i < DATA_MISSAN.length; ++i)
    {
        var popup = DATA_MISSAN[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_MISSAN[i].IDP_Individuals;

        var m_missan = L.marker([DATA_MISSAN[i].Latitude, DATA_MISSAN[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_missan.addLayer(m_missan);
    }

    map.addLayer(markerClusters_missan);

    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_muthanna = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_MUTHANNA[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_muthanna);


    for (var i = 0; i < DATA_MUTHANNA.length; ++i)
    {
        var popup = DATA_MUTHANNA[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_MUTHANNA[i].IDP_Individuals;

        var m_muthanna = L.marker([DATA_MUTHANNA[i].Latitude, DATA_MUTHANNA[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_muthanna.addLayer(m_muthanna);
    }

    map.addLayer(markerClusters_muthanna);


    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_najaf = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_NAJAF[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_najaf);


    for (var i = 0; i < DATA_NAJAF.length; ++i)
    {
        var popup = DATA_NAJAF[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_NAJAF[i].IDP_Individuals;

        var m_najaf = L.marker([DATA_NAJAF[i].Latitude, DATA_NAJAF[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_najaf.addLayer(m_najaf);
    }

    map.addLayer(markerClusters_najaf);




    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_ninewa = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_NINEWA[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_ninewa);


    for (var i = 0; i < DATA_NINEWA.length; ++i)
    {
        var popup = DATA_NINEWA[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_NINEWA[i].IDP_Individuals;

        var m_ninewa = L.marker([DATA_NINEWA[i].Latitude, DATA_NINEWA[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_ninewa.addLayer(m_ninewa);
    }

    map.addLayer(markerClusters_ninewa);




    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_qadissiya = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_QADISSYIA[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_qadissiya);


    for (var i = 0; i < DATA_QADISSYIA.length; ++i)
    {
        var popup = DATA_QADISSYIA[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_QADISSYIA[i].IDP_Individuals;

        var m_qadissiya = L.marker([DATA_QADISSYIA[i].Latitude, DATA_QADISSYIA[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_qadissiya.addLayer(m_qadissiya);
    }

    map.addLayer(markerClusters_qadissiya);



    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_salahaldin = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_SALAHALDIN[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_salahaldin);


    for (var i = 0; i < DATA_SALAHALDIN.length; ++i)
    {
        var popup = DATA_SALAHALDIN[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_SALAHALDIN[i].IDP_Individuals;

        var m_salahaldin = L.marker([DATA_SALAHALDIN[i].Latitude, DATA_SALAHALDIN[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_salahaldin.addLayer(m_salahaldin);
    }

    map.addLayer(markerClusters_salahaldin);



    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_sulaymanyia = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_SULAYMANIYA[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_sulaymanyia);


    for (var i = 0; i < DATA_SULAYMANIYA.length; ++i)
    {
        var popup = DATA_SULAYMANIYA[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_SULAYMANIYA[i].IDP_Individuals;

        var m_sulaymanyia = L.marker([DATA_SULAYMANIYA[i].Latitude, DATA_SULAYMANIYA[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_sulaymanyia.addLayer(m_sulaymanyia);
    }

    map.addLayer(markerClusters_sulaymanyia);



    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_thiqar = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_THIQAR[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_thiqar);


    for (var i = 0; i < DATA_THIQAR.length; ++i)
    {
        var popup = DATA_THIQAR[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_THIQAR[i].IDP_Individuals;

        var m_thiqar = L.marker([DATA_THIQAR[i].Latitude, DATA_THIQAR[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_thiqar.addLayer(m_thiqar);
    }

    map.addLayer(markerClusters_thiqar);



    //////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    var markerClusters_wassit = new L.MarkerClusterGroup
            ({
                maxClusterRadius: 150,
                iconCreateFunction: function (cluster) {
                    var children = cluster.getAllChildMarkers();
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        sum += parseInt(DATA_WASSIT[i].IDP_Individuals);
                    }
                    var small = sum < 50000;
                    var className = small ? 'mycluster1' : 'mycluster2';
                    var size = small ? 35 : 45;
                    return L.divIcon({html: sum, className: className, iconSize: L.point(size, size)});
                }
            });
    markerClusters.push(markerClusters_wassit);


    for (var i = 0; i < DATA_WASSIT.length; ++i)
    {
        var popup = DATA_WASSIT[i].Target_Location +
                '<br/><b>IDPs:</b> ' + DATA_WASSIT[i].IDP_Individuals;

        var m_wassit = L.marker([DATA_WASSIT[i].Latitude, DATA_WASSIT[i].Longitude], {icon: myIcon})
                .bindPopup(popup);

        markerClusters_wassit.addLayer(m_wassit);
    }

    map.addLayer(markerClusters_wassit);

    // }

}
;
irgendwo(1);


//################################################## CHOROPLETH ####################################################################################

var legend = undefined;
var info = undefined;
var geojson = undefined;

function irgendwie(mi) {

//            statesData.clearLayers();



    switch (mi) {
        case 1:
            statesData = statesData1;
            break;
        case 2:
            statesData = statesData2;
            break;
        case 3:
            statesData = statesData3;
            break;
        case 4:
            statesData = statesData4;
            break;
        case 5:
            statesData = statesData5;
            break;
        case 6:
            statesData = statesData6;
            break;
        case 7:
            statesData = statesData7;
            break;
        case 8:
            statesData = statesData8;
            break;
        case 9:
            statesData = statesData9;
            break;
        case 10:
            statesData = statesData10;
            break;
        case 11:
            statesData = statesData11;
            break;
        case 12:
            statesData = statesData12;
            break;
        case 13:
            statesData = statesData13;
            break;
        case 14:
            statesData = statesData14;
            break;
        case 15:
            statesData = statesData15;
            break;
        case 16:
            statesData = statesData16;

    }
    var addInfo = true;
    if (info != undefined) {
        addInfo = false;
    }


    info = L.control();

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info');
        this.update();
        return this._div;
    };

    info.update = function (props) {
        this._div.innerHTML = '<h4>Civilian deaths</h4>' + (props ?
                '<b>' + props.name + '</b><br />' + props.prozent + ' /1 mio. inhabitants'
                : 'Click on Governorate');
    };

    if (addInfo) {
        info.addTo(map);
    }


    // get color depending on population density value
    function getColor(d) {
        return d > 30 ? '#800026' :
                d > 20 ? '#BD0026' :
                d > 15 ? '#E31A1C' :
                d > 10 ? '#FC4E2A' :
                d > 5 ? '#FD8D3C' :
                d > 3 ? '#FEB24C' :
                d > 1 ? '#FED976' :
                '#dddddd';
    }

    function style(feature) {
        return {
            weight: 2,
            opacity: 1,
            color: '#3A7036',
            dashArray: '0',
            fillOpacity: 0.5,
            fillColor: getColor(feature.properties.prozent)
        };
    }

    function highlightFeature(e) {
        var layer = e.target;



        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
        }

        info.update(layer.feature.properties);
    }

    //var geojson;

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        info.update();
    }

    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
        layer.on({
            click: highlightFeature,
            mouseout: resetHighlight

        });
    }

    if (geojson != undefined) {
        map.removeLayer(geojson);
    }

    geojson = L.geoJson(statesData, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);

    map.attributionControl.addAttribution('Displacement data &copy; <a href="http://iraqdtm.iom.int/Downloads.aspx">IOM Iraq</a>');

//    if (legend == undefined) {
//
//        legend = L.control({position: 'bottomleft'});
//
//        legend.onAdd = function (map) {
//
//            var div = L.DomUtil.create('div', 'info legend'),
//                    grades = [1, 3, 5, 10, 15, 20, 30],
//                    labels = [],
//                    from, to;
//
//            for (var i = -1; i < grades.length; i++) {
//                from = grades[i + 1];
//                to = grades[i];
//
//                labels.push(
//                        '<i style="background:' + getColor(from + 1) + '"></i> ' +
//                        from + (to ? '&ndash;' + to : '+'));
//            }
//
//            div.innerHTML = labels.join('<br>');
//            return div;
//        };
//
//        legend.addTo(map);
//    }


}
