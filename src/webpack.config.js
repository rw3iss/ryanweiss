var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src', 'js'),
  style: path.join(__dirname, 'src', 'css', 'app.css'),
  build: path.join(__dirname, 'dist')
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
        path: './dist',
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].chunk.js',
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
                    path.join(__dirname, "src/js") //important for performance
                ], 
                query: {
                    cacheDirectory: true, //important for performance
                    plugins: ["transform-regenerator"],
                    presets: ["react", "es2015"]
                }
            },
            {
                test: /\.scss$/,
                include: [
                    path.join(__dirname, "src/scss") //important for performance
                ],
                loaders: ['style', 'css', 'sass', 'postcss']
                //loader: ExtractTextPlugin.extract('style', 'css!sass')
            }
        ]
    },

    postcss: function () {
        return [autoprefixer];
    },

    plugins: [ 
        new webpack.DllReferencePlugin({
            context: path.join(__dirname, "src"),
            manifest: require("./dist/js/dll/vendor-manifest.json")
        }),
        /*
        // new ExtractTextPlugin('[name].[chunkhash].css')
        new ExtractTextPlugin('css/[name].css', {
            publicPath: '/css/',
            allChunks: true
        })
        */
    ],

    resolve: {
        extensions: ["", ".js", ".jsx"],
        root: path.resolve(__dirname, "src"),
        modulesDirectories: ["node_modules"]
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