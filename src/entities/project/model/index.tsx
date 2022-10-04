import { Project } from '@shared/api/types';
import createStore from '@shared/lib/store/core/createStore';

export const model = createStore<Project[]>([]);

const add = (project: Project) => {
  model.setState(prev => {
    return prev.concat([project]);
  });
};

const remove = (index: number) => {
  model.setState(prev => {
    const before = prev.slice(0, index);
    const after = prev.slice(index + 1);
    return before.concat(after);
  });
};

export const actions = {
  add,
  remove
}