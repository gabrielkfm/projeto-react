import "../css/Catalogo.css";
import Header from "../components/Header";


export default function Series() {
  const series = [
    {
      id: 1,
      titulo: "Breaking Bad",
      genero: "Drama",
      img: "https://upload.wikimedia.org/wikipedia/pt/e/e9/Breaking_bad_2_temporada_poster.jpg",
      descricao: "Um professor de química do ensino médio se transforma em fabricante de metanfetamina após ser diagnosticado com câncer.",
    },
    {
      id: 2,
      titulo: "The Witcher",
      genero: "Fantasia",
      img: "https://br.web.img3.acsta.net/pictures/19/11/29/17/57/5161763.jpg",
      descricao: "Geralt de Rivia, um caçador de monstros, luta para encontrar seu lugar em um mundo onde as pessoas podem ser mais cruéis que as feras.",
    },
    {
      id: 3,
      titulo: "Stranger Things",
      genero: "Ficção / Terror",
      img: "https://br.web.img2.acsta.net/pictures/19/07/10/20/01/2331295.jpg",
      descricao: "Um grupo de crianças enfrenta forças sobrenaturais quando um garoto desaparece misteriosamente em sua pequena cidade.",
    },
    {
      id: 4,
      titulo: "Game of Thrones",
      genero: "Fantasia / Drama",
      img: "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg",
      descricao: "Famílias nobres lutam pelo controle do Trono de Ferro em um mundo cheio de intrigas, dragões e traições.",
    },
    {
      id: 5,
      titulo: "Friends",
      genero: "Comédia",
      img: "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      descricao: "Seis amigos vivem as alegrias e desafios da vida adulta em Nova York, com muito humor e amizade.",
    },
    {
      id: 6,
      titulo: "The Mandalorian",
      genero: "Ficção Científica / Ação",
      img: "https://m.media-amazon.com/images/M/MV5BNjgxZGM0OWUtZGY1MS00MWRmLTk2N2ItYjQyZTI1OThlZDliXkEyXkFqcGc@._V1_.jpg",
      descricao: "Um caçador de recompensas solitário viaja pela galáxia após a queda do Império, cuidando de uma misteriosa criança.",
    },
    {
      id: 7,
      titulo: "Dark",
      genero: "Ficção Científica / Suspense",
      img: "https://m.media-amazon.com/images/M/MV5BMzgyNTk3NDktYWEzMS00M2M3LWI1NDUtMWNhZDUzZTllZTU0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      descricao: "Quatro famílias descobrem um mistério sombrio que se estende por várias gerações em uma pequena cidade alemã.",
    },
    {
      id: 8,
      titulo: "The Crown",
      genero: "Drama Histórico",
      img: "https://upload.wikimedia.org/wikipedia/pt/thumb/e/e2/The-Crown-Poster-S2.jpg/250px-The-Crown-Poster-S2.jpg",
      descricao: "A história do reinado da Rainha Elizabeth II e os desafios da monarquia britânica ao longo das décadas.",
    },
  ];

  return (
    <main className="catalogo">
      <Header />
      <h2>Séries</h2>
      <div className="cards">
        {series.map((s) => (
          <div key={s.id} className="card">
            <img src={s.img} alt={s.titulo} />
            <h3>{s.titulo}</h3>
            <p>{s.genero}</p>
            <p className="card-descricao">{s.descricao}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
