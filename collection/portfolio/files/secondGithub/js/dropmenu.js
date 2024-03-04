let menuOpen = false;

function dropMenu() {
    const menu = document.querySelector(".drop")
    const menuLinks = document.getElementsByClassName("dropLink")
    const button = document.querySelector(".dropdown")

    if (menuOpen) {
        menuOpen = false;
    
        Array.from(menuLinks).forEach(function (link) {
            link.style.opacity = 0;
        });
        button.style.transform = "rotate(0deg)";
    }
    else if (!menuOpen) {
        menuOpen = true;
    
        Array.from(menuLinks).forEach(function (link) {
            link.style.opacity = 1;
        });
        button.style.transform = "rotate(90deg)";
    }
    
    
}