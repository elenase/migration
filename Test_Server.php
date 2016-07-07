
    
<?php



require("config.php");


// DIAGRAMM 1: Ein- und Abwanderung von und in den Irak plus Nettomigration

if($_GET['key'] == 'Ein_und_Abwanderung') {
    $strQuery = "SELECT Year, Total_Einwanderung, Total_Abwanderung, Netto_Migration FROM Migration ORDER BY Year ASC";

    // Execute the query, or else return the error message.
    $result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");

    $arrData["data"] = array();

    // Push the data into the array
    while($row = mysqli_fetch_array($result)) {
        array_push($arrData["data"], array(
        "label" => $row["Year"],
        "einwanderung" => $row["Total_Einwanderung"],
        "abwanderung" => $row["Total_Abwanderung"],
        "nettoMigration" => $row["Netto_Migration"]
        )
        );
       
    }
    $res = json_encode($arrData);

    echo $res;
}


// DIAGRAMM 2_1: Ein- und Abwanderung der Geschlechter

if($_GET['key'] == 'Einwanderung_geschlechter') {
    $strQuery = "SELECT SUM(Einwanderung_Maenner) AS Einwanderung_Maenner_gesamt, SUM(Einwanderung_Frauen) AS Einwanderung_Frauen_gesamt FROM Migration";

    // Execute the query, or else return the error message.
    $result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");

    $arrData["data"] = array();

    // Push the data into the array
    while($row = mysqli_fetch_array($result)) {
        array_push($arrData["data"], array(
        "einwanderungMaenner" => $row["Einwanderung_Maenner_gesamt"],
        "einwanderungFrauen" => $row["Einwanderung_Frauen_gesamt"],
        )
        );
    }
    $res = json_encode($arrData);

    echo $res;
}

// DIAGRAMM 2_2: Ein- und Abwanderung der Geschlechter

if($_GET['key'] == 'Abwanderung_geschlechter') {
    $strQuery = "SELECT SUM(Abwanderung_Maenner) AS Abwanderung_Maenner_gesamt, SUM(Abwanderung_Frauen) AS Abwanderung_Frauen_gesamt FROM Migration";

    // Execute the query, or else return the error message.
    $result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");

    $arrData["data"] = array();

    // Push the data into the array
    while($row = mysqli_fetch_array($result)) {
        array_push($arrData["data"], array(
        "abwanderungMaenner" => $row["Abwanderung_Maenner_gesamt"],
        "abwanderungFrauen" => $row["Abwanderung_Frauen_gesamt"],
        )
        );
    }
    $res = json_encode($arrData);

    echo $res;
}


// DIAGRAMM 3: Abwanderung aus dem Irak in die Kontinente

if($_GET['key'] == 'Irak_Auswanderung_Kontinente') {
    //$strQuery = "SELECT JAHR, Afrika_prozentual, Asien_prozentual, Europa_prozentual, LatinAmerica_prozentual, Northern_America_prozentual, Oceanien_prozentual FROM Auswanderung_Kontinente";
    $strQuery = "SELECT * FROM Auswanderung_Kontinente";
    
    // Execute the query, or else return the error message.
    $result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");

    $arrData["data"] = array();

    // Push the data into the array
    while($row = mysqli_fetch_array($result)) {
        array_push($arrData["data"], array(
        "label" => $row["JAHR"],
        "afrika" => $row["Afrika_prozentual"],
        "asien" => $row["Asien_prozentual"],
        "europa" => $row["Europa_prozentual"],
        "latin" => $row["LatinAmerica_prozentual"],
        "usa" => $row["Northern_America_prozentual"],
        "ozeanien" => $row["Oceanien_prozentual"]
        )
        );
    }
    $res = json_encode($arrData);
    
    echo $res;
}


// DIAGRAMM 4: Abwanderung aus dem Irak in die Länder Asiens

if($_GET['key'] == 'Irak_Auswanderung_Asien') {

    $strQuery = "SELECT  YEAR_1990, YEAR_1995, YEAR_2000, YEAR_2005, YEAR_2010, YEAR_2015 FROM Emigration_Asien";
    // Execute the query, or else return the error message.
    $result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");

    $arrData["data"] = array();

    // Push the data into the array
    while($row = mysqli_fetch_array($result)) {
        array_push($arrData["data"], array(

        "year1" => $row["YEAR_1990"],
        "year2" => $row["YEAR_1995"],
        "year3" => $row["YEAR_2000"],
        "year4" => $row["YEAR_2005"],
        "year5" => $row["YEAR_2010"],
        "year6" => $row["YEAR_2015"],
        )
        );
    }
    $res = json_encode($arrData);

    echo $res;
}


