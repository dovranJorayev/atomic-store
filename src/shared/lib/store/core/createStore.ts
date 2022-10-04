import type { Listener, Store } from '@shared/lib/store/core/types';

const createStore = <State>(initialData: State): Store<State> => {
  let state: State = initialData;
  const listeners = new Set<Listener>();

  const getState = () => state;

  const setState = (update: State | {(prevState: State): State}) => {
    if (typeof update === 'function') {
      const updater = update as (prevState: State) => State;
      state = updater(state);
    } else {
      state = update;
    }
    
    listeners.forEach(listener => listener());
  }

  const subscribe = (listener: Listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    }
  }

  return {
    getState,
    setState,
    subscribe
  }
};

export default createStore;