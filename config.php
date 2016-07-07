<?php



$dbUser = "seydel";
$dbPass = "seydel_edv";
$dbHost = "fk08srv01-2.geo.private.hm.edu";
$dbDatabase = "seydel_Irak";

   $dbhandle = new mysqli($dbHost, $dbUser, $dbPass, $dbDatabase);

   /*Render an error message, to avoid abrupt failure, if the database connection parameters are incorrect */
   if ($dbhandle->connect_error) {
  	exit("There was an error with your connection: ".$dbhandle->connect_error);
   }
?>