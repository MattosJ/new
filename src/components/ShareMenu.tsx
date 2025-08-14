import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaLink
} from "react-icons/fa";

type ShareMenuProps = {
  url: string;
  title: string;
};

const ShareMenu: React.FC<ShareMenuProps> = ({ url,  }) => {
  // Exemplo de uso:
      // <ShareMenu url={url} title={titulo} />

  const encodedUrl = encodeURIComponent(url); // recebe a url atual para direcionar o compartilhamento.

  // linkagem para compartilhamento da notícia
  const shareLinks = {
    whatsapp: `https://wa.me/?text=%20${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=&url=${encodedUrl}`
  };
  // Mensagem de sucesso ou falha.
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copiado para a área de transferência!");
    } catch (err) {
      console.error("Erro ao copiar o link:", err);
    }
  };

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        title="Compartilhar no WhatsApp"
      >
        <FaWhatsapp size={24} color="#0097A3" />
      </a>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        title="Compartilhar no Facebook"
      >
        <FaFacebook size={24} color="#0097A3" />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        title="Compartilhar no LinkedIn"
      >
        <FaLinkedin size={24} color="#0097A3" />
      </a>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        title="Compartilhar no Twitter"
      >
        <FaTwitter size={24} color="#0097A3" />
      </a>
      <button onClick={handleCopy} title="Copiar link" style={{ background: "none", border: "none", cursor: "pointer" }}>
        <FaLink size={24} color="#0097A3" />
      </button>
    </div>
  );
};

export default ShareMenu;
