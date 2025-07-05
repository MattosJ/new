import CardService from "../components/CardService";
import "../components/styles/CardsContainer.css";
import card1 from '../assets/top.png'
const CardsContainer = () => {
  return (
    <div className="CardsContainer">
      <h2 className="CardsContainer-title">
        Conheça Nossas principais frentes de atuação
      </h2>

      <CardService
        image={card1}
        title="Educação e Formação"
        subtitle="Aprender com o território"
        description="Jornadas educativas com foco em inovação, cidadania e impacto social."
        audience="Para quem: Escolas, ONGs e redes públicas"
        buttonText="Da ideia à ação: veja os projetos"
        themeColor="#FF0391"
      />

      <CardService
        image={card1}
        title="Tecnologia e Inovação"
        subtitle="Caminhos para o futuro"
        description="Projetos que promovem inclusão digital e habilidades do século XXI."
        audience="Para quem: Jovens, educadores e comunidades"
        buttonText="Da ideia à ação: veja os projetos"
        themeColor="#0097A3"
      />
      <CardService
        image={card1}
        title="Tecnologia e Inovação"
        subtitle="Caminhos para o futuro"
        description="Projetos que promovem inclusão digital e habilidades do século XXI."
        audience="Para quem: Jovens, educadores e comunidades"
        buttonText="Da ideia à ação: veja os projetos"
        themeColor="#0065F9"
      />
      <CardService
        image={card1}
        title="Tecnologia e Inovação"
        subtitle="Caminhos para o futuro"
        description="Projetos que promovem inclusão digital e habilidades do século XXI."
        audience="Para quem: Jovens, educadores e comunidades"
        buttonText="Da ideia à ação: veja os projetos"
        themeColor="#FEC820"
      />


    </div>
  );
};

export default CardsContainer;