// DIAGRAMM %: Abwanderung aus dem Irak in die Länder Ozeaniens

if($_GET['key'] == 'Irak_Auswanderung_Ozeanien') {

    $strQuery = "SELECT  YEAR_1990, YEAR_1995, YEAR_2000, YEAR_2005, YEAR_2010, YEAR_2015 FROM Emigration_Ozeanien";
    // Execute the query, or else return the error message.
    $result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");

    $arrData["data"] = array();

    // Push the data into the array
    while($row = mysqli_fetch_array($result)) {
        array_push($arrData["data"], array(
//        "countries" => $row["Country_destination"],
        "year1" => $row["YEAR_1990"],
        "year2" => $row["YEAR_1995"],
        "year3" => $row["YEAR_2000"],
        "year4" => $row["YEAR_2005"],
        "year5" => $row["YEAR_2010"],
        "year6" => $row["YEAR_2015"],
        )
        );
    }
    $res = json_encode($arrData);

    echo $res;
}

// DIAGRAMM %: Abwanderung aus dem Irak in die Länder Afrikas

if($_GET['key'] == 'Irak_Auswanderung_Afrika') {

    $strQuery = "SELECT  YEAR_1990, YEAR_1995, YEAR_2000, YEAR_2005, YEAR_2010, YEAR_2015 FROM Emigration_Afrika";
    // Execute the query, or else return the error message.
    $result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");

    $arrData["data"] = array();

    // Push the data into the array
    while($row = mysqli_fetch_array($result)) {
        array_push($arrData["data"], array(

        "year1" => $row["YEAR_1990"],
        "year2" => $row["YEAR_1995"],
        "year3" => $row["YEAR_2000"],
        "year4" => $row["YEAR_2005"],
        "year5" => $row["YEAR_2010"],
        "year6" => $row["YEAR_2015"],
        )
        );
    }
    $res = json_encode($arrData);

    echo $res;
}

// DIAGRAMM %: Abwanderung aus dem Irak in die Länder Europas

if($_GET['key'] == 'Irak_Auswanderung_Europa') {

    $strQuery = "SELECT  YEAR_1990, YEAR_1995, YEAR_2000, YEAR_2005, YEAR_2010, YEAR_2015 FROM Emigration_Europa";
    // Execute the query, or else return the error message.
    $result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");

    $arrData["data"] = array();

    // Push the data into the array
    while($row = mysqli_fetch_array($result)) {
        array_push($arrData["data"], array(

        "year1" => $row["YEAR_1990"],
        "year2" => $row["YEAR_1995"],
        "year3" => $row["YEAR_2000"],
        "year4" => $row["YEAR_2005"],
        "year5" => $row["YEAR_2010"],
        "year6" => $row["YEAR_2015"],
        )
        );
    }
    $res = json_encode($arrData);

    echo $res;
}


// DIAGRAMM %: Abwanderung aus dem Irak in die Länder Latein Amerikas

if($_GET['key'] == 'Irak_Auswanderung_Latin') {

    $strQuery = "SELECT  YEAR_1990, YEAR_1995, YEAR_2000, YEAR_2005, YEAR_2010, YEAR_2015 FROM Emigration_Latin";
    // Execute the query, or else return the error message.
    $result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");

    $arrData["data"] = array();

    // Push the data into the array
    while($row = mysqli_fetch_array($result)) {
        array_push($arrData["data"], array(

        "year1" => $row["YEAR_1990"],
        "year2" => $row["YEAR_1995"],
        "year3" => $row["YEAR_2000"],
        "year4" => $row["YEAR_2005"],
        "year5" => $row["YEAR_2010"],
        "year6" => $row["YEAR_2015"],
        )
        );
    }
    $res = json_encode($arrData);

    echo $res;
}


// DIAGRAMM %: Abwanderung aus dem Irak in die Länder Amerikas

