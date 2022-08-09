// We must import `styled` even though the static CSS extraction is already done.
// Because we should have the React component we use.
// But when we import the `styled` on a Node side (for ex. server-side rendering)
// It just refuses the import because it is considered a CommonJS module.
import { styled } from '@linaria/react';

console.log(styled);
