const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const autoprefixer = require('autoprefixer')


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
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use:[
                    'file-loader?name=images/[name].[ext]',
                    'image-webpack-loader'
                ]
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
            filename: 'index.css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};