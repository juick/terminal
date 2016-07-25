var webpack = require("webpack")
var globby = require("globby")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
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
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.png$/, loader: "url-loader" }
	]
    },
    plugins: [
        new ExtractTextPlugin("terminal.css", {
            allChunks: true
        })
    ]
}