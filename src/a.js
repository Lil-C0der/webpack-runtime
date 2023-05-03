const m = { foo: 'foo', sub: 'sub' };

console.log('update module A.. what happend');

// export const unused_var = 'an unused one';

// export const useful_var = 'an useful variable';

const n = 2952;
function bar() {
  console.log('unused fn');
}

export default m;

export { m, bar, n };
