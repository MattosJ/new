import { useEffect, useState } from "react";
import { fetchAllPosts, NotionPost } from "../services/notion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/styles/blog.css";
import PostBanner from "../components/PostBanner";
import ContactBanner2 from "../components/ContactBanner2";
import imageBanner from "../assets/bannerImage2.png";
import TopHeader from "../components/TopHeader";

const Projetos = () => {
  const [posts, setPosts] = useState<NotionPost[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const postsPorPagina = 6;

  // Função para capitalizar
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchAllPosts();

      // Filtra apenas posts da categoria "projeto"
      const postsProjeto = data
        .filter(post => post.category?.trim().toLowerCase() === "projeto")
        .sort((a, b) => {
          const seqA = parseInt(a.sequence || "0", 10);
          const seqB = parseInt(b.sequence || "0", 10);
          return seqB - seqA;
        });

      setPosts(postsProjeto);
    };

    loadPosts();
  }, []);

  // Post mais recente
  const mostRecentPost = posts.length > 0 ? posts[0] : null;

  // Posts destacados
  const postsDestacados = posts.filter(
    post => post.highlight?.toLowerCase().trim() === "sim"
  );

  // Paginação
  const totalPaginas = Math.ceil(posts.length / postsPorPagina);
  const indiceInicial = (paginaAtual - 1) * postsPorPagina;
  const indiceFinal = indiceInicial + postsPorPagina;
  const postsPaginados = posts.slice(indiceInicial, indiceFinal);

  return (
    <>
      <TopHeader />
      <Header />
      <div className="Content">
        {mostRecentPost && (
          <PostBanner
            Image={mostRecentPost.imagePostBanner1}
            linkText="Ver notícia completa"
            author={mostRecentPost.author}
            date={mostRecentPost.date}
            title={mostRecentPost.title}
            linkTo={`/post-projects/${mostRecentPost.id}`}
          />
        )}

        <div className="blog-posts-container">
          <div className="blog-lateral-content">
            <div className="container-card-post-highlight">
              <h3 className="card-post-highlight-title1">Projetos em Execução</h3>
              {postsDestacados.map(post => (
                <Link to={`/post-projects/${post.id}`} key={post.id} className="card-post-highlight">
                  {post.imagePostBanner1 && (
                    <div className="card-post-highlight-img">
                      <img src={post.imagePostBanner1} alt={post.title} />
                    </div>
                  )}
                  <h2 className="card-post-highlight-title">{post.title}</h2>
                </Link>
              ))}
            </div>

            <ContactBanner2
              LinkTo="/fale-conosco"
              TitleBanner="Banner Para divulgar"
              buttonText="Quero Conversar com a Intera"
              image={imageBanner}
              imageAlt="Banner Para divulgar"
            />
          </div>

          {/* Lista de posts */}
          <div className="blog-posts-list">
            {postsPaginados.map(post => (
              <Link to={`/post-projects/${post.id}`} key={post.id} className="blog-page-post-card">
                {post.imagePostBanner1 && (
                  <div className="blog-page-post-image-container">
                    <img
                      src={post.imagePostBanner1}
                      alt={post.title}
                      className="blog-page-post-image"
                    />
                  </div>
                )}
                <p className="blog-page-post-category">{capitalize(post.category || "")}</p>
                <h2 className="blog-page-post-title">{post.title}</h2>
                <p className="blog-page-post-text">{post.author}</p>
                <p className="blog-page-post-text-2">{post.date}</p>
              </Link>
            ))}

            {/* Paginação */}
            {totalPaginas > 1 && (
              <div className="blog-pagination">
                {Array.from({ length: totalPaginas }, (_, i) => (
                  <button
                    key={i}
                    className={`pagination-button ${paginaAtual === i + 1 ? "active" : ""}`}
                    onClick={() => setPaginaAtual(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projetos;