if($_GET['key'] == 'Irak_Auswanderung_USA') {

    $strQuery = "SELECT  YEAR_1990, YEAR_1995, YEAR_2000, YEAR_2005, YEAR_2010, YEAR_2015 FROM Emigration_USA";
    // Execute the query, or else return the error message.
    $result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");

    $arrData["data"] = array();

    // Push the data into the array
    while($row = mysqli_fetch_array($result)) {
        array_push($arrData["data"], array(
            
        "year1" => $row["YEAR_1990"],
        "year2" => $row["YEAR_1995"],
        "year3" => $row["YEAR_2000"],
        "year4" => $row["YEAR_2005"],
        "year5" => $row["YEAR_2010"],
        "year6" => $row["YEAR_2015"],
        )
        );
    }
    $res = json_encode($arrData);

    echo $res;
}


// MAP IDPs IRAK %: Internally displaced persons

if($_GET['key'] == 'Choropleth') {
//    $strQuery = "SELECT `Target_Governorate`, SUM(`IDP_Individuals`) AS `IDP_per_Target_total` FROM `IDP_Iraq_09_2014` GROUP BY `Target_Governorate`";
    $strQuery = "SELECT * FROM `IDP_Individ_09_14_target`";
    // Execute the query, or else return the error message.
    $result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");

    $arrData["data"] = array();

    // Push the data into the array
    while($row = mysqli_fetch_array($result)) {
        array_push($arrData["data"], array(
        "ID" => $row["ID"],
        "GOVER" => $row["GOVER"],
        "INDIVIDUALS" => $row["INDIVIDUALS"]
        )
        );
    }
    $res = json_encode($arrData);

    echo $res;
}

// MAP IDPs IRAK %: TODESFAELLE

if($_GET['key'] == 'Provinzen_Todesfaelle_01_14') {

    $strQuery = "SELECT PROVINZ, LAT, LNG, 01_01_14 FROM PROVINZEN_TODESFAELLE";
    // Execute the query, or else return the error message.
    $result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");

    $arrData["data"] = array();

    // Push the data into the array
    while($row = mysqli_fetch_array($result)) {
        array_push($arrData["data"], array(
        "place" => $row["PROVINZ"],
        "coord_x" => $row["LNG"],
        "coord_y" => $row["LAT"],
        "value" => $row["01_01_14"]
        )
        );
    }
    $res = json_encode($arrData);

    echo $res;
}



// CHART TODESFAELLE GESAMT 

