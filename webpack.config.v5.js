var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    app: path.join(__dirname, 'src', 'js'),
    styles: path.join(__dirname, 'src', 'scss'),
    dist: path.join(__dirname, 'dist')
};

module.exports = [{
    name: 'browser',
    cache: true,
    devtool: 'eval',

    entry: {
        app: [
            './src/js/app.js',
            //'./src/scss/app.scss'
        ]
    },

    output: {
        path: PATHS.dist,
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].chunk.js',
    },

    module: {

        rules: [

            { 
                test: /\.json$/, 
                exclude: /node_modules/, 
                loader: 'json'
            },

            {
                test: /\.jsx?$/,
                include: [PATHS.app], 

                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            plugins: ["transform-regenerator"],
                            presets: ["react", "es2015"]
                        }
                    }
                ]
            },

            {
                test: /\.scss$/,
                include: [
                    PATHS.styles
                ],
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['postcss-preset-env',],
                                    ['autoprefixer']
                                ],
                            },
                        },
                    },
                ]
            }
        ]
    },

    plugins: [ 
        // new webpack.DllReferencePlugin({
        //     context: path.join(__dirname, "src"),
        //     manifest: require("./dist/js/dll/vendor-manifest.json")
        // }),
        /*
        // new ExtractTextPlugin('[name].[chunkhash].css')
        new ExtractTextPlugin('css/[name].css', {
            publicPath: '/css/',
            allChunks: true
        })
        */
    ],

    resolve: {
        extensions: [".js", ".jsx"],
        roots: [PATHS.src],
        modules: [path.join(PATHS.src, "node_modules")]
    }
}


/*,
{

    // The configuration for the server-side rendering
        name: "server-side rendering",
        entry: "./server/server.js",
        target: "node",
        output: {
            path: './dist',
            filename: "server.generated.js",
            publicPath: 'dist',
            //libraryTarget: "commonjs2"
        },
        externals: /^[a-z\-0-9]+$/,
        module: {
            preLoaders: [
                { test: /\.json$/, exclude: /node_modules/, loader: 'json'},
            ],
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel',
                    include: [              
                        path.join(__dirname, "server"), //important for performance
                        path.join(__dirname, "src/js")
                    ], 
                    query: {
                        cacheDirectory: true, //important for performance
                        plugins: ["transform-regenerator"],
                        presets: ["react", "es2015"]
                    }
                }
            ]
        }
        /*
        module: {
            loaders: commonLoaders.concat([
                { test: /\.css$/,  loader: path.join(__dirname, "server", "style-collector") + "!css-loader" },
            ])
        }
        *

}*/
]