import React, { useState } from 'react';
import card1 from "../assets/bannerImage2.png";
import '../components/styles/CardInfo.css';
import axios from 'axios';

const ContactCard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { name, email, message };
    const API_URL = import.meta.env.VITE_API_BASE_URL;

    try {
      const response = await axios.post(`${API_URL}/send-email`, formData);

      if (response.data.success) {
        setStatus('E-mail enviado com sucesso!');
      } else {
        setStatus('Erro ao enviar e-mail.');
      }
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      setStatus('Erro ao enviar e-mail.');
    }
  };

  return (
    /* Exemplo de uso 
      <ContactCard/>
    */

    <div className="container-contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Fale Com a Gente</h2>
        <p>Tem uma dúvida, ideia ou proposta? Fale com a gente pelo formulário abaixo.
          Vamos adorar conversar com você!</p>

        <div className="form-row">
          <div className="input-group">
            <label htmlFor="name">Nome Completo</label>
            <input
              id="name"
              type="text"
              placeholder="Digite seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="message">Sua Mensagem</label>
          <textarea
            id="message"
            placeholder="Escreva sua mensagem aqui"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit">Enviar</button>
        {status && <p>{status}</p>}
      </form>
      <div className="Contact-card-img">
        <img src={card1} alt="Contato" />
      </div>

      
    </div>
  );
};

export default ContactCard;
