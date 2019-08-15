import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [terser()],
};
