// 组件懒加载
function $import(file) {
    return () =>
        import(`views/${file}`)
}

export {
    $import
};
