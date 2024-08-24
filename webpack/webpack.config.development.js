const baseConfig = require("./webpack.config.base.js")
const path = require('path')
const deepObjCloning = require("./recursiveDeepObjectCloning.js")
const addPlugins = require("./addPlugins.js")

const config = deepObjCloning(baseConfig.baseConfig)

config.output.path = path.resolve("./" , "dev-build")
config.output.filename = "bundle-[contenthash].js"

config.plugins = addPlugins(baseConfig.plugins , config.plugins , "development")

config.devServer.static = {
    directory: path.resolve("./" , 'dev-build'),
}
config.devServer.compress = false
config.devServer.port = 3002

module.exports = config
