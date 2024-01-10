<?php
// Define $selector in the global scope
$selector = null; 

if (isset($_GET['updateId'])) {

    echo "<script>
        let selector = " . ($_GET['updateId'] - 1) . ";
        let card = document.getElementsByClassName('card')[selector];

        card.querySelector('button[name=\"change\"]').innerHTML = 'Save';

        card.querySelectorAll('textarea[readonly]').forEach(textarea => {
            textarea.removeAttribute('readonly');
            textarea.classList.remove('textInput');
        });
        
        card.querySelector('.card .cardDetails').insertAdjacentHTML('afterbegin', '<div class=\"cardItem\"><input type=\"file\" name=\"locationImage\" class=\"fileInput\"></div>');
    </script>";
}

if (isset($_POST['change'])) {

    
    //Datasett som plukker ut fornavn og etternavn til et medlem der informasjonen skal oppdateres.	
    $id=$_POST["id"];
    $sql= sprintf("SELECT idplanner,location,locationImage,stayTime,budget,timeZone,PlacesToEat,attractions,transport,otherNotes,googleMapsEmbed FROM planner WHERE idplanner=$id",
        $tilkobling->real_escape_string($_POST["id"])
    );
    $datasett=$tilkobling->query($sql);	

    echo "Empty:" . empty($_FILES["locationImage"]["name"]);

    if (!isset($_GET['updateID'])) {

        if (!empty($_FILES["locationImage"]["name"])) {
              //Start opplasting
              $allowedExts = array("jpeg", "jpg", "png");
              $temp = explode(".", $_FILES["locationImage"]["name"]);
              $extension = end($temp);
              
              //Her kan du slette eller legge til de filformatene du ønsker skal godtas.
              if ((($_FILES["locationImage"]["type"] == "image/jpeg")
              || ($_FILES["locationImage"]["type"] == "image/jpg")
              || ($_FILES["locationImage"]["type"] == "image/png"))
              && ($_FILES["locationImage"]["size"] < 10000000) //Her kan du endre max filstørrelse.
              && in_array($extension, $allowedExts)) { 
                  if ($_FILES["locationImage"]["error"] > 0) { //Feilmelding hvis filformat/størrelse er feil.
                      echo "Return Code: " . $_FILES["locationImage"]["error"] . "<br>";
                  } 
                  else {
                      if (!file_exists("C:\\wamp64\\www\\projects\\travelApp\\media\\img\\planner\\" . $_FILES["locationImage"]["name"])) { 
                          move_uploaded_file($_FILES["locationImage"]["tmp_name"], "C:\\wamp64\\www\\projects\\travelApp\\media\\img\\planner\\" . $_FILES["locationImage"]["name"]);
                      } 
                      //Her starter opplasting til databasen.
                      $locationImage=$_FILES["locationImage"]["name"];
                    }
            }   
        }
        else {
            // If no new image is uploaded, fetch the current image path from the database
            $fetchImage = sprintf("SELECT locationImage FROM planner WHERE idplanner=%d", $id);
            $result = $tilkobling->query($fetchImage);
        
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                $locationImage = $row['locationImage'];
            }
        }
        
        $idplanner = $_POST['id'];
        $location = $_POST["location"];
        $stayTime = $_POST["stayTime"];
        $budget = $_POST["budget"];
        $timeZone = $_POST["timeZone"];
        $placesToEat = $_POST["placesToEat"];
        $attractions = $_POST["attractions"];
        $transport = $_POST["transport"];
        $otherNotes = $_POST["otherNotes"];
        $googleMapsEmbed = $_POST["googleMapsEmbed"];
        
        // Build the SQL query with conditional update for locationImage
        $sql = sprintf("UPDATE planner SET location='%s', stayTime='%s', budget='%s', timeZone='%s', PlacesToEat='%s', attractions='%s', transport='%s', otherNotes='%s', googleMapsEmbed='%s'",
            $tilkobling->real_escape_string($location),
            $tilkobling->real_escape_string($stayTime),
            $tilkobling->real_escape_string($budget),
            $tilkobling->real_escape_string($timeZone),
            $tilkobling->real_escape_string($placesToEat),
            $tilkobling->real_escape_string($attractions),
            $tilkobling->real_escape_string($transport),
            $tilkobling->real_escape_string($otherNotes),
            $tilkobling->real_escape_string($googleMapsEmbed)
        );
        
        // Only add the locationImage field if a new image is uploaded
        if (!empty($_FILES["locationImage"]["name"])) {
            $sql .= ", locationImage='" . $tilkobling->real_escape_string($locationImage) . "'";
        }
        
        // Add the WHERE clause to specify the row to update
        $sql .= " WHERE idplanner=" . $idplanner;
        
        $tilkobling->query($sql);
    }
        echo "<meta http-equiv='refresh' content='0'>";
};

// Sjekker om man vil ha en ny rad i tabellen
if (isset ($_POST["newLocation"])){	
    //SQL insert-setning sendes til databasen sammen med verdiene fra tekstboksene	
    $sql= sprintf("INSERT INTO planner(idplanner) VALUES('$counter')",
    $tilkobling->real_escape_string($counter));
    $tilkobling->query($sql);

    $sql = "SELECT * FROM planner ORDER BY idplanner";
    mysqli_query($tilkobling, $sql);

    echo "<meta http-equiv='refresh' content='0'>";
}	

if (isset ($_GET["deleteID"])) {
    $parameter=$_GET["deleteID"];
    $sql=sprintf("DELETE FROM planner WHERE idplanner=$parameter",
    $tilkobling->real_escape_string($parameter));
    $tilkobling->query($sql);	

    echo '<script>window.location.href = "dashboard.php";</script>';
}
?>