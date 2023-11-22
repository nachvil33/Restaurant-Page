const path = require('path');

module.exports = {
    entry: './src/index.js', // Asegúrate de que la ruta a index.js sea correcta
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'), // Asegúrate de que el directorio 'dist' sea el correcto
    },
    mode: 'development', // Cambia a 'production' cuando estés listo para desplegar
    // Configuraciones adicionales como loaders, plugins, etc.
};
