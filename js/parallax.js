// Select all elements with the class 'parallax'
const parallax_el = document.querySelectorAll(".parallax");
// Select the 'main' element
const main = document.querySelector("main");

// Initialize variables for position and rotation
let xValue = 0;
let yValue = 0;
let rotateDegree = 0;

// Function to update the position of parallax elements based on the cursor position
function update(cursorPosition) {

    // Iterate through each parallax element
    parallax_el.forEach((el) => {
    // Get the speed values from the data attributes
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation;

    // Check if the element is on the left or right side of the screen
    let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

    // Update the transform property of the element
    el.style.transform = `
        translateX(calc(-50% + ${ -xValue * speedx }px)) 
        translateY(calc(-50% + ${ yValue * speedy }px))
        perspective(2300px)
        translateZ(${ zValue * speedz }px)
        rotateY(${ rotateDegree * rotateSpeed}deg)`;
    })
}

// Initialize the update function with an initial cursor position of 0
update(0);

// Event listener for the mousemove event
window.addEventListener("mousemove", (e) => {
    // If the GSAP timeline is active, return
    if(timeline.isActive()) return;

    // Update the x and y values based on the cursor position
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    // Calculate the rotation degree based on the cursor position
    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

    // Call the update function with the cursor position
    if(window.innerWidth >= 725) {
        update(e.clientX);
    }
});

// Adjust the 'main' element's max height based on the window width
if(window.innerWidth >= 725) {
    main.style.maxHeight = `${window.innerWidth * .5}px`;
} else {
    main.style.maxHeight = `${window.innerWidth * 2.2}px`;
}

// Create a GSAP timeline
let timeline = gsap.timeline();

// Iterate through each parallax element, excluding those with the class 'text'
Array.from(parallax_el)
    .filter((el) => !el.classList.contains("text"))
    .forEach((el) => {
        // Add animation to each element
        timeline.from(
            el,
            {
                y: el.offsetHeight / 2 + +el.dataset.distance,
                duration: 2.5,
                ease: "power3.out",
            },
            "1"
        );
    });

// Add animations for text elements
timeline.from(
    ".text h1",
    {
        y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top + 200,
        duration: 2,
    },
    "2.5"
).from(
    ".text h2",
    {
        y: -150,
        opacity: 0,
        duration: 1.5,
    },
    "3"
).from(".hide", {
    opacity: 0,
    duration: 1.5,
}, "3");
