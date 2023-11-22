import pageLoad from './pageLoad';
import contactTab from './contactTab';
import menuTab from './menuTab';

// Ejecutar la carga inicial de la página
document.addEventListener('DOMContentLoaded', () => {
    pageLoad();

    // Event listeners para las pestañas
    const homeTabButton = document.getElementById('home-tab');
    const contactTabButton = document.getElementById('contact-tab');
    const menuTabButton = document.getElementById('menu-tab');

    homeTabButton.addEventListener('click', pageLoad);
    contactTabButton.addEventListener('click', () => {
        clearAndAppend(contactTab());
    });
    menuTabButton.addEventListener('click', () => {
        clearAndAppend(menuTab());
    });
});

function clearAndAppend(newChild) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(newChild);
}
