var path = require("path");
var webpack = require("webpack");

const ROOT = path.resolve( path.join(__dirname, '..'));
const PATHS = {
    src: ROOT,
    app: path.join(ROOT, 'app'),
    server: path.join(ROOT, 'server'),
    styles: path.join(ROOT, 'app', 'scss'),
    dist: path.join(ROOT, 'dist'),
    modules: path.join(ROOT, 'node_modules')
};

module.exports = {
    cache: true,
    devtool: 'eval',

    entry: {
        app: [
            'webpack/hot/poll?1000',
            path.join(PATHS.root, 'server', 'server.js')
        ]
    },

    target: 'node',

    output: {
        path: PATHS.dist,
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
                include: [PATHS.server], 
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
       //root: PATHS.server,
        modulesDirectories: ["node_modules"]
    }
};