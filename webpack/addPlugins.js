function addPlugins(pluginsObj , pluginsArray , mode = "") {
    let count = 0
    for(let plugin in pluginsObj) {
        const item = pluginsObj[plugin]

        if(mode === "development" && plugin === "HtmlWebpackPlugin") {
            item.config.minify = false
        }

        pluginsArray[count] = new item.constructor(item.config)
        count++
    }
    return pluginsArray
}

module.exports = addPlugins
