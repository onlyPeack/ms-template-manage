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


//为npm提供资源包时 使用build命令
// module.exports =  buildConfig


//为HTML文件提供资源包时 使用lib命令
// 项目启动时使用此行
module.exports =devConfig

