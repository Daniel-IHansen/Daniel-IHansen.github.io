function showAll(objects, moreButton) {
    objects.forEach(object => {
        object.style.display = "flex";
    })
    moreButton.style.display = "none";
}