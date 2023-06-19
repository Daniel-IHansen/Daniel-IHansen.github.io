//  ▲ ▼ ✔ ⟳
let score = 0;
let lostGame = false;
let guesses = 7;
const highRetorts = [
    "HIGH GUESS? WHAT A CLOWN!",
    "TOO HIGH! IDIOT!",
    "HIGH GUESS? ARE YOU KIDDIN'?",
    "WOT? HIGH GUESS? LAUGHABLE!",
    "HIGH GUESS? YA HAVIN' A LAUGH?",
    "YOU CALL THAT A GUESS? HIGH!",
    "HIGH GUESS? NOT TOO BRIGHT!",
    "HIGH GUESS? NICE TRY, EINSTEIN!",
    "WAY OFF! HIGH GUESS, MATE!",
    "HIGH GUESS? 'AVE A WORD!"
  ];
  const lowRetorts = [
    "LOW GUESS? HOW PATHETIC!",
    "IS THAT IT? LOW GUESS, HA!",
    "TOO LOW! WHAT A WASTE!",
    "LOW GUESS? DISAPPOINTING!",
    "LOW GUESS? YOU'RE KIDDIN'!",
    "THAT'S YOUR BEST? LOW GUESS!",
    "NOT EVEN CLOSE! LOW GUESS!",
    "PATHETICALLY LOW! HAHA!",
    "WAY OFF! LOW GUESS, MATE!",
    "YOU CALL THAT A GUESS? LOW!"
  ];
  const guessRetorts = [
    "NO MORE GUESSES? HOW PATHETIC!",
    "ALL OUTTA GUESSES? WHAT A JOKE!",
    "YOU'RE DONE GUESSIN'! HAHA!",
    "OUT OF GUESSES? SO DISAPPOINTIN'!",
    "NO MORE GUESSES? NOT SURPRISING!",
    "YOU'VE RUN OUT OF GUESSES, LUV!",
    "NO GUESSES LEFT? TIME TO CRY!",
    "DONE GUESSIN', ARE WE? HAHA!",
    "ALL GUESSED OUT? PATHETIC!",
    "ZERO GUESSES LEFT? HOW SAD!"
  ];
  const winRetorts = [
    "YOU WIN AGAIN? HOW ANNOYING!",
    "ANOTHER RIGHT GUESS? UGH!",
    "WELL DONE. AGAIN. ANNOYING!",
    "RIGHT ONCE MORE? SO IRRITATING!",
    "ENOUGH WITH THE WINS! UGH!",
    "YOU'RE TOO LUCKY! AGGRAVATING!",
    "ANOTHER VICTORY? SO ANNOYED!",
    "YOU ALWAYS WIN? HOW IRRITATING!",
    "CORRECT AGAIN? SO FRUSTRATING!",
    "CAN'T STAND YOUR WINS! UGH!"
  ];
  
generateWorld();
let answer = Math.ceil(Math.random()*100);
let gameRunning = true;
function guess(number) {

     //  if the game is running
    if (gameRunning) {

        //  check if player has enough guesses
        if (guesses != 0) {
        
            document.getElementById("td" + number).setAttribute("class", "noAction")

            guesses--;
            document.getElementById("guessesText").innerHTML = "Guesses left: " + guesses;

            //  check if number is lower than answer
            if (number > answer) {
                document.getElementById("tile" + number).innerHTML = "▲";
                document.getElementById("td" + number).style.backgroundColor = "rgba(173, 180, 74, 0.5)";

                // if player is out of guesses
                if (guesses == 0) {
                    writeConsole(guessRetorts[Math.floor(Math.random()*10)]);
                    for (let i = 0; i < document.getElementsByTagName('td').length; i++) {
                        document.getElementById("td" + (i + 1)).style.backgroundColor = "rgba(180, 74, 74, 0.5)";
                    }
                    lostGame = true;
                }
                else {
                    writeConsole(highRetorts[Math.floor(Math.random()*10)]);
                }
            }
            //  check if number is higher than answer
            else if (number < answer) {
                document.getElementById("tile" + number).innerHTML = "▼";
                document.getElementById("td" + number).style.backgroundColor = "rgba(176, 74, 180, 0.5)";

                // if player is out of guesses
                if (guesses == 0) {
                    writeConsole(guessRetorts[Math.floor(Math.random()*10)]);
                    for (let i = 0; i < document.getElementsByTagName('td').length; i++) {
                        document.getElementById("td" + (i + 1)).style.backgroundColor = "rgba(180, 74, 74, 0.5)";
                    }
                    lostGame = true;
                }
                else {
                    writeConsole(lowRetorts[Math.floor(Math.random()*10)]);
                }
            }
            //  check if number is equal to answer
            else if (number == answer) {
                document.getElementById("tile" + number).innerHTML = "✔";
                document.getElementById("td" + number).style.backgroundColor = "#34803a";
                writeConsole(winRetorts[Math.floor(Math.random()*10)]);

                gameRunning = false;
                score++;
                document.getElementById("scoreText").innerHTML = "Score: " + score;
            }
        }
    }
}

//  sets the _ in the console
let insert = false;
setInterval(() => {
    if (insert) {
        document.getElementById("console").innerHTML = "_";
        insert = false;
    }
    else {
        document.getElementById("console").innerHTML = "";
        insert = true;
    }
}, 500);

//  defines the letters in the alphabet
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//  writes to the log on the page
function writeConsole(input) {
    //  makes a paragraph to store image
    const paragraph = document.createElement("p");
    paragraph.setAttribute("class", "consoleText");

    //  generates the paragraph in the log
    document.getElementById("log").insertBefore(paragraph, document.getElementById("console")); 

    //  creates a nice effect for the console
    hackText(input, document.getElementById("consoleInput"), 1.5);
}

//  restarts game
function restartGame() {

    if(!lostGame && !gameRunning) {
        //  animates the restart icon
        document.getElementById("restart").animate(
            [
                { transform: 'scale(1) rotate(0deg)' },
                { transform: 'scale(2) rotate(180deg)' },
                { transform: 'scale(1) rotate(360deg)' }
            ],
            {
                duration: 500,
                easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            })

        //  clears the table
        for (let i = 0; i < 10; i++) {
            document.getElementById("tr" + i).remove();
        }
        
        //  redoes the text in the tableData
        generateWorld();

        //  makes a new answer
        answer = Math.ceil(Math.random()*100);

        //  starts the game
        gameRunning = true;

        //  clear guesses
        guesses = 7;
        document.getElementById("guessesText").innerHTML = "Guesses left: " + 7;

        //  clear console
        document.getElementById("consoleInput").innerHTML = "";
    }
}

//  on hovering on title, creates a neat effect

//  add event listeners for mouseenter events
document.getElementById('gameTitle').addEventListener('mouseenter', handleMouseEnter);

// when mouse is over title
function handleMouseEnter() {
  // Code to be executed when the mouse enters the element
  hackText("Gjett Tallet", document.getElementById("gameTitle"), 3)
  // Additional code or actions you want to perform
}