// contactTab.js
export default function contactTab() {
    const contactDiv = document.createElement('div');
    contactDiv.innerHTML = `
        <img src="images/restaurant3.png" alt="Contact Image" />
        <h2>Contact Us</h2>
        <p>Email: info@restaurant.com</p>
        <p>Phone: +1 123 456 7890</p>
    `;

    return contactDiv;
}
