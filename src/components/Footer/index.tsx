import * as S from "./styles";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="clique aqui para acessar jogo de Ação"
              to="/categories#action"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogo de Esportes"
              to="/categories#sports"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogo de Luta"
              to="/categories#fight"
            >
              Luta
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogo de RPG"
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogo de Simulação"
              to="/categories#simulation"
            >
              Simulação
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="clique aqui para acessar a seção de promoção"
              to="/#on-sale"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar a seção de Em breve"
              to="/#coming-soon"
            >
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY todos os direitos reservados</p>
    </div>
  </S.Container>
);

export default Footer;
