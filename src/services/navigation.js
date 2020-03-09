import { createRef } from 'react';

export const navigationRef = createRef();

export function push(name) {
  navigationRef.current?.navigate(name);
}
