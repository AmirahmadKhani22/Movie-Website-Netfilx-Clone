const baseConfig = require("./webpack.config.base.js")
const path = require('path')
const deepObjCloning = require("./recursiveDeepObjectCloning.js")
const addPlugins = require("./addPlugins.js")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")

const config = deepObjCloning(baseConfig.baseConfig)

config.output.path = path.resolve("./" , "build")
config.output.filename = "index-[contenthash].js"

config.plugins = addPlugins(baseConfig.plugins , config.plugins).concat([
    new CssMinimizerPlugin(), 
    new TerserPlugin(), 
])

config.optimization = {
    minimize: true,
    minimizer: [
        new CssMinimizerPlugin({
            test: /\.css$/i,
            parallel: true,
            minimizerOptions: {
                preset: [
                    "cssnano-preset-simple",
                    {
                        discardComments: { removeAll: true },
                    }
                ]
            },
            minify: [CssMinimizerPlugin.cssnanoMinify],
        }), 
        new TerserPlugin(),
        new ImageMinimizerPlugin({
            minimizer: [{
                implementation: ImageMinimizerPlugin.imageminMinify,
                options: {
                    plugins: [
                        ["gifsicle", { interlaced: true }],
                        ["jpegtran" , { progressive: true }],
                        ["optipng" , { optimizationLevel: 5 }],
                        /*["svgo" , {
                                plugins: [
                                    {
                                        name: "preset-default",
                                        params: {
                                            overrides: {
                                                removeViewBox: false,
                                                addAttributesToSVGElement: {
                                                    attributes: [
                                                        { xmlns: "http://www.w3.org/2000/svg" },
                                                    ],
                                                },
                                            },
                                        },
                                    }
                                ],
                            }
                        ],*/
                    ],
                },
            }],
            /*generator: [{
                preset: "webp",
                implementation: ImageMinimizerPlugin.imageminGenerate,
                options: {
                    plugin: ["imagemin-webp"]
                }
            }]*/
        }) 
    ],
}

config.devServer.static = {
    directory: path.resolve("./" , 'build'),
}
config.devServer.compress = true
config.devServer.port = 4002
config.stats = "verbose"

module.exports = config
