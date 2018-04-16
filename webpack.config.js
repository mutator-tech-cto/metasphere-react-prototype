const path = require("path");
const indexHTML = require("./webpack/index.html.config.js");

module.exports = {
    entry: [
        path.join(__dirname, "src", "metasphere.application.jsx")
    ],
    resolve: {
        extensions: [
            ".jsx", ".js"
        ]
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["react"]
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "all",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js"
    },
    plugins: [
        indexHTML.plugin()
    ],
    devServer: {
        host: "localhost",
        port: 9090,
        open: false,
        allowedHosts: [
            "localhost"
        ]
    }
};
