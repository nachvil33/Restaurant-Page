import menuTab from './menuTab';
import { clearAndAppend } from './index';

describe('Menu tab button', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <button id="menu-tab">Menu</button>
            <div id="content"></div>
        `;
        const menuTabButton = document.getElementById('menu-tab');
        menuTabButton.addEventListener('click', () => {
            clearAndAppend(menuTab());
        });
    });

    test('should display menu content when menu tab is clicked', () => {
        const menuTabButton = document.getElementById('menu-tab');
        menuTabButton.click();
        const contentDiv = document.getElementById('content');
        expect(contentDiv).toContainHTML('<h2>Menu</h2>');
        // Otros expects para verificar la presencia de la lista de menú y elementos individuales
    });
});
