const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'examples': utils.resolve('examples'),
            'public': utils.resolve('public'),
            'packages': utils.resolve('packages'),
            'ms-template-manage': utils.resolve('packages/index.js'),
        }
    },
}
