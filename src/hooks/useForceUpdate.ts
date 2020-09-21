import { DispatchWithoutAction, useReducer } from 'react';

/**
 * 强制更新
 */
export default function useForceUpdate(): DispatchWithoutAction {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  return forceUpdate;
}
