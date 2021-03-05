var path = require('path');
var nodeExternals = require("webpack-node-externals");
var webpack = require('webpack');


var config = {
    mode: "development",
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
              },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css"],
        modules: ["src", "node_modules"]
    }
}

var server = Object.assign({}, config, {
    name: "server",
    target: "node",
    externals: [nodeExternals()],
    entry: path.resolve(__dirname, "app.tsx"),
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "build")
    }
});

var loginApp = Object.assign({}, config, {
    name: "login",
    target: "web",
    entry: path.resolve(__dirname, "login-app/src/index.tsx"),
    output: {
        filename: "login-bundle.js",
        path: path.resolve(__dirname, "build")
    }
});

var pageApp = Object.assign({}, config, {
    name: "page",
    target: "web",
    entry: path.resolve(__dirname, "page-app/src/index.tsx"),
    output: {
        filename: "page-bundle.js",
        path: path.resolve(__dirname, "build")
    }
});

var styles = Object.assign({}, config, {
    name: "styles",
    entry: [path.resolve(__dirname, "page-app/src/global.css"), path.resolve(__dirname, "login-app/src/global.css")],
    output: {
        filename: "global.css",
        path: path.resolve(__dirname, "build")
    }
});

module.exports = [loginApp, server, pageApp, styles];