if($_GET['key'] == 'Todesfaelle') {
    $strQuery = "SELECT MONAT, TODESFAELLE FROM TODESFAELLE";
//    $strQuery1 = "SELECT MONAT, TODESFAELLE FROM TODESFAELLE WHERE JAHR = 2003";
//    $strQuery2 = "SELECT MONAT, TODESFAELLE FROM TODESFAELLE WHERE JAHR = 2004";
//    $strQuery3 = "SELECT MONAT, TODESFAELLE FROM TODESFAELLE WHERE JAHR = 2005";
//    $strQuery4 = "SELECT MONAT, TODESFAELLE FROM TODESFAELLE WHERE JAHR = 2006";
//    $strQuery5 = "SELECT MONAT, TODESFAELLE FROM TODESFAELLE WHERE JAHR = 2007";
//    $strQuery6 = "SELECT MONAT, TODESFAELLE FROM TODESFAELLE WHERE JAHR = 2008";
//    $strQuery7 = "SELECT MONAT, TODESFAELLE FROM TODESFAELLE WHERE JAHR = 2009";
//    $strQuery8 = "SELECT MONAT, TODESFAELLE FROM TODESFAELLE WHERE JAHR = 2010";
//    $strQuery9 = "SELECT MONAT, TODESFAELLE FROM TODESFAELLE WHERE JAHR = 2011";
//    $strQuery10 = "SELECT MONAT, TODESFAELLE FROM TODESFAELLE WHERE JAHR = 2012";
//    $strQuery11 = "SELECT MONAT, TODESFAELLE FROM TODESFAELLE WHERE JAHR = 2013";
//    $strQuery12 = "SELECT MONAT, TODESFAELLE FROM TODESFAELLE WHERE JAHR = 2014";
//    $strQuery13 = "SELECT MONAT, TODESFAELLE FROM TODESFAELLE WHERE JAHR = 2015";
//    $strQuery14 = "SELECT MONAT, TODESFAELLE FROM TODESFAELLE WHERE JAHR = 2016";
    
    // Execute the query, or else return the error message.
    $result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");
//    $result1 = $dbhandle->query($strQuery1) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");
//    $result2 = $dbhandle->query($strQuery2) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");
//    $result3 = $dbhandle->query($strQuery3) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");
//    $result4 = $dbhandle->query($strQuery4) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");
//    $result5 = $dbhandle->query($strQuery5) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");
//    $result6 = $dbhandle->query($strQuery6) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");
//    $result7 = $dbhandle->query($strQuery7) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");
//    $result8 = $dbhandle->query($strQuery8) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");
//    $result9 = $dbhandle->query($strQuery9) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");
//    $result10 = $dbhandle->query($strQuery10) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");
//    $result11 = $dbhandle->query($strQuery11) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");
//    $result12 = $dbhandle->query($strQuery12) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");
//    $result13 = $dbhandle->query($strQuery13) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");
//    $result14 = $dbhandle->query($strQuery14) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");
    

    $arrData["data"] = array();

    // Push the data into the array
        while($row = mysqli_fetch_array($result)) {
        array_push($arrData["data"], array(
        "monate" => $row["MONAT"],
        "tode" => $row["TODESFAELLE"]
        )
        );
    }
//    
//    while($row = mysqli_fetch_array($result1)) {
//        array_push($arrData["data"], array(
//        "monate2003" => $row["MONAT"],
//        "tode2003" => $row["TODESFAELLE"]
//        )
//        );
//    }
//                while($row = mysqli_fetch_array($result2)) {
//        array_push($arrData["data"], array(
//        "monate2004" => $row["MONAT"],
//        "tode2004" => $row["TODESFAELLE"]
//        )
//        );
//    }
//        while($row = mysqli_fetch_array($result3)) {
//        array_push($arrData["data"], array(
//        "monate2005" => $row["MONAT"],
//        "tode2005" => $row["TODESFAELLE"]
//        )
//        );
//    }
//        while($row = mysqli_fetch_array($result4)) {
//        array_push($arrData["data"], array(
//        "monate2006" => $row["MONAT"],
//        "tode2006" => $row["TODESFAELLE"]
//        )
//        );
//    }
//        while($row = mysqli_fetch_array($result5)) {
//        array_push($arrData["data"], array(
//        "monate2007" => $row["MONAT"],
//        "tode2007" => $row["TODESFAELLE"]
//        )
//        );
//    }
//            while($row = mysqli_fetch_array($result6)) {
//        array_push($arrData["data"], array(
//        "monate2008" => $row["MONAT"],
//        "tode2008" => $row["TODESFAELLE"]
//        )
//        );
//    }
//            while($row = mysqli_fetch_array($result7)) {
//        array_push($arrData["data"], array(
//        "monate2009" => $row["MONAT"],
//        "tode2009" => $row["TODESFAELLE"]
//        )
//        );
//    }
//            while($row = mysqli_fetch_array($result8)) {
//        array_push($arrData["data"], array(
//        "monate2010" => $row["MONAT"],
//        "tode2010" => $row["TODESFAELLE"]
//        )
//        );
//    }
//            while($row = mysqli_fetch_array($result9)) {
//        array_push($arrData["data"], array(
//        "monate2011" => $row["MONAT"],
//        "tode2011" => $row["TODESFAELLE"]
//        )
//        );
//    }
//            while($row = mysqli_fetch_array($result10)) {
//        array_push($arrData["data"], array(
//        "monate2012" => $row["MONAT"],
//        "tode2012" => $row["TODESFAELLE"]
//        )
//        );
//    }
//            while($row = mysqli_fetch_array($result11)) {
//        array_push($arrData["data"], array(
//        "monate2013" => $row["MONAT"],
//        "tode2013" => $row["TODESFAELLE"]
//        )
//        );
//    }
//            while($row = mysqli_fetch_array($result12)) {
//        array_push($arrData["data"], array(
//        "monate2014" => $row["MONAT"],
//        "tode2014" => $row["TODESFAELLE"]
//        )
//        );
//    }
//            while($row = mysqli_fetch_array($result13)) {
//        array_push($arrData["data"], array(
//        "monate2015" => $row["MONAT"],
//        "tode2015" => $row["TODESFAELLE"]
//        )
//        );
//    }
//                while($row = mysqli_fetch_array($result14)) {
//        array_push($arrData["data"], array(
//        "monate2016" => $row["MONAT"],
//        "tode2016" => $row["TODESFAELLE"]
//        )
//        );
//    }
    
    $res = json_encode($arrData);

    echo $res;
}
