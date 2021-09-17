const babel = require('@babel/core');
const plugin = require('../dist/cjs');

const code = `
function Example() {
  signal: x = 0;
  memo: message = \`Count: \${x}\`;
}
`;
babel.transformAsync(code, {
  plugins: [
    plugin,
  ],
}).then((result) => {
  console.log(result.code);
}, (err) => {
  console.error(err);
});
