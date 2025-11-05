import "../css/Home.css";
import Header from "../components/Header";


export default function Home() {
  return (
    <div>
      <main className="home">
        <Header />
        <div className="text-main">
          <h2>Bem-vindo ao CineAction!</h2>
          <p>Explore filmes, séries e animes em um só lugar.</p>
        </div>
      </main>
      <section>
        <h1>Lançamentos</h1>
        <div className="cards">
          <div className="card">
            <img src="https://cdn.observatoriodocinema.com.br/2024/07/Ko6gZ5Iv-the-witcher-netflix-1024x540.webp" alt="The Witcher" />
            <h3>The Witcher - Temporada 4</h3>
            <p>Ficção / Fantasia</p>
            <p className="card-descricao">Geralt de Rivia enfrenta novos desafios enquanto protege o Continente de ameaças sombrias.</p>
          </div>
          <div className="card">
            <img src="https://br.web.img3.acsta.net/pictures/24/05/10/10/06/1746601.jpg" alt="Duna: Parte Dois" />
            <h3>Duna: Parte Dois</h3>
            <p>Ficção Científica / Aventura</p>
          </div>
        </div>
      </section>
      <section>
        <h1>Lançamentos</h1>
        <div className="cards">
          <div className="card">
            <img src="https://cdn.observatoriodocinema.com.br/2024/07/Ko6gZ5Iv-the-witcher-netflix-1024x540.webp" alt="The Witcher" />
            <h3>The Witcher - Temporada 4</h3>
            <p>Ficção / Fantasia</p>
            <p className="card-descricao">Geralt de Rivia enfrenta novos desafios enquanto protege o Continente de ameaças sombrias.</p>
          </div>
          <div className="card">
            <img src="https://br.web.img3.acsta.net/pictures/24/05/10/10/06/1746601.jpg" alt="Duna: Parte Dois" />
            <h3>Duna: Parte Dois</h3>
            <p>Ficção Científica / Aventura</p>
          </div>
        </div>
      </section>
      <section>
        <h1>Lançamentos</h1>
        <div className="cards">
          <div className="card">
            <img src="https://cdn.observatoriodocinema.com.br/2024/07/Ko6gZ5Iv-the-witcher-netflix-1024x540.webp" alt="The Witcher" />
            <h3>The Witcher - Temporada 4</h3>
            <p>Ficção / Fantasia</p>
            <p className="card-descricao">Geralt de Rivia enfrenta novos desafios enquanto protege o Continente de ameaças sombrias.</p>
          </div>
          <div className="card">
            <img src="https://br.web.img3.acsta.net/pictures/24/05/10/10/06/1746601.jpg" alt="Duna: Parte Dois" />
            <h3>Duna: Parte Dois</h3>
            <p>Ficção Científica / Aventura</p>
          </div>
        </div>
      </section>
    </div>
  );
}
