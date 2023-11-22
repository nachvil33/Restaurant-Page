// pageLoad.js
export default function pageLoad() {
    const contentDiv = document.getElementById('content');

    // Estructura básica de la página de inicio
    const homepage = document.createElement('div');
    homepage.innerHTML = `
        <img src="images/restaurant1.png" alt="Landing Image" />
        <h1>Welcome to Our Restaurant</h1>
        <p>Experience the finest dining with us!</p>
    `;

    // Agregar la página de inicio al contenido
    contentDiv.appendChild(homepage);
}
