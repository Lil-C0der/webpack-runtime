__webpack_require__.o = (obj, prop) =>
  Object.prototype.hasOwnProperty.call(obj, prop);

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

/* webpack/runtime/get javascript chunk filename */
__webpack_require__.u = (chunkId) => {
  // return url for filenames based on template
  return '' + chunkId + '.js';
};

__webpack_require__.g = (function () {
  if (typeof globalThis === 'object') return globalThis;
  try {
    return this || new Function('return this')();
  } catch (e) {
    if (typeof window === 'object') return window;
  }
})();

(() => {
  /* webpack/runtime/publicPath */
  var scriptUrl;
  var document = window.document;
  if (!scriptUrl && document) {
    if (document.currentScript) {
      // current path
      // http://127.0.0.1:5500/analyze-esm.js
      scriptUrl = document.currentScript.src;
    }
    if (!scriptUrl) {
      var scripts = document.getElementsByTagName('script');
      if (scripts.length) scriptUrl = scripts[scripts.length - 1].src;
    }
  }
  // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
  // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
  scriptUrl = scriptUrl
    .replace(/#.*$/, '')
    .replace(/\?.*$/, '')
    .replace(/\/[^\/]+$/, '/');

  // http://127.0.0.1:5500/
  __webpack_require__.p = scriptUrl;
})();

// runtime for import()
__webpack_require__.f = {};

// loaded chunks status map
var installedChunks = {
  a: 0,
};
// chunkId: 'b.js'
__webpack_require__.f.j = (chunkId, promises) => {
  var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
    ? installedChunks[chunkId]
    : undefined;

  // 0 means "already installed".
  if (installedChunkData !== 0) {
    // a Promise means "currently loading".
    if (installedChunkData) {
      promises.push(installedChunkData[2]);
    } else {
      if (true) {
        // all chunks have JS
        // setup Promise in chunk cache
        var promise = new Promise((resolve, reject) => {
          installedChunks[chunkId] = [resolve, reject];
          installedChunkData = installedChunks[chunkId];
        });
        installedChunkData[2] = promise;

        promises.push(promise);

        // start chunk loading
        // url like: http://127.0.0.1:5500/[chunkId].js
        var url = __webpack_require__.p + __webpack_require__.u(chunkId);

        // create error before stack unwound to get useful stacktrace later
        var error = new Error();
        var loadingEnded = (event) => {
          if (__webpack_require__.o(installedChunks, chunkId)) {
            installedChunkData = installedChunks[chunkId];

            if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
            if (installedChunkData) {
              var errorType =
                event && (event.type === 'load' ? 'missing' : event.type);
              var realSrc = event && event.target && event.target.src;
              error.message =
                'Loading chunk ' +
                chunkId +
                ' failed.\n(' +
                errorType +
                ': ' +
                realSrc +
                ')';
              error.name = 'ChunkLoadError';
              error.type = errorType;
              error.request = realSrc;
              installedChunkData[1](error);
            }
          }
        };
        // chunk-b_js
        const chunkKey = 'chunk-' + chunkId;
        __webpack_require__.l(url, loadingEnded, chunkKey, chunkId);
      } else {
        installedChunks[chunkId] = 0;
      }
    }
  }
};

__webpack_require__.e = (chunkId) => {
  const _ps = Object.keys(__webpack_require__.f).reduce((promises, key) => {
    __webpack_require__.f[key](chunkId, promises);
    return promises;
  }, []);

  return Promise.all(_ps);
};

/* webpack/runtime/load script */
var inProgress = {};
var dataWebpackPrefix = 'webpack-debug:';

// loadScript function to load a script via script tag
__webpack_require__.l = (url, done, key, chunkId) => {
  if (inProgress[url]) {
    inProgress[url].push(done);
    return;
  }
  var script, needAttach;
  if (key !== undefined) {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      var s = scripts[i];
      if (
        s.getAttribute('src') == url ||
        s.getAttribute('data-webpack') == dataWebpackPrefix + key
      ) {
        script = s;
        break;
      }
    }
  }
  // load a new chunk
  if (!script) {
    needAttach = true;
    script = document.createElement('script');

    script.charset = 'utf-8';
    script.timeout = 120;

    script.setAttribute('data-webpack', dataWebpackPrefix + key);
    script.src = url;
  }
  inProgress[url] = [done];
  var onScriptComplete = (prev, event) => {
    // avoid mem leaks in IE.
    script.onerror = script.onload = null;
    clearTimeout(timeout);
    var doneFns = inProgress[url];
    delete inProgress[url];

    script.parentNode && script.parentNode.removeChild(script);
    doneFns && doneFns.forEach((fn) => fn(event));
    if (prev) return prev(event);
  };
  var timeout = setTimeout(
    onScriptComplete.bind(null, undefined, {
      type: 'timeout',
      target: script,
    }),
    120000
  );
  script.onerror = onScriptComplete.bind(null, script.onerror);
  needAttach && document.head.appendChild(script);
  script.onload = onScriptComplete.bind(null, script.onload);
};

