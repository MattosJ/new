import image from "../assets/10 - Copy.png"
import "../components/styles/bannerTextImage2.css"
const BannerTextImage2 = () => {
  return(
    <div className="BTI2-wrapper">
      <div className="BTI2-content">
        <h2 className="BTI2-title">Criatividade para <span className="BTI2-title-highlight">Transformar</span></h2>
        <p className="BTI2-text-1">Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa", a diversidade de olhares e a construção colaborativa para gerar novos caminhos e apostar em possibilidades inventivas.
Temos como nossa missão promover a felicidade a partir das experiências dos produtos e serviços ofertados, de forma direta, eficaz e sobretudo rápida, para uma melhor experiência de ambos os lados.</p>
        <p className="BTI2-text-2">Amamos criatividade e inovação, e com elas acreditamos que um mundo melhor é possível!</p>
        <p className="BTI2-text-3">A INTERA é uma empresa de Gestão Criativa que propõe compartilhar as experiências de mais de 10 anos de atuação  na execução e planejamento de projetos e políticas nas áreas de Cultura, Turismo e Juventude. Oferecemos oficinas empreendedoras e aceleração de negócios e projetos, atuamos no desenvolvimento de metodologias de ensino, trilhas de inovação e impacto social elaboradas para preparar as pessoas para o futuro do trabalho.</p>
      </div>
      <div className="BTI2-img">
        <img src={image} alt="Descrição da imagem"/>
      </div>
    </div>
  )
}
export default BannerTextImage2