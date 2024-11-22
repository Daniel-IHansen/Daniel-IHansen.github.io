function fetchTemplate(templateFile) {
    fetch(templateFile)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(template => {
        // Insert the template into the header-container
        document.getElementById('headerContainer').innerHTML = template;
    })
    .catch(error => {
        console.error('Error fetching header template:', error);
    });
}