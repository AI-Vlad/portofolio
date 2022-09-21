import { title } from 'process';
import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
// eslint-disable-next-line @typescript-eslint/no-redeclare
import { Container } from './styles';

function Experiences() {
  return (
    <Container>
      <SectionTitle title="05 Anos" description="De experiência" />
      <section>
        <ExperienceItem
          year="2019"
          title="Dev Front-End"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iste repellendus rem, omnis quos quo in modi"
        />
        <ExperienceItem
          year="2020"
          title="Dev Front-End"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iste repellendus rem, omnis quos quo in modi"
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-End"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iste repellendus rem, omnis quos quo in modi"
        />
        <ExperienceItem
          year="2022"
          title="Dev Front-End"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iste repellendus rem, omnis quos quo in modi"
        />
      </section>
    </Container>
  );
}

export default Experiences;
