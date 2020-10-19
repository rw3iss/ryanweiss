var path = require("path");
var webpack = require("webpack");

const PATHS = {
    src: __dirname,
    app: path.join(__dirname, 'app'),
    server: path.join(__dirname, 'server'),
    styles: path.join(__dirname, 'app', 'scss'),
    dist: path.join(__dirname, 'dist'),
    modules: path.join(__dirname, 'node_modules')
};

module.exports = {

    entry: {
        vendor: [path.join(PATHS.app, 'js', 'vendors.js')]
    },

    output: {
        path: path.join(PATHS.dist, 'js', 'dll'),
        filename: "dll.[name].js",
        library: "[name]"
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [PATHS.modules],
                include: [PATHS.app], 

                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            plugins: ["transform-regenerator"],
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }

        ]
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.join(PATHS.dist, '[name]-manifest.json'),
            name: "[name]",
            context: PATHS.src
        })
    ],

    resolve: {
        extensions: [".js"],
        //root: PATHS.app,
        modules: [PATHS.modules]
    }
};
