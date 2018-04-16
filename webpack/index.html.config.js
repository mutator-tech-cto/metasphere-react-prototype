const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugin: () => {
        return new HtmlWebpackPlugin({
            title: "Metasphere ECMAScript2017 Prototype",
            template: "./src/metasphere.template.html"
        });
    }
};
