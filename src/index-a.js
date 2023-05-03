import a from './a.js';

import dll from '../dll';

console.log('we in entry..', JSON.stringify(a.m));

(() => {
  const num = 0;
  const ret = dll.addOne(num);
  console.log('calc ret', ret);
})();

// TODO: module federation

// HMR interface
if (module.hot) {
  // 发生更新后的回调
  module.hot.accept('./a.js', () => {
    console.trace();
    // console.log('module updated', JSON.stringify(a));
    console.log('self reload');
  });
  module.hot.accept('./b.js', () => {
    import('./b').then((b) => {
      console.log('async module updated', b.default);
    });
  });
}
