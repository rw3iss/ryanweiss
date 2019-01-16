var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        vendor: [path.join(__dirname, "src/js", "vendors.js")]
    },
    output: {
        path: path.join(__dirname, "dist/js", "dll"),
        filename: "dll.[name].js",
        library: "[name]"
    },
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel',
            include: [
                path.join(__dirname, "src/js") //important for performance
            ], 
            query: {
                cacheDirectory: true, //important for performance
                plugins: ["transform-regenerator"],
                presets: ["es2015"]
            }
        }
    ],
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "dist/js/dll", "[name]-manifest.json"),
            name: "[name]",
            context: path.resolve(__dirname, "src")
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        //new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        extensions: ["", ".js"],
        root: path.resolve(__dirname, "src"),
        modulesDirectories: ["node_modules"]
    }
};
