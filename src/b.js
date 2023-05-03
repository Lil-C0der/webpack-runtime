// import a from './a';
const a = require('./a.js');

const m = { foo: 'dynamic' };

console.log('local', a.foo);

a.foo = 'modify';

export default m;
