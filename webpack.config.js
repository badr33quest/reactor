const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader', 
    use: ['css-loader', 'sass-loader'],
    publicPath: './'
});
const cssConfig = isProd ? cssProd : cssDev;


module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
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
            }
        ]
    },

    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
        port: 8080,
        stats: 'errors-only'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Reactor',
            hash: true,
            template: 'src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'index.css',
            disable: !isProd,
            allChunks: true
        })
    ]
};