<div class="tableWrapper">
    <div class="cardContainer">
    <?php $counter = 1 ?>
        <?php while ($rad=mysqli_fetch_array($datasett)) { ?>
            <?php $counter++ ?>
            <div class="card">
                <form action="<?php
                    if (!isset($_GET['updateId'])) {
                        echo "?updateId=" . $rad["userId"];
                    }
                    else {
                        echo $_SERVER['PHP_SELF'];
                    };
                    ?>" method="post" enctype="multipart/form-data">
                    <input type="hidden" name="id" value="<?php echo $rad["userId"];?>">
                    <div class="cardHeader">
                        <h2><?php echo $rad["username"]; ?></h2>
                        <div class="cardButtons">
                            <button type="change" name="change">Endre</button>
                            <a href="?deleteID=<?php echo $rad["userId"]; ?>">Slett</a>
                        </div>
                    </div>
                        <div class="cardDetails">
                            <div class="cardItem">
                                <p><strong>ID:</strong></p>
                                <textarea class="textInput" readonly name="userId"><?php echo $rad["userId"];?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Username:</strong></p>
                                <textarea class="textInput" readonly name="username"><?php echo $rad["username"]; ?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Password:</strong></p>
                                <textarea class="textInput password" readonly name="password"><?php echo $rad["password"]; ?></textarea>
                            </div>
                            <div class="cardItem">
                                <p><strong>Email:</strong></p>
                                <textarea class="textInput email" readonly name="email"><?php echo $rad["email"]; ?></textarea>
                            </div>
                            <div class="cardItem permissions">
                                <p><strong>Permissions:</strong></p>
                                <textarea class="textInput" readonly name="permissions"><?php echo $rad["permissions"]; ?></textarea>
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
