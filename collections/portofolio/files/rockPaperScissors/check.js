    //Sets score
    let scoreTied = 0;
    let scoreLost = 0;
    let scoreWon = 0;
    let totalScoreLost = 0;
    let totalScoreWon = 0;
    var gameRunning = false;

    // When starts up, gets all cookies
    setTimeout(() => {
        if (getCookie("totalScoreWon") == null) {
            document.getElementById("totalScoreWon").innerHTML= 0;
            setCookie("totalScoreWon", 0, 0)
        }
        document.getElementById("totalScoreWon").innerHTML= getCookie("totalScoreWon");

        if (getCookie("totalScoreLost") != 0) {
            document.getElementById("totalScoreLost").innerHTML = getCookie("totalScoreLost");
        }

        document.getElementById("accountUsername").innerHTML = "Welcome " + getCookie("username");

        //Lines to be shortened and copied from "line 373":
        htmlRepeat("battlepassLevel", 40, 48)
    }, 5);

    function check(userChoice) {
        //Checks if game is running, as to not spamclick game
        if (gameRunning == false) {
            
            gameRunning = true

            //Opacity animation and active image function
            function aniAndOp(rockOp, paperOp, scissorsOp, cpuRockOp, cpuPaperOp, cpuScissorsOp, cpuChoice, targetGradOp) {

                document.getElementById("rock").style.opacity = rockOp;
                document.getElementById("paper").style.opacity = paperOp;
                document.getElementById("scissors").style.opacity = scissorsOp;
                document.getElementById("cpuRock").style.opacity = cpuRockOp;
                document.getElementById("cpuPaper").style.opacity = cpuPaperOp;
                document.getElementById("cpuScissors").style.opacity = cpuScissorsOp;
            
                
                let id = null;
                let elem = userChoice;
                let pos = 0;
                clearInterval(id);
                id = setInterval(frameLeft, 5);
                //Moves userChoice a set amount
                function frameLeft() {
                    if (pos == 150) {
                        clearInterval(id);
                    }
                    else {
                        pos++; 
                        elem.style.left = pos + "px";

                        //Changes the position of userChoice
                        if (targetGradOp != null) {
                            setTimeout(() => {
                                var op = document.getElementById(targetGradOp);

                                var currentOp = getComputedStyle(op).getPropertyValue("opacity");

                                currentOp -= 0.01;
                                op.style.opacity = currentOp;
                            }, 0500  );
                        }
                    }
            }  //Sets animation for userChoice
            
                let id2 = null;
                let pos2 = 0;
                clearInterval(id2);
                id2 = setInterval(frameRight, 5);
                //Moves cpuChoice a set amount
                function frameRight() {
                    if (pos2 == 150) {
                        clearInterval(id2);
                    }
                    else {
                    pos2++; 
                    document.getElementById(cpuChoice).style.right = pos2 + "px";
                    }
                }  //Sets animation for cpuChoice
            }
            
            //Random number picker for cpuChoice
            let cpuChoice = Math.floor(Math.random()*3)+1;
            //cpuChoice 1 = rock, 2 = scissor, 3 = paper

            //Main function - checks for every combination
            if (userChoice == rock) {
                var userChoiceText = "Rock"

                if (cpuChoice == 1) {
                    aniAndOp(1, 0, 0, 1, 0, 0, "cpuRock", null)

                    scoreTied = scoreTied + 1
                    document.getElementById("scoreTied").innerHTML= scoreTied
                }
                if (cpuChoice == 2) {
                    aniAndOp(1, 0, 0, 0, 1, 0, "cpuPaper", "rock")

                    scoreLost = scoreLost + 1
                    document.getElementById("scoreLost").innerHTML= scoreLost
                }
                if (cpuChoice == 3) {
                    aniAndOp(1, 0, 0, 0, 0, 1, "cpuScissors", "cpuScissors")

                    scoreWon = scoreWon + 1
                    document.getElementById("scoreWon").innerHTML= scoreWon
                }
            }
            if (userChoice == paper) {
                var userChoiceText = "Paper"

                if (cpuChoice == 1) {
                    aniAndOp(0, 1, 0, 1, 0, 0, "cpuRock", "cpuRock")

                    scoreWon = scoreWon + 1
                    document.getElementById("scoreWon").innerHTML= scoreWon

                }
                if (cpuChoice == 2) {
                    aniAndOp(0, 1, 0, 0, 1, 0, "cpuPaper", null)

                    scoreTied = scoreTied + 1
                    document.getElementById("scoreTied").innerHTML= scoreTied
                }
                if (cpuChoice == 3) {
                    aniAndOp(0, 1, 0, 0, 0, 1, "cpuScissors", "paper")
                    scoreLost = scoreLost + 1
                    document.getElementById("scoreLost").innerHTML= scoreLost
                }
            }
            if (userChoice == scissors) {
                var userChoiceText = "Scissors"

                if (cpuChoice == 1) {
                    aniAndOp(0, 0, 1, 1, 0, 0, "cpuRock", "scissors")

                    scoreLost = scoreLost + 1
                    document.getElementById("scoreLost").innerHTML= scoreLost
                }
                if (cpuChoice == 2) {
                    aniAndOp(0, 0, 1, 0, 1, 0, "cpuPaper", "cpuPaper")

                    scoreWon = scoreWon + 1
                    document.getElementById("scoreWon").innerHTML= scoreWon
                }
                if (cpuChoice == 3) {
                    aniAndOp(0, 0, 1, 0, 0, 1, "cpuScissors", null)

                    scoreTied = scoreTied + 1
                    document.getElementById("scoreTied").innerHTML= scoreTied
                }
            }

            //Changes the cpuChoice into text
            if (cpuChoice == 1) {
                var cpuChoiceText = "Rock"
            }

            else if (cpuChoice == 2) {
                var cpuChoiceText = "Paper"
            }

            else if (cpuChoice == 3) {
                var cpuChoiceText = "Scissors"
            }

            function firstLetterUpperCase(string) {
                let str = string;

                //split the above string into an array of strings 
                //whenever a blank space is encountered
                
                let arr = str.toString().split(" ");
                
                //loop through each element of the array and capitalize the first letter.
                
                
                for (var i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                
                }
                
                //Join all the elements of the array back into a string 
                //using a blankspace as a separator 
                const str2 = arr.join(" ");
                return(str2);
            }
            //Sets both userChoice and cpuChoice beside action in HTML, with the first letter uppercase
            document.getElementById("userChoiceText").innerHTML= firstLetterUpperCase(userChoiceText);
            document.getElementById("cpuChoiceText").innerHTML= firstLetterUpperCase(cpuChoiceText);
            setTimeout(() => {
                gameRunning = false;
            }, 1500);
        }

        //Removes all existing rocks, papers and scissors. Adds win/lose tag to popup. Displays fireworks if won.
        if (scoreWon >= 3 || scoreLost >= 3) {
            setTimeout(() => {
                location.href="#scorePopup"

                if (scoreWon > scoreLost) {
                    document.getElementById("popupTitle").innerHTML= "You won!";
                    document.getElementById("fireworks").style.opacity = 1;
                    document.getElementById("fireworks").style.display = "block";

                    document.getElementById("rock").style.opacity = 0;
                    document.getElementById("paper").style.opacity = 0;
                    document.getElementById("scissors").style.opacity = 0;
                    document.getElementById("cpuRock").style.opacity = 0;
                    document.getElementById("cpuPaper").style.opacity = 0;
                    document.getElementById("cpuScissors").style.opacity = 0;
                    //Sets total win score to +1 and creates a cookie for it.
                    totalScoreWon = totalScoreWon + 1;

                    if (  document.getElementById("rememberMe").checked = true || getCookie("rememberMe") == 1) {
                        setCookie("rememberMe",1, 30)
                        setCookie("totalScoreWon", totalScoreWon, 30)
                    }
                    else {
                        setCookie("totalScoreWon", totalScoreWon, 0)
                    }
                    document.getElementById("totalScoreWon").innerHTML= getCookie("totalScoreWon")

                    //Sets xpbar to to totalScoreWon
                    document.getElementById("xpBar").style.width = totalScoreWon + "%";

                    //Sets rewards to be unlocked based on totalScoreWon
                    rewardNum = "reward" + totalScoreWon
                    rewardElem = document.getElementsByClassName(rewardNum)
                    rewardElem[0].style.opacity = "100%";
                    rewardElem[1].style.opacity = "100%";

                }
                else if (scoreWon < scoreLost) {
                    document.getElementById("popupTitle").innerHTML= "You lost.";
                    document.getElementById("fireworks").style.opacity = 0;
                    
                    document.getElementById("rock").style.opacity = 0;
                    document.getElementById("paper").style.opacity = 0;
                    document.getElementById("scissors").style.opacity = 0;
                    document.getElementById("cpuRock").style.opacity = 0;
                    document.getElementById("cpuPaper").style.opacity = 0;
                    document.getElementById("cpuScissors").style.opacity = 0;
                    //Sets total lost score to +1 and creates a cookie for it
                    totalScoreLost = totalScoreLost + 1
                    if (  document.getElementById("rememberMe").checked = true) {
                        setCookie("totalScoreLost", totalScoreLost, 30)
                    }
                    else {
                        setCookie("totalScoreLost", totalScoreLost, 0)
                    }
                    document.getElementById("totalScoreLost").innerHTML= getCookie("totalScoreLost")
                }

                scoreLost = 0;
                scoreTied = 0;
                scoreWon = 0;
                document.getElementById("scoreLost").innerHTML= scoreLost;
                document.getElementById("scoreTied").innerHTML= scoreTied;
                document.getElementById("scoreWon").innerHTML= scoreWon;
            }, 1500);
        }   
    } 

    //Sets a cookie.
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    //Gets cookie information.
    function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "null";
    }
    //Checks if cookie is the same as inserted string
    function checkCookie() {
        let username = getCookie("username");
        if (username != "") {
        alert("Welcome again " + username);
        } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
        }
    }

    //Opens login if user is not logged in, else opens account. 
    function accountPopup() {
        if (getCookie("username") == "null"){
            location.href= "#loginPopup"
        }
        else {
            location.href= "#accountPopup"
        }
    }

    //Creates a username and password in cookies for the user
    function signUp() {
        if (getCookie("username") != "") {
            if (  document.getElementById("rememberMe").checked = true) {

                let unameValue = document.getElementById("unameInput").value;
                setCookie("username", unameValue, 30)

                let pswValue = document.getElementById("pswInput").value;
                setCookie("password", pswValue, 30)

                document.getElementById("accountUsername").innerHTML = unameValue
            }
            else {
                let unameValue = document.getElementById("unameInput").value;
                setCookie("username", unameValue, 0)

                let pswValue = document.getElementById("pswInput").value;
                setCookie("password", pswValue, 0)

                document.getElementById("accountUsername").innerHTML = "Welcome " + unameValue
            }
            if (getCookie("username") != " ") {
                location.href = "#accountPopup"
            }
        }
    }
    //When browser closes, if remember me is off, the browser forgets everything
    function browserClose() {
        if (document.getElementById("rememberMe").checked != true){
            document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "totalScoreWon=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "totalScoreLost=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
    }

//When reset button is pressed, removes all cookies and resets score
function resetAccount() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "totalScoreWon=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "totalScoreLost=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    document.getElementById("totalScoreWon").innerHTML= 0;   
    document.getElementById("totalScoreLost").innerHTML = 0;
}
//Opens battlepass from button
function battlepassPopup() {
    location.href= "#battlepassPopup"
}

function inventoryPopup() {
    location.href= "#inventoryPopup"
}

//HTML line shortener
function htmlRepeat(id, times, charChange) {
    text = document.getElementById(id);

    //Loops it for each time nessessary
    for (let newNum = 0; newNum < times; newNum++) {
        console.log(text);

        textRepeat = text.repeat(1);
        console.log(textRepeat);

        textSplit = textRepeat.split("");
        console.log(textSplit);

        textSplice = textSplit.splice(charChange, 1);
        textSplice = textSplit.splice(charChange, 0, newNum);
        console.log(textSplice);
    }


    document.getElementById(id).innerHTML = result;
}