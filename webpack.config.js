const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

var common={};
const isProduction = process.env.ENV === 'production';
const port = 8080;

const devtool = isProduction ? 'source-map' : 'inline-source-map';
const devServer = {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true,
};

const plugins = [new HtmlWebPackPlugin({
    template: "public/index.html",
}),];

if (isProduction) {
    plugins.push(new MiniCssExtractPlugin({
        filename: 'styles/styles.css'
    }));
}
else {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    common['resolve'] = {
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    };
}

common = {
    mode: isProduction ? 'production' : 'development',
    entry: './src/app.js',
    output: {
        filename: 'static/bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isProduction ? false : true,
                        }
                    }
                ]
            },
        ],
    },
    plugins,
    devtool,
    devServer
};

module.exports = common;