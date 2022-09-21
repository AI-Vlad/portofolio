import Header from '../../components/Header';
import ProjectItem from '../../components/ProjectItem';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projects() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://source.unsplash.com/random"
        />
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://source.unsplash.com/random"
        />
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://source.unsplash.com/random"
        />
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://source.unsplash.com/random"
        />
      </main>
    </ProjectsContainer>
  );
}
