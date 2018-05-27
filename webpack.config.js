var webpack = require("webpack")
var globby = require("globby")
var MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    entry: {
        "terminal" : globby.sync([
            __dirname + "/lib/*.*"
        ])
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.css$/, use: [ MiniCssExtractPlugin.loader, "css-loader" ] },
            { test: /\.png$/, use: "url-loader" }
	]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "terminal.css",
            allChunks: true
        })
    ]
}
