require('core-js-builder')({
    modules: ['esnext.reflect'],        // modules / namespaces, by default - all `core-js` modules
    blacklist: [], // blacklist of modules / namespaces, by default - empty list
    filename: './src/reflect-metadata.js',              // optional target filename, if it's missed a file will not be created
}).then(code => {                                  // code of result polyfill
    console.log(code);
}).catch(error => {
    console.error(error);
});
