import { projectActions } from "@entities/project";

export const AddProject: React.FC = () => {
  const handleAdd = () => {
    projectActions.add({
      id: Date.now(),
      name: `Project-${Date.now()}`,
      created_date: new Date().toDateString()
    });
  }

  return (
    <button onClick={handleAdd}>
      add
    </button>
  );
};