const developmentConfig = require('./webpack/webpack.config.development.js')
const productionConfig = require('./webpack/webpack.config.production.js')

module.exports = (env , argv) => {
    switch(argv.mode) {
        case "development":
            return developmentConfig
        case "production":
            return productionConfig
    }
}
