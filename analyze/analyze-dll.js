// 具体的 DLL 模块代码
const dllExectuor = (
  __unused_webpack_module,
  __webpack_exports__,
  __webpack_require__
) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */
  __webpack_require__.d(__webpack_exports__, {
    /* harmony export */ default: () =>
      __WEBPACK_DEFAULT_EXPORT__ /* harmony export */,
  });
  const _module = { addOne: (x) => x + 1, square: (x) => x * x };
  /* harmony default export */
  const __WEBPACK_DEFAULT_EXPORT__ = _module;
  //# sourceURL=webpack://_/./dll/index.js?"
};

const __webpack_modules_4_DLL__ = {
  './dll/index.js': dllExectuor,
  '?2b06': (module, __unused_webpack_exports, __webpack_require__) => {
    // 用于暴露 dll 的 __webpack_require__ 方法
    module.exports = __webpack_require__;
    //# sourceURL=webpack://_/dll_dll?
  },
};

const __webpack_module_cache_4_DLL__ = {};

// DLL 模块的 require 方法
const __webpack_require_4_DLL__ = function (moduleId) {
  var cachedModule = __webpack_module_cache_4_DLL__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  var module = (__webpack_module_cache_4_DLL__[moduleId] = {
    exports: {},
  });

  __webpack_modules_4_DLL__[moduleId](
    module,
    module.exports,
    __webpack_require_4_DLL__
  );

  return module.exports;
};

// bootstrap DLL module
var dll_150234e535e403086470;
// 在全局挂载 __webpack_require_4_DLL__，其中能访问到具体的 dll 代码
dll_150234e535e403086470 = __webpack_require_4_DLL__('?2b06');

// 注入 runtime 方法
((__webpack_require__) => {
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
  __webpack_require__.o = (obj, prop) =>
    Object.prototype.hasOwnProperty.call(obj, prop);
})(__webpack_require_4_DLL__);

/* ======================================================== */
/* ===================== entry module ===================== */
/* ======================================================== */

const __webpack_module_cache__ = {};

// entry 的 require 方法
const __webpack_require__ = function (moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  var module = (__webpack_module_cache__[moduleId] = {
    exports: {},
  });

  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

  return module.exports;
};
// 注入 runtime 方法
((__webpack_require__) => {
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
  __webpack_require__.o = (obj, prop) =>
    Object.prototype.hasOwnProperty.call(obj, prop);
})(__webpack_require__);

// entry 的逻辑
const mainExecutor = (
  __unused_webpack_module,
  __unused_webpack___webpack_exports__,
  __webpack_require__
) => {
  /* harmony import */
  var _dll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../dll */
    './dll/index.js'
  );

  (() => {
    const num = 0;
    const ret = _dll__WEBPACK_IMPORTED_MODULE_1__['default'].addOne(num);
    console.log('calc ret', ret);
  })();
  //# sourceURL=webpack://webpack-debug/./src/index-a.js?
};

const dllRefExecutor = (
  module,
  __unused_webpack_exports,
  __webpack_require__
) => {
  // 引用到 dll 全局变量
  // ref 为 dll 模块内部的加载器
  const ref = __webpack_require__(
    /*! dll-reference dll_150234e535e403086470 */
    'dll-reference dll_150234e535e403086470'
  );
  // 通过 dll 内部挂载到全局的加载器加载 dll 模块内容
  module.exports = ref('./dll/index.js');
  //# sourceURL=webpack://webpack-debug/delegated_./dll/index.js_from_dll-reference_dll_150234e535e403086470?;
};

const __webpack_modules__ = {
  './src/index-a.js': mainExecutor,
  './dll/index.js': dllRefExecutor,
  // 返回外部 dll 模块的加载器
  'dll-reference dll_150234e535e403086470': (module) => {
    module.exports = dll_150234e535e403086470;
  },
};

// bootstrap entry
__webpack_require__('./src/index-a.js');
