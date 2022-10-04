import { Project } from "@shared/api/types";

export const ProjectCard: React.FC<React.PropsWithChildren<Pick<Project, 'name' | 'created_date'>>> = ({name, created_date, children}) => {
  return (
    <div style={{display: 'flex'}}>
      <span style={{flex: '0 0 50%'}}>
        name: { name }
      </span>
      <span style={{flex: '0 0 50%'}}>
        created: { created_date }
      </span>

      { children }
    </div>
  );
};