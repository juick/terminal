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
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
            { test: /\.png$/, loader: "file?name=[name].[ext]" }
	]
    },
    plugins: [
        new ExtractTextPlugin("terminal.css", {
            allChunks: true
        })
    ]
}