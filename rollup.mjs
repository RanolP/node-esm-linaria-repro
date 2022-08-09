// It is imported not as we expected.
// It is considered a CommonJS module, so rollup is not a function exported default.
// Instead, it is an object containing the function named `default`.
// It could happen if we configure rollup in ESM context. (e.g. `vite.config.ts`)
import rollup from '@linaria/rollup';

console.log(rollup());
