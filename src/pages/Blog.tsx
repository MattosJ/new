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

const Blog = () => {
  const [posts, setPosts] = useState<NotionPost[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const postsPorPagina = 6;

  // Função para capitalizar (primeira letra maiúscula)
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchAllPosts();

      const postsOrdenados = data
        .slice()
        .sort((a, b) => {
          const seqA = parseInt(a.sequence || "0", 10);
          const seqB = parseInt(b.sequence || "0", 10);
          return seqB - seqA;
        });

      setPosts(postsOrdenados);

      const categoriasUnicas = Array.from(
        new Set(
          postsOrdenados
            .map(post => post.category?.trim().toLowerCase())
            .filter(Boolean)
            .filter(cat => cat !== "projeto")
            .filter(cat => cat !== "banner") // exclui a categoria "projeto" e "banner"
        )
      );

      setCategorias(categoriasUnicas);
    };

    loadPosts();
  }, []);

  useEffect(() => {
    setPaginaAtual(1);
  }, [categoriaSelecionada]);

  const postsFiltrados = categoriaSelecionada
    ? posts.filter(post => post.category?.trim().toLowerCase() === categoriaSelecionada)
    : posts.filter(post => post.category?.trim().toLowerCase() !== "projeto" && post.category?.trim().toLowerCase() !== "banner") ; 

  const totalPaginas = Math.ceil(postsFiltrados.length / postsPorPagina);
  const indiceInicial = (paginaAtual - 1) * postsPorPagina;
  const indiceFinal = indiceInicial + postsPorPagina;
  const postsPaginados = postsFiltrados.slice(indiceInicial, indiceFinal);

  const mostRecentPost = postsFiltrados.length > 0 ? postsFiltrados[0] : null;

  const postsDestacados = postsFiltrados.filter(
    post =>
      post.highlight &&
      post.highlight.toLowerCase().trim() === "sim"
  );

  return (
    <>
      <TopHeader/>
      <Header />
      <div className="Content">
        {mostRecentPost && !categoriaSelecionada && (
          <PostBanner
            Image={mostRecentPost.imagePostBanner1}
            linkText="Ver notícia completa"
            author={mostRecentPost.author}
            date={mostRecentPost.date}
            title={mostRecentPost.title}
            linkTo={`/post/${mostRecentPost.id}`}
          />
        )}

        <div className="blog-posts-container">
          {/* MENU DE CATEGORIAS */}
          <div className="blog-lateral-content">
            <aside className="blog-categories-menu">
              <h3 className="blog-categories-title">Categorias</h3>
              <ul>
                {categorias.map((cat, i) => (
                  <li key={i}>
                    <button
                      className={`blog-category-button ${categoriaSelecionada === cat ? "active" : ""}`}
                      onClick={() => setCategoriaSelecionada(cat)}
                    >
                      {capitalize(cat)}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    className={`blog-category-button ${!categoriaSelecionada ? "active" : ""}`}
                    onClick={() => setCategoriaSelecionada(null)}
                  >
                    Ver todos
                  </button>
                </li>
              </ul>
            </aside>

            <div className="container-card-post-highlight">
              <h3 className="card-post-highlight-title1">Notícias em Destaque</h3>
              {postsDestacados.map(post => (
                <Link to={`/post/${post.id}`} key={post.id} className="card-post-highlight">
                  {post.imagePostBanner1 && (
                    <div className="card-post-highlight-img">
                      <img
                        src={post.imagePostBanner1}
                        alt={post.title}
                      />
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

          {/* LISTA DE POSTS */}
          <div className="blog-posts-list">
            {postsPaginados.map(post => (
              <Link to={`/post/${post.id}`} key={post.id} className="blog-page-post-card">
                {post.imagePostBanner1 && (
                  <div className="blog-page-post-image-container">
                    <img
                      src={post.imagePostBanner1}
                      alt={post.title}
                      className="blog-page-post-image"
                    />
                  </div>
                )}
                <p className="blog-page-post-category">
                  {capitalize(post.category || "")}
                </p>
                <h2 className="blog-page-post-title">{post.title}</h2>
                <p className="blog-page-post-text">{post.author}</p>
                <p className="blog-page-post-text-2">{post.date}</p>
              </Link>
            ))}

            {/* PAGINAÇÃO */}
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

export default Blog;
