import React, { useSyncExternalStore } from "react";

interface ExternalStore<State> {
  subscribe: (onStoreChange: () => void) => () => void;
  getState: () => State;
}

export const useStore = <State, Selected = State>(
  store: ExternalStore<State>, 
  selector?: (store: State) => Selected
) => {
  const getSnapShot = React.useCallback(() => {
    if (typeof selector === 'function') {
      return selector(store.getState());
    } else {
      return store.getState();
    }
  }, [store, selector]);

  return useSyncExternalStore(
    store.subscribe,
    getSnapShot
  );
}