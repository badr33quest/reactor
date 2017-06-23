const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const bootstrapEntryPoints = require('./webpack.bootstrap.config');
const path = require('path');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');


const isProd = process.env.NODE_ENV === 'production';
const cssLoader = {
    loader: 'css-loader',
    options: { autoprefixer: true, sourceMap: true, importLoaders: 1 }
};
const postcssLoader = {
    loader: 'postcss-loader',
    options: { sourceMap: true, plugins: () => [autoprefixer()] },
};

const cssDev = ['style-loader', cssLoader, postcssLoader, 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [cssLoader, postcssLoader, 'sass-loader'],
    publicPath: './'
});
const cssConfig = isProd ? cssProd : cssDev;
const appEntry = isProd ? './src_client/index.js' : [
    // activate HMR for React
    'react-hot-loader/patch',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint   
    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',
    // Our app main entry            
    './src_client/index.js',
];
let bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;


module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
        alias: {
            app_atoms: path.resolve(__dirname, 'src_client/components/atoms'),
            app_molecules: path.resolve(__dirname, 'src_client/components/molecules'),
            app_organisms: path.resolve(__dirname, 'src_client/components/organisms'),
            app_templates: path.resolve(__dirname, 'src_client/components/templates'),
            app_pages: path.resolve(__dirname, 'src_client/components/pages'),

            app_containers: path.resolve(__dirname, 'src_client/containers'),
            app_actions: path.resolve(__dirname, 'src_client/redux/actions'),
            app_reducers: path.resolve(__dirname, 'src_client/redux/reducers'),
            app_store: path.resolve(__dirname, 'src_client/redux/store'),

            app_services: path.resolve(__dirname, 'src_client/services')
        }
    },
    devtool: 'eval-source-map',
    entry: {
        app: appEntry,
        bootstrap: bootstrapConfig,
        vendor: [
            'whatwg-fetch'
        ]
    },
    output: {
        path: __dirname + '/dist_client',
        filename: '[name].bundle.js'
    },

    devServer: {
        contentBase: __dirname + '/dist_client',
        // compress: true,
        port: 8080,
        hot: true,
        stats: 'errors-only',
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'eslint-loader?failOnWarning=false']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: cssConfig
            },
            {
                test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
                loader: 'imports-loader?jQuery=jquery'
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                exclude: /fonts/,
                use: [
                    'file-loader?name=assets/images/[name].[ext]&publicPath=../../',
                    'image-webpack-loader'
                ]
            },
            {
                test: /\.(woff2?|svg)$/,
                exclude: /images/,
                loader: 'url-loader?limit=10000&name=assets/fonts/[name].[ext]'
            },
            {
                test: /\.(ttf|eot)$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            favicon: 'src_client/assets/images/favicon.ico',
            title: 'Reactor',
            hash: true,
            template: 'src_client/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'assets/css/[name].css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin()
        /*        , new PurifyCSSPlugin({
                    paths: glob.sync(path.join(__dirname, 'src_client/*.html'))
                })*/
    ]
};