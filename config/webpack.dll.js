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
