__webpack_require__.r = (exports) => {
  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  }
  Object.defineProperty(exports, '__esModule', { value: true });
};

__webpack_require__.d = (exports, definition) => {
  for (var key in definition) {
    if (
      __webpack_require__.o(definition, key) &&
      !__webpack_require__.o(exports, key)
    ) {
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: definition[key],
      });
    }
  }
};

if (!self['webpackChunkwebpack_debug']) {
  self['webpackChunkwebpack_debug'] = [];
}

// push 方法被改写成 webpackJsonpCallback
self['webpackChunkwebpack_debug'].push([
  ['b_js'],
  {
    './b.js': asyncModuleExecutor,
  },
]);

function asyncModuleExecutor(
  __unused_webpack_module,
  __webpack_exports__,
  __webpack_require__
) {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */
  __webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    default: () => __WEBPACK_DEFAULT_EXPORT__ /* harmony export */,
  });
  const m = { foo: 'dynamic' };
  console.log('a dynamic module');
  /* harmony default export */
  const __WEBPACK_DEFAULT_EXPORT__ = m;
  //# sourceURL=webpack://webpack-debug/./b.js?";
}
