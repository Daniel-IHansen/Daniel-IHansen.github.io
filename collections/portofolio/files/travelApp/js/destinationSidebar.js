const sidebar = document.getElementById('infoSidebar');
const icons = document.querySelectorAll('.sidebarIcon');
let clickedIcon = null;

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        //  check if the sidebar is currently hidden
        const active = sidebar.classList.contains('sidebarActive');

        //  toggle the sidebar and store the clicked icon's name
        if (active) {
            clickedIcon = icon.getAttribute('name');
            sidebar.classList.remove('sidebarActive');
            sidebarState = icon.getAttribute('name');
        } else {
            sidebar.classList.add('sidebarActive');
        }
    });
});