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

module.exports = [{
    name: 'browser',
    cache: true,
    devtool: 'eval',

    entry: {
        app: [
            path.join(PATHS.app, 'js', 'app.js')
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
                test: /\.jsx?$/,
                exclude: [PATHS.modules],
                include: [PATHS.app], 

                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            plugins: ["transform-regenerator"],
                            presets: ["@babel/preset-react", "@babel/preset-env"]
                        }
                    }
                ]
            },

            {
                test: /\.scss$/,
                include: [PATHS.styles],
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['postcss-preset-env'],
                                    ['autoprefixer']
                                ],
                            },
                        },
                    },
                ]
            },

            {
                test: /.*\.(gif|png|jpe?g|svg)$/,
                loader: "file-loader",
                exclude: [PATHS.modules, PATHS.server],
                options: {
                    name: "[name].[ext]",
                    outputPath: (url, resourcePath, context) => {
                        const relativePath = path.relative(context, resourcePath);
            
                        // ignore SVG file if its relative path contains "fonts"
                        if (/\/fonts\//.test(relativePath)) {
                            return;
                        }
            
                        return `images/${url}`;
                    },
                },
            },
            
            {
                test: /.*\.(ttf|eot|woff|woff2|svg)$/,
                loader: "file-loader",
                exclude: [PATHS.modules, PATHS.server],
                options: {
                    name: "[name].[ext]",
                    outputPath: (url, resourcePath, context) => {
                        const relativePath = path.relative(context, resourcePath);
            
                        // ignore SVG file if its relative path contains "images"
                        if (/\/images\//.test(relativePath)) {
                            return;
                        }
            
                        return `fonts/${url}`;
                    },
                },
            },


        ]
    },

    plugins: [ 
        new webpack.DllReferencePlugin({
            context: PATHS.app,
            manifest: path.join(PATHS.dist, 'vendor-manifest.json')
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
        extensions: [".js", ".jsx"],
        roots: [PATHS.app],
        modules: [PATHS.modules]
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