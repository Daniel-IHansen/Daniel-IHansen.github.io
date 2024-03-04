<?php
// Define $selector in the global scope
$selector = null; 

if (isset($_GET['updateId'])) {

    echo "<script>
        let selector = " . ($_GET['updateId'] - 1) . ";
        let card = document.getElementsByClassName('card')[selector];
        console.log(card)
        card.querySelector('button[name=\"change\"]').innerHTML = 'Save';

        card.querySelectorAll('textarea[readonly]').forEach(textarea => {
            textarea.removeAttribute('readonly');
            textarea.classList.remove('textInput');
        });
        
        card.querySelector('.card .cardDetails').insertAdjacentHTML('afterbegin', '<div class=\"cardItem\"><input type=\"file\" name=\"articleImage\" class=\"fileInput\"></div>');
    </script>";
}


if (isset($_POST['change'])) {

    //Datasett som plukker ut fornavn og etternavn til et medlem der informasjonen skal oppdateres.	
    $id=$_POST["id"];
    $sql= sprintf("SELECT articleId,articleTitle,articleIntro,articleText,articleImage FROM articles WHERE articleId=$id",
        $tilkobling->real_escape_string($_POST["id"])
    );
    $datasett=$tilkobling->query($sql);	

    if (!isset($_GET['updateId'])) {

        if (!empty($_FILES["articleImage"]["name"])) {
              //Start opplasting
              $allowedExts = array("jpeg", "jpg", "png");
              $temp = explode(".", $_FILES["articleImage"]["name"]);
              $extension = end($temp);
              
              //Her kan du slette eller legge til de filformatene du ønsker skal godtas.
              if ((($_FILES["articleImage"]["type"] == "image/jpeg")
              || ($_FILES["articleImage"]["type"] == "image/jpg")
              || ($_FILES["articleImage"]["type"] == "image/png"))
              && ($_FILES["articleImage"]["size"] < 10000000) //Her kan du endre max filstørrelse.
              && in_array($extension, $allowedExts)) { 
                  if ($_FILES["articleImage"]["error"] > 0) { //Feilmelding hvis filformat/størrelse er feil.
                      echo "Return Code: " . $_FILES["articleImage"]["error"] . "<br>";
                  } 
                  else {
                      if (!file_exists("C:\\wamp64\\www\\projects\\travelApp\\media\\img\\articles\\" . $_FILES["articleImage"]["name"])) { 
                          move_uploaded_file($_FILES["articleImage"]["tmp_name"], "C:\\wamp64\\www\\projects\\travelApp\\media\\img\\articles\\" . $_FILES["articleImage"]["name"]);
                      } 
                      //Her starter opplasting til databasen.
                      $articleImage=$_FILES["articleImage"]["name"];
                    }
            }   
        }
        else {
            // If no new image is uploaded, fetch the current image path from the database
            $fetchImage = sprintf("SELECT articleImage FROM articles WHERE articleId=%d", $id);
            $result = $tilkobling->query($fetchImage);
        
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                $articleImage = $row['articleImage'];
            }
        }
        $articleId = $_POST['articleId'];
        $articleTitle = $_POST["articleTitle"];
        $articleIntro = $_POST["articleIntro"];
        $articleText = $_POST["articleText"];
        $articleImage = $_POST["articleImage"];

        
        // Build the SQL query with conditional update for articleImage
        $sql = sprintf("UPDATE articles SET articleTitle='%s', articleIntro='%s', articleText='%s'",
            $tilkobling->real_escape_string($articleTitle),
            $tilkobling->real_escape_string($articleIntro),
            $tilkobling->real_escape_string($articleText)
        );

        // Only add the articleImage field if a new image is uploaded
        if (!empty($_FILES["articleImage"]["name"])) {
            $sql .= ", articleImage='" . $tilkobling->real_escape_string($_FILES["articleImage"]["name"]) . "'";
        }
        
        // Add the WHERE clause to specify the row to update
        $sql .= " WHERE articleId=" . $articleId;
        $tilkobling->query($sql);
        echo '<script>window.location.href = "dashboardArticles.php";</script>';
    }
};

// Sjekker om man vil ha en ny rad i tabellen
if (isset ($_POST["newLocation"])){	
    //SQL insert-setning sendes til databasen sammen med verdiene fra tekstboksene	
    $sql= sprintf("INSERT INTO articles(articleId) VALUES('$counter')",
    $tilkobling->real_escape_string($counter));
    $tilkobling->query($sql);

    $sql = "SELECT * FROM articles ORDER BY articleId";
    mysqli_query($tilkobling, $sql);

    echo "<meta http-equiv='refresh' content='0'>";
}	

if (isset ($_GET["deleteID"])) {
    $parameter=$_GET["deleteID"];
    $sql=sprintf("DELETE FROM articles WHERE articleId=$parameter",
    $tilkobling->real_escape_string($parameter));
    $tilkobling->query($sql);	

    echo '<script>window.location.href = "dashboardArticles.php";</script>';
}
?>