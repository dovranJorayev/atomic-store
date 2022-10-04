import { projectActions, ProjectCard, projectModel } from "@entities/project";
import { useStore } from "@shared/hooks/useStore";
import { AddProject } from "@features/add-project";

const Home: React.FC = () => {
  const projects = useStore(projectModel);

  return (
    <div style={{padding: '20px 30px', display: 'flex', flexDirection: 'column'}}>
      <h4>Projects</h4>

      <AddProject/>

      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          {...project}
        >
          <button onClick={() => {
            projectActions.remove(index);
          }}>
            Delete
          </button>
        </ProjectCard>
      ))}
    </div>
  );
};

export default Home;