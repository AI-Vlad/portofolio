import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNode } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { DiMongodb, DiMysql, DiWordpress, DiBootstrap } from 'react-icons/di';
import SectionTitle from '../SectionTitle';
import StackItem from './StackItem';
import { Container } from './styles';

function Stacks() {
  return (
    <Container>
      <SectionTitle title="Stacks" />
      <section>
        <StackItem title="HTML" icon={<AiFillHtml5 />} />
        <StackItem title="CSS" icon={<FaCss3Alt />} />
        <StackItem title="Javascript" icon={<IoLogoJavascript />} />
        <StackItem title="React" icon={<FaReact />} />
        <StackItem title="Node" icon={<FaNode />} />
        <StackItem title="Mongodb" icon={<DiMongodb />} />
        <StackItem title="Mysql" icon={<DiMysql />} />
        <StackItem title="Wordpress" icon={<DiWordpress />} />
        <StackItem title="Bootstrap" icon={<DiBootstrap />} />
      </section>
    </Container>
  );
}

export default Stacks;
