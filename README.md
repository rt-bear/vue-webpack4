# vue-webpack4
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run start

# build for production with minification
npm run build

# build for dll
npm run dll 

# build for dll and start
npm run dev
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
## webpack4升级
Webpack4相较于webpack3最主要的优化是打包速度的提升，打包的体积减小。有默认配置且配置简单一些。
升级到webpack4主要有以下注意事项：
1.node 版本9以上，npm版本6以上
2.Webpack4需安装webpack-cli
3.extract-text-webpack-plugin被弃用，改为mini-css-extract-plugin
4.vueloader需要升级到14以上。版本在15以上的需要在插件配置中
new VueLoaderPlugin()
5.通过mode设置是哪个环境。DefinePlugin被弃用
开发环境需指定 mode: 'development'
生产环境需指定mode: 'production'
6.splitChunks替代CommonsChunkPlugin
7.webpack4自带压缩功能弃用UglifyJsPlugin
8.一些插件例如babel、eslint和loader的版本升级

## 打包优化
1.mini-css-extract-plugin单独打包css
2.使用fast-sass-loader 代替sass-loader 处理sass速度更快
https://www.npmjs.com/package/fast-sass-loader
3.设置alias提供更方便的路径
4.使用eslint-friendly-formatter做eslint校验
5.开发环境dll将第三方文件打包
