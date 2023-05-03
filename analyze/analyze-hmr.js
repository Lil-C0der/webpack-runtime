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

/* webpack/runtime/getFullHash */
// 在热更模块每次增量构建完毕后，'.h' 方法返回下一次使用的 hash，对应下一次请求携带的 hash
__webpack_require__.h = () => '66467f56b473eb340f69';

/* webpack/runtime/get update manifest filename */
__webpack_require__.hmrF = () =>
  'a.' + __webpack_require__.h() + '.hot-update.json';

__webpack_require__.hmrM = () => {
  if (typeof fetch === 'undefined')
    throw new Error('No browser support: need fetch API');
  return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(
    (response) => {
      if (response.status === 404) return; // no update available
      if (!response.ok)
        throw new Error(
          'Failed to fetch update manifest ' + response.statusText
        );
      return response.json();
    }
  );
};
