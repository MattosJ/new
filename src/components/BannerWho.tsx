import "../components/styles/BannerWho.css"
import img from '../assets/Group 20 (2).png'
const BannerWho = () =>{
  return(
    /* Exemplo de uso 
      <BannerWho/>
    */

    <div className="bannerWho-container">
      <div className="bannerWhoImgFormat">
        <img src={img} alt="Juntos criamos novos caminhos"/>
      </div>
      <div className="bannerWhoContent">
        <div className="bannerWhoTitleContainer">
          <h1 className="bannerWhoTitle">Juntos criamos <span className="bannerWhoHig">novos caminhos</span></h1>
        </div>
          <p className="bannerWhoText1">Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa", a diversidade de olhares e a construção colaborativa para gerar novos caminhos e apostar em possibilidades inventivas.
Temos como nossa missão promover a felicidade a partir das experiências dos produtos e serviços ofertados, de forma direta, eficaz e sobretudo rápida, para uma melhor experiência de ambos os lados.</p>
          <h2 className="bannerWhoSubtitle">Amamos criatividade e inovação, e com elas acreditamos que um mundo melhor é possível!</h2>
          <p className="bannerWhoText2">A INTERA é uma empresa de Gestão Criativa que propõe compartilhar as experiências de mais de 10 anos de atuação  na execução e planejamento de projetos e políticas nas áreas de Cultura, Turismo e Juventude. Oferecemos oficinas empreendedoras e aceleração de negócios e projetos, atuamos no desenvolvimento de metodologias de ensino, trilhas de inovação e impacto social elaboradas para preparar as pessoas para o futuro do trabalho.</p>
        </div>
      </div>
  )
}
export  default BannerWho;