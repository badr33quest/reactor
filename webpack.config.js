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
    options: { autoprefixer: true, sourceMap: true,importLoaders: 1 }
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
let bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;


module.exports = {
    entry: {
        app: './src/app.js',
        bootstrap: bootstrapConfig
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.scss$/, 
                use: cssConfig
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                exclude: /fonts/,
                use:[
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
            },
            { 
                test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, 
                loader: 'imports-loader?jQuery=jquery' 
            }
        ]
    },

    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
        port: 8080,
        hot: true,
        stats: 'errors-only'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Reactor',
            hash: true,
            template: 'src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'assets/css/[name].css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        })
    ]
};