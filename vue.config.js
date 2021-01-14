// module.exports = {
//     // 修改 src 目录 为 examples 目录
//     pages: {
//         index: {
//             entry: 'examples/main.js',
//             template: 'public/index.html',
//             filename: 'index.html'
//         }
//     }
// }

const devConfig = require('./build/config.dev')
const buildConfig = require('./build/config.build')

module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig
// module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig
