/* craco.config.js */
const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@interfaces": path.resolve(__dirname, "src/interfaces"),
            "@enums": path.resolve(__dirname, "src/enums"),
            "@routes": path.resolve(__dirname, "src/routes"),
            "@views": path.resolve(__dirname, "src/views"),
            "@zustand": path.resolve(__dirname, "src/zustand"),
        },
    },
};
