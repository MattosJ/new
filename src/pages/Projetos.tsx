import { useEffect, useState } from "react";
import { fetchAllPosts, NotionPost } from "../services/notion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/styles/blog.css";
import PostBanner from "../components/PostBanner";
import TopHeader from "../components/TopHeader";
import "../components/styles/projetcts.css";

const Projetos = () => {
  const [posts, setPosts] = useState<NotionPost[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [subCategoriaSelecionada, setSubCategoriaSelecionada] = useState<string>("todas");
  const postsPorPagina = 6;

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchAllPosts();

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

  const mostRecentPost = posts.length > 0 ? posts[0] : null;

  const subCategorias = [
    "todas",
    ...Array.from(
      new Set(
        posts
          .map(post => post.subCategoryForProjects?.trim().toLowerCase())
          .filter(Boolean)
      )
    )
  ];

  const postsFiltrados =
    subCategoriaSelecionada === "todas"
      ? posts
      : posts.filter(
          post =>
            post.subCategoryForProjects?.trim().toLowerCase() === subCategoriaSelecionada
        );

  const totalPaginas = Math.ceil(postsFiltrados.length / postsPorPagina);
  const indiceInicial = (paginaAtual - 1) * postsPorPagina;
  const indiceFinal = indiceInicial + postsPorPagina;
  const postsPaginados = postsFiltrados.slice(indiceInicial, indiceFinal);

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

        {/* Menu de subcategorias */}
        <div className="subcategories-menu">
          {subCategorias.map((sub, idx) => (
            <button
              key={idx}
              className={`subcategory-button ${
                subCategoriaSelecionada === sub ? "active" : ""
              }`}
              onClick={() => {
                setSubCategoriaSelecionada(sub);
                setPaginaAtual(1);
              }}
            >
              {capitalize(sub)}
            </button>
          ))}
        </div>

        <div className="projects-posts-container">
          <div className="projects-posts-list">
            {postsPaginados.map(post => (
              <Link
                to={`/post-projects/${post.id}`}
                key={post.id}
                className="projects-page-post-card"
                style={{
                  // Variável CSS para a borda no hover
                  "--hover-border-color": post.colorCard || "#000"
                } as React.CSSProperties}
              >
                {post.imagePostBanner1 && (
                  <div className="project-page-post-image-container">
                    <img
                      src={post.imagePostBanner1}
                      alt={post.title}
                      className="blog-page-post-image"
                    />
                  </div>
                )}
                <p
                  className="blog-page-post-category"
                  style={{ color: post.colorCard }}
                >
                  {capitalize(post.subCategoryForProjects || "")}
                </p>
                <h2 className="blog-page-post-title">{post.title}</h2>
                <p className="blog-page-post-text">{post.author}</p>
                <p className="blog-page-post-text-2">{post.date}</p>
              </Link>
            ))}

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
