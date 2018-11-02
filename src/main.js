// 入口文件需要添加此段代码才能实现局部热更新，https://webpack.js.org/guides/hot-module-replacement/#enabling-hmr
if (module.hot) { module.hot.accept(); }

// 因为调用import()语法webpack会最后生成Promise语法， 所以transform-runtime解析不了， 需要先定义全局Promise语法让其解析
window.Promise = Promise;

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
