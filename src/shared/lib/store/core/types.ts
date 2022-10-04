export type Listener = () => void;
export type Update<State> = State | {(prevState: State): State};

export interface Store<State> {
  getState: () => State;
  setState: (update: Update<State>) => void;
  subscribe: (listener: Listener) => {(): void};
}