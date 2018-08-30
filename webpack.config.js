const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        vendor: './src/js/vendor.js',
        app: './src/js/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Startup Weekend 2018',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    devServer: {
        contentBase: './dist'
    },
    devtool: "source-map", // any "source-map"-like devtool is possible
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    // creates style nodes from JS strings
                    loader: "style-loader"
                },
                {
                    // translates CSS into CommonJS
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                },
                {
                    // compiles Sass to CSS, using Node Sass by default
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }
            ]
        }]
    }
};