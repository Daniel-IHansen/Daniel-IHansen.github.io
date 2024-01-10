<div class="tableWrapper">
    <div class="cardContainer">
    <?php $counter = 1 ?>
        <?php while ($rad=mysqli_fetch_array($datasett)) { ?>
            <?php $counter++ ?>
            <div class="card">
                <form action="<?php
                    if (!isset($_GET['updateId'])) {
                        echo "?updateId=" . $rad["idplanner"];
                    }
                    else {
                        echo $_SERVER['PHP_SELF'];
                    };
                    ?>" method="post" enctype="multipart/form-data">
                    <input type="hidden" name="id" value="<?php echo $rad["idplanner"];?>">
                    <div class="cardHeader">
                        <h2><?php echo $rad["location"]; ?></h2>
                        <div class="cardButtons">
                            <button type="change" name="change">Endre</button>
                            <a href="?deleteID=<?php echo $rad["idplanner"]; ?>">Slett</a>
                        </div>
                    </div>
                    <div class="locationImage">
                        <?php echo '<img src="/projects/travelApp/media/img/planner/' . $rad["locationImage"] . '"/>';?>
                    </div>
                        <div class="cardDetails">
                            <div class="cardItem">
                                <p><strong>ID:</strong></p>
                                <textarea class="textInput" readonly name="idPlanner"><?php echo $rad["idplanner"];?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Lokasjon:</strong></p>
                                <textarea class="textInput" readonly name="location"><?php echo $rad["location"]; ?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Opphold:</strong></p>
                                <textarea class="textInput" readonly name="stayTime"><?php echo $rad["stayTime"]; ?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Budsjett:</strong></p>
                                <textarea class="textInput" readonly name="budget"><?php echo $rad["budget"]; ?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Tidssone:</strong></p>
                                <textarea class="textInput" readonly name="timeZone"><?php echo $rad["timeZone"]; ?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Spisesteder:</strong></p>
                                <textarea class="textInput" readonly name="placesToEat"><?php echo $rad["PlacesToEat"]; ?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Attraksjoner:</strong></p>
                                <textarea class="textInput" readonly name="attractions"><?php echo $rad["attractions"]; ?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Transport:</strong></p>
                                <textarea class="textInput" readonly name="transport"><?php echo $rad["transport"]; ?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Andre notater:</strong></p>
                                <textarea class="textInput" readonly name="otherNotes"><?php echo $rad["otherNotes"]; ?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Google Maps Embed:</strong></p>
                                <textarea class="textInput" readonly name="googleMapsEmbed"><?php echo $rad["googleMapsEmbed"]; ?></textarea>
                            </div>
                        </div>
                </form>
            </div>
        <?php } ?>
    </div>
    <form action="" method="post">
        <button id="newLine" name="newLocation">Ny lokasjon</button>
    </form>
</div>
