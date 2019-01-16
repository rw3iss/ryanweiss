var path = require("path");
var webpack = require("webpack");

module.exports = {
    cache: true,
    devtool: 'eval',

    entry: {
        app: [
            'webpack/hot/poll?1000',
            './server/server.js'
        ]
    },

    target: 'node',

    output: {
        path: './dist',
        //publicPath: 'http://localhost/',
        filename: 'server.js'
    },

    module: {
        preLoaders: [
            { test: /\.json$/, exclude: /node_modules/, loader: 'json'},
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: [              
                    path.join(__dirname, "server") //important for performance
                ], 
                query: {
                    cacheDirectory: true, //important for performance
                    plugins: ["transform-regenerator"],
                    presets: ["react", "es2015"]
                }
            }
        ]
    },

    plugins: [ 
      new webpack.HotModuleReplacementPlugin()
    ],

    resolve: {
        extensions: ["", ".js", ".jsx", "json"],
        root: path.resolve(__dirname, "server"),
        modulesDirectories: ["node_modules"]
    }
};