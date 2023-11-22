import pageLoad from './pageLoad';

describe('Initial page load', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="content"></div>';
        pageLoad();
    });

    test('should populate #content with correct elements', () => {
        const contentDiv = document.getElementById('content');
        expect(contentDiv).toContainHTML('<h1>Welcome to Our Restaurant</h1>');
        // Otros expects para verificar la presencia de otros elementos
    });
});
