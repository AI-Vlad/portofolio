import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />
      <section>
        <ProjectItem
          img="https://source.unsplash.com/random"
          title="Projeto 01"
          type="website"
          slug="teste"
        />
        <ProjectItem
          img="https://source.unsplash.com/random"
          title="Projeto 02"
          type="website"
          slug="teste"
        />
        <ProjectItem
          img="https://source.unsplash.com/random"
          title="Projeto 03"
          type="website"
          slug="teste"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
