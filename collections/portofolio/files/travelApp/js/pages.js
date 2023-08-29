function readPlace(page) {
    fetch('./pages/' + page)
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("main");
        let newelem = document.createElement("main");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem,oldelem);
    });
};
readPlace('destinationCont.html');