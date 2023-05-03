(() => {
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
    /* harmony export */ useful_var: () =>
      /* binding */ useful_var /* harmony export */,
  });

  /* unused harmony exports unused_var, cube */
  const m = {
    foo: 'foo',
    sub: 'sub',
  };
  console.log('update module A.. what happend');
  const useful_var = 'an useful variable';
  const unused_var = 'an unused one';
  function cube(x) {
    return x * x * x;
  }
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = m; //# sourceURL=webpack://webpack-debug/./a.js?
})();

const moduleExecutor = (
  __unused_webpack_module,
  __webpack_exports__,
  __webpack_require__
) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
    /* harmony export */ unused_var: () => /* binding */ unused_var,
    /* harmony export */
  });
  const m = { foo: 'foo', sub: 'sub' };

  console.log('update module A.. what happend');

  const unused_var = 'an unused one';

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = m;

  //# sourceURL=webpack://webpack-debug/./a.js?"
};

const indexExecutor = (
  __unused_webpack_module,
  __webpack_exports__,
  __webpack_require__
) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ =
    __webpack_require__(/*! ./a.js */ './a.js');

  __webpack_require__
    .e(/*! import() */ 'b_js')
    .then(__webpack_require__.bind(__webpack_require__, /*! ./b */ './b.js'))
    .then((b) => {
      console.log('in module b', b.default);
    });

  console.log(
    'we in entry!!',
    JSON.stringify(_a_js__WEBPACK_IMPORTED_MODULE_0__['default'])
  );

  //# sourceURL=webpack://webpack-debug/./index-a.js?
};
