const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/modal-element/runtime.js',
        './dist/modal-element/polyfills.js',
        './dist/modal-element/scripts.js',
        './dist/modal-element/main.js'
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/modal-element.js');
    await fs.copyFile(
        './dist/modal-element/styles.css',
        'elements/styles.css'
    );
})();