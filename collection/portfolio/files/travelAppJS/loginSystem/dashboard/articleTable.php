<div class="tableWrapper">
    <div class="cardContainer">
    <?php $counter = 1 ?>
        <?php while ($rad=mysqli_fetch_array($datasett)) { ?>
            <?php $counter++ ?>
            <div class="card">
                <form action="<?php
                    if (!isset($_GET['updateId'])) {
                        echo "?updateId=" . $rad["articleId"];
                    }
                    else {
                        echo $_SERVER['PHP_SELF'];
                    };
                    ?>" method="post" enctype="multipart/form-data">
                    <input type="hidden" name="id" value="<?php echo $rad["articleId"];?>">
                    <div class="cardHeader">
                        <h2><?php echo $rad["articleImage"]; ?></h2>
                        <div class="cardButtons">
                            <button type="change" name="change">Endre</button>
                            <a href="?deleteID=<?php echo $rad["articleId"]; ?>">Slett</a>
                        </div>
                    </div>
                    <div class="locationImage">
                        <?php echo '<img src="/projects/travelApp/media/img/articles/' . $rad["articleImage"] . '"/>';?>
                    </div>
                        <div class="cardDetails">
                            <div class="cardItem">
                                <p><strong>ID:</strong></p>
                                <textarea class="textInput" readonly name="articleId"><?php echo $rad["articleId"];?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Title:</strong></p>
                                <textarea class="textInput" readonly name="articleTitle"><?php echo $rad["articleTitle"]; ?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Intro:</strong></p>
                                <textarea class="textInput articleIntro" readonly name="articleIntro"><?php echo $rad["articleIntro"]; ?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Text:</strong></p>
                                <textarea class="textInput articleText" readonly name="articleText"><?php echo $rad["articleText"]; ?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Image:</strong></p>
                                <textarea class="textInput" readonly name="articleImage"><?php echo $rad["articleImage"]; ?></textarea>
                            </div>
                        </div>
                </form>
            </div>
        <?php } ?>
    </div>
    <form action="" method="post">
        <button id="newLine" name="newLocation">Ny artikkel</button>
    </form>
</div>
