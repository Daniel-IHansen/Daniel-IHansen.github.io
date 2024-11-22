window.addEventListener('DOMContentLoaded', () => {
    //  changes the icon from profile to chart
    document.querySelector("#loginIcon").setAttribute('name', 'bar-chart-outline');

    // changes the text from Login to Dashboard
    document.querySelector("#loginText").innerHTML = "dashboard";

    // changes the link from Login to Dashboard
    document.querySelector("#loginLink").href = "./projects/travelApp/loginSystem/dashboard.php";
});