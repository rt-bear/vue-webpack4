const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

process.noDeprecation = true
// 入口
var entry = {
    // 把有需要打包的常用库封装，如babel-polyfill,jquery等
    vendor: ['vue', 'axios', 'vue-router', 'vuex', 'lodash']
}

var config = {
    mode: 'production',
    entry: entry,
    output: {
        path: path.resolve(__dirname, '../src/dll'),
        filename: 'vendor/[name].js',
        library: '[name]_library'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['src/dll'], {
            root: path.resolve(__dirname, '..'),       		// 根目录
            verbose: true,                          // 开启在控制台输出信息
            dry: false,                             // 启用删除文件
        }),
        // 划重点！！
        new webpack.DllPlugin({
            context: path.join(__dirname, '..'),
            // 指定路径
            path: path.join(__dirname, '../src/dll', '[name]-manifest.json'),
            // 指定依赖库的名称
            name: '[name]_library'
        }),
        // 会根据模块的相对路径生成一个几位数的hash作为模块id
        new webpack.HashedModuleIdsPlugin()
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     output: false,
        //     compress: {
        //         unused: true,
        //         dead_code: true,
        //         pure_getters: true,
        //         warnings: false,
        //         screw_ie8: true,
        //         conditionals: true,
        //         comparisons: true,
        //         sequences: true,
        //         evaluate: true,
        //         join_vars: true,
        //         if_return: true
        //     },
        //     comments: false,
        //     minimize: true
        // })
    ]
}

module.exports = config
