const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin") 
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = {
    entry: [path.resolve("./" , "src/index.js") , path.resolve("./" , "src/images.js")],
    output: {
        clean: true,
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader , "css-loader"],
            },
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "assets/img/[name]-[contenthash][ext]",
                },
            },
            {
                test: /\.svg$/i,
                type: 'asset/resource',
                generator: {
                    filename: "assets/svg/[name]-[contenthash][ext]",
                },
            },
            {
                test: /\.ico$/i,
                type: 'asset/resource',
                generator: {
                    filename: "assets/[name]-[contenthash][ext]",
                },
            },
            {
                test: /\.(ttf|woff?2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "assets/fonts/[name]-[contenthash][ext]",
                },
            },
            {
                test: /\.mp4$/i,
                type: 'asset/resource',
                generator: {
                    filename: "assets/videos/[name]-[contenthash][ext]",
                },
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
    devServer: {
        hot: false,
        open: true,
    },
    stats: "minimal",
}

module.exports = {
    baseConfig,
    plugins: {
        MiniCssExtractPlugin: {
            constructor: MiniCssExtractPlugin,
            config: {
                filename: "style-[contenthash].css",
                linkType: "text/css",
            },
        },
        HtmlWebpackPlugin: {
            constructor: HtmlWebpackPlugin,
            config: {
                template: path.resolve("./" , "index.html"),
                minify: true,
            },
        }
    }
}