// menuTab.js
export default function menuTab() {
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `
        <img src="images/restaurant2.png" alt="Menu Image" />
        <h2>Menu</h2>
        <ul>
            <li>Appetizers</li>
            <li>Main Courses</li>
            <li>Desserts</li>
        </ul>
    `;

    return menuDiv;
}
