var photoCol = [
  ["Name",'Date',"Filename",'Small description'],
["Winter Mirror",'15.12.2022',"winterMirror.jpg",'A combination of photos I have taken, edited and blended in Photoshop.'],
["Blue Lights",'10.1.2023',"blueLights.jpg",'A test to imitate car lights in Photoshop.'],
["Warm Street",'10.1.2023',"warmStreet.jpg",'Street photo, edited and blended in Photoshop.'],
["Movie Night",'10.1.2023',"movieNight.jpg",'A test combination of three images, using window reflection as a base.'],
["Friends",'3.6.2023',"friends.jpg",'Picture taken of my friends, with me edited in using Photoshop.']
];

var workCol = [
  ["Name",'Date',"Filename",'Small description'],
["My First Website",'5.8.2022',"lockeLamora.png",'This was my first ever website. It was made for a book series I was fond of.'],
["Dark Theme",'7.9.2022',"darkTheme.png",'A darker themed website, made to include neon lights-like lighting.'],
["Rock Paper Scissors",'20.1.2023',"rockPaperScissors.png",'Based on the common rock, paper, scissors-game! Includes a battlepass and login system.'],
["Communication Book",'2.11.2022',"communicationBook.jpg","My first experience with InDesign. The book's content was made by Nils Petter Johnsrud."],
["Manhunt Poster",'4.4.2023',"manhuntPoster.jpg",'A poster made for a student movie. The whole poster is designed in Photoshop.'],
["Logo Design Manual",'14.4.2023',"designManual.jpg",'Design manual based on a student-made logo. Includes blending on clothes in InDesign.'],
["Guess the Number",'1.5.2023',"guessTheNumber.png",'My last game, with stylized background, screen and terminal. Includes sarcasm.'],
["How to Take Photos",'10.5.2023',"howToTakePhotos.jpg",'A manual for how to take a good photo with your own phone. Designed in InDesign.'],
["Class Quote Book",'15.5.2023',"quoteBook.jpg",'As a last act for the class, I made a class quote book containing memorable sayings.']
];

var updateCol = [
  ["Date", 'Name', "Content"],
  ["Wednesday 20, June 2023", 'Test', "This is a test to see how the update text behaves. <br/> Although it might not work, I am prepared for the results."],
  ["Saturday 24, June 2023", 'First Contact', "I'm tired. This website is intricate, and every time I want to work on it, energy surges from me, and I don't want to. Yet, I know it will give me joy seeing a fully fleshed out website. My goal is to work on it tonight."]
];
//  under Latest Work
document.getElementById("workImg").src = "collections/portofolio/" + workCol.slice(-1)[0][2];
document.getElementById("work1").innerHTML = "🞄 " + workCol.slice(-1)[0][0];
document.getElementById("work2").innerHTML = "🞄 " + workCol.slice(-2)[0][0];
document.getElementById("work3").innerHTML = "🞄 " + workCol.slice(-3)[0][0];
document.getElementById("work4").innerHTML = "🞄 " + workCol.slice(-4)[0][0];

//  under Photographs
document.getElementById("photo1").src = "collections/photos/" + photoCol.slice(-1)[0][2];
document.getElementById("photo2").src = "collections/photos/" + photoCol.slice(-2)[0][2];
document.getElementById("photo3").src = "collections/photos/" + photoCol.slice(-3)[0][2];
document.getElementById("photo4").src = "collections/photos/" + photoCol.slice(-4)[0][2];
document.getElementById("photo5").src = "collections/photos/" + photoCol.slice(-5)[0][2];
document.getElementById("photo6").src = "collections/photos/" + photoCol.slice(-6)[0][2];
document.getElementById("photo7").src = "collections/photos/" + photoCol.slice(-7)[0][2];
document.getElementById("photo8").src = "collections/photos/" + photoCol.slice(-8)[0][2];
document.getElementById("photo9").src = "collections/photos/" + photoCol.slice(-9)[0][2];
document.getElementById("photo10").src = "collections/photos/" + photoCol.slice(-10)[0][2];

//  under Updates
document.getElementById("title1").innerHTML = updateCol.slice(-1)[0][0];
document.getElementById("title2").innerHTML = updateCol.slice(-2)[0][0];

document.getElementById("text1").innerHTML = updateCol.slice(-1)[0][2];
document.getElementById("text2").innerHTML = updateCol.slice(-2)[0][2];
