// import some plugins
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import fs from 'fs';
import path from 'path';

export default fs
  .readdirSync('./packages')
  .filter((x) => x.startsWith('reverse-'))
  .map((name) => ({
    // this file imports logic and gives a node.js prompt
    input: `./packages/${name}/index.ts`,
    plugins: [
      // add typescript compiling
      typescript({
        rollupCommonJSResolveHack: true,
        useTsconfigDeclarationDir: true,
      }),
      //
      commonjs(),
      // fix the import resolver because by default it doesn't work.
      resolve({
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        preferBuiltins: true,
      }),
    ],
    // output the file
    output: {
      file: `./packages/${name}/index.js`,
      format: 'cjs',
    },
  }));
