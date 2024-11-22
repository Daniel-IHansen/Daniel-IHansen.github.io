<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <!-- Stylesheets -->
    <link rel="stylesheet" href="/projects/travelApp/css/main.css">
    <link rel="stylesheet" href="/projects/travelApp/loginSystem/css/main.css">
    <link rel="stylesheet" href="/projects/travelApp/loginSystem/css/dashboard.css">
    <!-- Ionicons icon pack -->
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <!-- favicon -->
    <link rel="icon" type="image/x-icon" href="/projects/travelApp/media/logo/verdenVidere.svg">
    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet">
</head>

<?php
    //include auth_session.php file on all user panel pages
    include("../loginSystem/auth_Session.php");
    // Sjekker om det allerede kjører en session
    include("../loginSystem/sessionCheck.php");

    //Send tekst til konsoll
    function debug_to_console($data) {
        $output = $data;
        if (is_array($output))
            $output = implode(',', $output);
    
        echo "<script>console.log('SQL: " . $output . "' );</script>";
    }

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
    //Angi UTF-8 som tegnsett og æ, ø og å vises r
        $tilkobling->set_charset("utf8");
    
    //SQL select-setning sendes til databasen sammen med verdiene fra tekstboksene	
        $sql= sprintf("SELECT userId,username,password,email,creationDateTime,permissions FROM users");
        $datasett=$tilkobling->query($sql);

        if (isset($_GET['updateId'])) {
            // Check if the flag has been set
            if (!isset($_SESSION['clicked'])) {
                // If not, redirect to the updateId
                $_SESSION['clicked'] = true;
                header("Location: ?updateId=" . $_GET['updateId']);
                exit;
            }
        }
?>

<body>
    <main>
        <div id="navSidebar">
            <p id="logout"><a href="logout.php">Log Out</a></p>
            <?php if ($_SESSION['permissions'] == 'teacher' || $_SESSION['permissions'] == 'admin') { ?>
                <a class="" href="/projects/travelApp/loginSystem/dashboard.php">
                    <ion-icon name="airplane-outline"></ion-icon>
                    <h3>Planner</h3>
                </a>
            <?php } ?>
                <a class="" href="/projects/travelApp/loginSystem/dashboardArticles.php">
                    <ion-icon name="albums-outline"></ion-icon>
                    <h3>Articles</h3>
                </a>
            <?php if ($_SESSION['permissions'] == 'admin') { ?>
                <a class="selected">
                    <ion-icon name="accessibility-outline"></ion-icon>
                    <h3>Users</h3>
                </a>
            <?php } ?>
        </div>
        <div id="dashboard">
            <div id="backgroundWrapper">
                <div id="backgroundImg"></div>
            </div>
            <?php include 'dashboard/userTable.php' ?>
        </div>
    </main>
    <script src="/projects/travelApp/js/nav.js"></script>
    <script src="/projects/travelApp/js/dashboard.js"></script>

<?php include "dashboard/users.php";?>

</body>
</html>