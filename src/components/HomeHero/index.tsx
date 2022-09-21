import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/perfil.png';

function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Vladimir</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Vladimir</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Rojas</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função:{' '}
              <span className="blue">
                Desenvolvedor de Software <br></br> & Gestor de Tráfego
              </span>
            </div>
            <div>
              Empresa: <span className="blue">Horizon</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
