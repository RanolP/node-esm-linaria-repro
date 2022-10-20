# node-esm-linaria-repro

Linaria 4.1.2 is incompatible with Node ESM

**EDIT**: Linaria 4.2.0 has been released with the fixes included. Try upgrade if you've encountered same problem.

**EDIT2**: Linaria 4.2.0 still relies on `@emotion/is-prop-valid`, which is not Node ESM compatible package. This is not likely to be fixed on Emotion side and therefore you should be careful about. You can easily make a [patch for those packages](https://github.com/RanolP/minecransladle/tree/795cbccb9375f3ac0e6325cc875a6b72d33e8e9d/.yarn/patches).

## Stories

### styled

I want to SSR a component using `@linaria/styled`.
And I want to write my Node server with ESM support.

```sh
sh-5.1$ npm run styled

> styled
> node styled.mjs

file:///home/node-esm-linaria-repro/styled.mjs:5
import { styled } from '@linaria/react';
         ^^^^^^
SyntaxError: Named export 'styled' not found. The requested module '@linaria/react' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from '@linaria/react';
const { styled } = pkg;

    at ModuleJob._instantiate (node:internal/modules/esm/module_job:123:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:189:5)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:541:24)
    at async loadESM (node:internal/process/esm_loader:91:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12)

Node.js v18.7.0
```

### rollup

In this project, the rollup configuration file uses ESM (like Vite).
I want to use `@linaria/rollup` here.
I just import default `linaria` function... and it is not a function.

```sh
sh-5.1$ npm run styled

> styled
> node rollup.mjs

file:///home/node-esm-linaria-repro/rollup.mjs:7
console.log(rollup());
            ^

TypeError: rollup is not a function
    at file:///home/node-esm-linaria-repro/rollup.mjs:7:13
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:541:24)
    at async loadESM (node:internal/process/esm_loader:91:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12)

Node.js v18.7.0
```

## Conclusion

Above two stories shows the linaria packages aren't ESM in Node world.