// install a JSONP callback for chunk loading
var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
  var [chunkIds, moreModules, runtime] = data;
  // add "moreModules" to the modules object,
  // then flag all "chunkIds" as loaded and fire callback
  var moduleId,
    chunkId,
    i = 0;

  if (chunkIds.some((id) => installedChunks[id] !== 0)) {
    // moduleId like b_js
    for (moduleId in moreModules) {
      if (__webpack_require__.o(moreModules, moduleId)) {
        // 把异步模块的启动器挂载到当前的 __webpack_modules__ 对象上
        __webpack_require__.m[moduleId] = moreModules[moduleId];
      }
    }
    if (runtime) var result = runtime(__webpack_require__);
  }

  // push 到全局数组webpackChunkwebpack_debug中
  if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);

  for (; i < chunkIds.length; i++) {
    chunkId = chunkIds[i];
    if (
      __webpack_require__.o(installedChunks, chunkId) &&
      installedChunks[chunkId]
    ) {
      // resolve .l() 实例化的 promise 对象
      installedChunks[chunkId][0]();
    }
    // 修改异步模块的加载状态，表示模块已经被加载
    installedChunks[chunkId] = 0;
  }
};

// inject jsonp
(() => {
  self['webpackChunkwebpack_debug'] = [];
  var chunkLoadingGlobal = self['webpackChunkwebpack_debug'];

  chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));

  chunkLoadingGlobal.push = webpackJsonpCallback.bind(
    null,
    chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
  );
})();

const __webpack_module_cache__ = {};

// ESM executor: export some
const esmExecutorWithExport = (
  __unused_webpack_module,
  __webpack_exports__,
  __webpack_require__
) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */
  __webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    default: () => __WEBPACK_DEFAULT_EXPORT__,
    /* harmony export */
  });
  const m = { foo: 'foo', sub: 'sub' };
  /* harmony default export */
  const __WEBPACK_DEFAULT_EXPORT__ = m;
  //# sourceURL=webpack://webpack-debug/./a.js?
};

// ESM executor: import some
const esmExecutorWithRequirement = (
  __unused_webpack_module,
  __webpack_exports__,
  __webpack_require__
) => {
  __webpack_require__.r(__webpack_exports__);

  /* harmony import */
  var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./a */ './a.js'
  );

  // dynamic import
  __webpack_require__
    .e(/*! import() */ 'b_js')
    .then(
      // .bind 为了传参 './b.js'，执行异步模块的加载器
      __webpack_require__.bind(
        __webpack_require__,
        /*! ./b */
        './b.js'
      )
    )
    .then((b) => {
      console.log('we load a dynamic module', b.default);
      return __webpack_require__.e(/*! import() */ 'b_js');
    })
    .then((b) => {
      console.log('b', b);
    });

  _a__WEBPACK_IMPORTED_MODULE_0__['default'].foo = 'modify';

  console.log(
    'we in index-a',
    JSON.stringify(_a__WEBPACK_IMPORTED_MODULE_0__['default'])
  );
  //# sourceURL=webpack://webpack-debug/./index-a.js?
};

const __webpack_modules__ = {
  './index-a.js': esmExecutorWithRequirement,
  './a.js': esmExecutorWithExport,
};

__webpack_require__.m = __webpack_modules__;

function __webpack_require__(moduleId) {
  // 尝试从缓存中读取模块
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  // 如果不在缓存中，则声明模块，并加入缓存
  var module = (__webpack_module_cache__[moduleId] = {
    // no module.id needed
    // no module.loaded needed
    exports: {},
  });

  // 从全局模块对象 __webpack_modules__ 中加载对应模块
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

  // Return the exports of the module
  return module.exports;
}

// bootstrap
(() => {
  return __webpack_require__('./index-a.js');
})();
