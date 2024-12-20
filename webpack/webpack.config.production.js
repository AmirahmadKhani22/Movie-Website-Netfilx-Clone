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

const SRC_IMAGE_FORMAT = "jpg"
const DEST_IMAGE_FORMAT = "png"

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
            generator: [
                {
                    preset: DEST_IMAGE_FORMAT,
                    filename: "img/[name]-[contenthash][ext]",
                    implementation: ImageMinimizerPlugin.sharpGenerate,
                    options: {
                        encodeOptions: {
                            [DEST_IMAGE_FORMAT]: {
                                quality: 100,
                            }
                        },
                    },
                },
                {
                    preset: SRC_IMAGE_FORMAT,
                    implementation: ImageMinimizerPlugin.sharpGenerate,
                    options: {
                        encodeOptions: {
                            [SRC_IMAGE_FORMAT]: {
                                quality: 100,
                            }
                        },
                    },
                },
            ],
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
