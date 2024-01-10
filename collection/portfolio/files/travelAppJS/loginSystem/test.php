<!doctype html>
<html>
<head>
  <title>Medlemmer</title>
  <!-- UTF-8 gjør at vi kan bruke æ, ø og å -->
  <meta charset="UTF-8">
</head>
<body>
	  
	 <form action="" method="post" enctype="multipart/form-data">
		<label for="file">locationImage:</label>
		<input type="file" name="file" id="file"><br><br>
		<input type="submit" name="submit" value="Upload">
	 </form>

<?php	
    //Tilkoblingsinformasjon
	  $servernavn = "localhost";
      $brukernavn = "root";
	  $passord = "";
	  $dbnavn = "travelApp";
		
	//Oppretter en kobling
	$tilkobling = mysqli_connect($servernavn, $brukernavn, $passord, $dbnavn);
		
	// Sjekker koblingen fungerer
	  if ($tilkobling->connect_error) {
	    die("Noe gikk galt: " . $tilkobling->connect_error);
	  } 
	//Angi UTF-8 som tegnsett og æ, ø og å vises riktig i databasen
	  $tilkobling->set_charset("utf8");
			
	//Sjekker om variabelen $_submit er satt
	if (isset ($_POST["submit"]))	 
	{
		//Start opplasting
		$allowedExts = array("gif", "jpeg", "jpg", "png");
		$temp = explode(".", $_FILES["file"]["name"]);
		$extension = end($temp);
		
		//Her kan du slette eller legge til de filformatene du ønsker skal godtas.
		 if ((($_FILES["file"]["type"] == "image/gif")
		 || ($_FILES["file"]["type"] == "image/jpeg")
		 || ($_FILES["file"]["type"] == "image/jpg")
		 || ($_FILES["file"]["type"] == "image/pjpeg")
		 || ($_FILES["file"]["type"] == "image/x-png")
		 || ($_FILES["file"]["type"] == "image/png"))
		 && ($_FILES["file"]["size"] < 10000000) //Her kan du endre max filstørrelse.
		 && in_array($extension, $allowedExts)) 
		 { 
		 if ($_FILES["file"]["error"] > 0) { //Feilmelding hvis filformat/størrelse er feil.
			echo "Return Code: " . $_FILES["file"]["error"] . "<br>";
		 } 
		  else {  // Utskrift til skjerm hvis ting er ok.
				echo "Upload: " . $_FILES["file"]["name"] . "<br>";
				echo "Type: " . $_FILES["file"]["type"] . "<br>";
			echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
			echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br>";
			if (file_exists("upload/" . $_FILES["file"]["name"])) { 
			  echo $_FILES["file"]["name"] . " already exists. "; //Melding: Filen eksisterer.
			} 
		   else {
                         move_uploaded_file($_FILES["file"]["tmp_name"],  //Filen flyttes fra variabelen $_FILES til katalogen "upload".
                         "upload/" . $_FILES["file"]["name"]);
                         echo "Stored in: " . "upload/" . $_FILES["file"]["name"]; //Melding om lagringsplass og locationImage
		  
		   //Her starter opplasting til databasen.
	              $locationImage=$_FILES["file"]["name"];
	   
		   $sql = sprintf("INSERT INTO planner (locationImage) 
					VALUES ('$locationImage')",
						$tilkobling->real_escape_string($locationImage));
						
		    //Sjekker om SQL-setningen ble gjennomført og om dataene er på plass i databasen	
		    if($tilkobling->query($sql))	{
			echo "Spørringen ble gjennomført.";
		    }
		    else {
			echo "Noe gikk galt med spørringen $sql($tilkobling->error).";
		    }	
                  }
           }
     } 
     else {
     echo "Invalid file";
     }
  }
?>
</body>
</html>
