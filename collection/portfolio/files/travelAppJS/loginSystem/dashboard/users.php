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

        permission = document.getElementsByClassName('permissions')[selector];
        permission.removeChild(permission.lastElementChild);
        permission.innerHTML += 
        \"<select name='permissions' class='textInput'>\" +
            \"<option value='student'>Elev</option>\" +
            \"<option value='teacher'>Lærer</option>\" +
            \"<option value='admin'>Admin</option>\" +
        \"</select>\";

    </script>";
}


if (isset($_POST['change'])) {

    //Datasett som plukker ut fornavn og etternavn til et medlem der informasjonen skal oppdateres.	
    $id=$_POST["id"];
    $sql= sprintf("SELECT userId,username,password,email,creationDateTime,permission FROM users WHERE userId=$id",
        $tilkobling->real_escape_string($_POST["id"])
    );
    $datasett=$tilkobling->query($sql);	

    if (!isset($_GET['updateId'])) {

        $userId = $_POST['userId'];
        $username = $_POST["username"];
        $password = $_POST["password"];
        $email = $_POST["email"];
        $permissions = $_POST["permissions"];

        
        // Build the SQL query with conditional update for permissions
        $sql = sprintf("UPDATE users SET username='%s', password='%s', email='%s', permissions='%s'",
            $tilkobling->real_escape_string($username),
            $tilkobling->real_escape_string($password),
            $tilkobling->real_escape_string($email),
            $tilkobling->real_escape_string($permissions)
        );
        
        // Add the WHERE clause to specify the row to update
        $sql .= " WHERE userId=" . $userId;
        $tilkobling->query($sql);
        echo '<script>window.location.href = "dashboardUsers.php";</script>';
    }
};

// Sjekker om man vil ha en ny rad i tabellen
if (isset ($_POST["newLocation"])){	
    //SQL insert-setning sendes til databasen sammen med verdiene fra tekstboksene	
    $sql= sprintf("INSERT INTO users(userId) VALUES('$counter')",
    $tilkobling->real_escape_string($counter));
    $tilkobling->query($sql);

    $sql = "SELECT * FROM users ORDER BY userId";
    mysqli_query($tilkobling, $sql);

    echo "<meta http-equiv='refresh' content='0'>";
}	

if (isset ($_GET["deleteID"])) {
    $parameter=$_GET["deleteID"];
    $sql=sprintf("DELETE FROM users WHERE userId=$parameter",
    $tilkobling->real_escape_string($parameter));
    $tilkobling->query($sql);	

    echo '<script>window.location.href = "dashboardUsers.php";</script>';
}
?>