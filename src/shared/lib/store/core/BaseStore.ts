import type { Listener, Store, Update } from '@shared/lib/store/core/types';

class BaseStore<State> implements Store<State> {
  private _state: State;
  private _listeners: Set<Listener>;

  constructor(initialState: State) {
    this._state = initialState;
    this._listeners = new Set();
  }

  getState = () => {
    return this._state;
  }

  setState = (update: Update<State>) => {
    if (typeof update === 'function') {
      const updater = update as (prevState: State) => State;
      this._state = updater(this._state);
    } else {
      this._state = update;
    }

    this._listeners.forEach(listener => listener());
  }
  
  subscribe = (listener: Listener) => {
    this._listeners.add(listener);
    return () => {
      this._listeners.delete(listener);
    }
  }
} 

export default BaseStore;