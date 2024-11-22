// Create a new DOM element for the navigation
var nav = document.createElement('nav');
nav.classList = "w3-bar";
nav.innerHTML = `
    <a href="/collection/portfolio/files/travelAppJS/pages/destination.html" class="w3-bar-item">
        <ion-icon name="compass-outline"></ion-icon>
        <p>destinasjoner</p>
    </a>
    <a href="/collection/portfolio/files/travelAppJS/pages/travelPlanner.html" class="w3-bar-item">
        <ion-icon name="analytics-outline"></ion-icon>
        <p>reiseplanlegger</p>
    </a>
    <a href="/collection/portfolio/files/travelAppJS/index.html" class="logo"><img src="/collection/portfolio/files/travelAppJS/media/logo/verdenVidere.svg" alt="Logo for Verden Videre"></a>
    <a href="/collection/portfolio/files/travelAppJS/pages/stories.html" class="w3-bar-item">
        <ion-icon name="heart-outline"></ion-icon>
        <p>reisehistorier</p>
    </a>
    <a href="/collection/portfolio/files/travelAppJS/loginSystem/login.html" class="w3-bar-item" id="loginLink" >
        <ion-icon id="loginIcon" name="log-in-outline"></ion-icon>
        <p id="loginText" >login</p>
    </a>
`;

// Get the first child of the <body> element (if any)
var firstChild = document.body.firstChild;

// Append the nav element to the body
document.body.insertBefore(nav, firstChild);