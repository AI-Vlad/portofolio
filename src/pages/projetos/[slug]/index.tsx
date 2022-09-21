import Header from '../../../components/Header';
import ProjectBanner from '../../../components/ProjectBanner';
import { ProjectContainer } from '../../../styles/ProjectStyles';

export default function Project() {
  return (
    <ProjectContainer>
      <Header />
      <ProjectBanner
        title="Projeto 01"
        type="Website"
        imgUrl="https://source.unsplash.com/random"
      />
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          deleniti nemo tempora autem atque quae! Velit quaerat ducimus
          similique, culpa sunt nisi molestias iusto qui ipsam quae placeat,
          dolor labore.
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
