const __webpack_module_cache__ = {};

// CJS executor: require some
const cjsExecutorWithRequirement = (
  __unused_webpack_module,
  __unused_webpack_exports,
  __webpack_require__
) => {
  const c = __webpack_require__(/*! ./c */ './c.js');
  console.log('we in index b', JSON.stringify(c));
  //# sourceURL=webpack://webpack-debug/./index-b.js?
};

// CJS executor: export some
const cjsExecutorWithExport = (module) => {
  const subModule = { subFoo: 'sub foo' };
  module.exports = subModule;
  //# sourceURL=webpack://webpack-debug/./c.js?
};

const __webpack_modules__ = {
  './index-b.js': cjsExecutorWithRequirement,
  './c.js': cjsExecutorWithExport,
};

function __webpack_require__(moduleId) {
  // 尝试从缓存中读取模块
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  // 如果不在缓存中，则声明模块对象，并加入缓存
  var module = (__webpack_module_cache__[moduleId] = {
    // no module.id needed
    // no module.loaded needed
    exports: {},
  });

  // 从全局模块 mapping __webpack_modules__ 中加载对应模块
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

  // Return the exports of the module
  return module.exports;
}

// bootstrap
(() => {
  // require entry
  __webpack_require__('./index-b.js');

  return;
})();
