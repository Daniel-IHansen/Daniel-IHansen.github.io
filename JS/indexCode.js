//  displays the desired items

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

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger */
function showMenu() {
  var x = document.getElementById("mobileMenu");
  if (x.style.opacity === "1") {
    var intervalID = setInterval(() => {
      x.style.opacity -= 0.1;
      if (x.style.opacity == 0) {
        clearInterval(intervalID);
      }
    }, 10);
  } else {
    let opacity = 0;
    var intervalID = setInterval(() => {
      opacity += 0.1;
      x.style.opacity = opacity;
      if (parseFloat(x.style.opacity) == 1) {
        clearInterval(intervalID);
      }
    }, 10);
  }
}