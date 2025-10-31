import "../css/Catalogo.css";

export default function Filmes() {
  const filmes = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezzAYPGpfgzzRV3LPlUOWzNtvQhQVsH4_54wSQ39A06Ne-D2EoA1xJk_0Dd-18LP0-vcEup3XhjhgDvRZ6CMN45XiWyaveFtEkjKWnvyTvQ&s=10",
      titulo: "Inception",
      genero: "Ficção Científica",
      descricao: "Um ladrão que invade sonhos precisa executar o roubo perfeito dentro da mente de seus alvos."
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
      titulo: "Interstellar",
      genero: "Drama / Ficção",
      descricao: "Uma equipe de exploradores viaja pelo espaço em busca de um novo lar para a humanidade."
    },
    {
      id: 3,
      img: "https://planetadiariobr.com.br/wp-content/uploads/2025/05/poster-senhor-dos-aneis-aneis-de-poder.webp",
      titulo: "O Senhor dos Anéis",
      genero: "Fantasia",
      descricao: "A jornada épica de hobbits e heróis para destruir o anel e salvar a Terra-média."
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/M/MV5BZGM1NDM3MTAtMmI0ZC00ZDAwLWEwY2EtNDdhYjZmMjJkNzM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      titulo: "Matrix",
      genero: "Ficção Científica / Ação",
      descricao: "Um hacker descobre que o mundo em que vive é uma simulação e luta contra máquinas que controlam a humanidade."
    },
    {
      id: 5,
      img: "https://ingresso-a.akamaihd.net/prd/img/movie/gladiador-ii/a66b2f75-b201-4f0a-9eea-e2aff3709fd1.webp",
      titulo: "Gladiador",
      genero: "Ação / Drama",
      descricao: "Um general romano busca vingança após ser traído pelo imperador e ter sua família assassinada."
    },
    {
      id: 6,
      img: "https://m.media-amazon.com/images/I/811lT7khIrL._AC_UF894,1000_QL80_.jpg",
      titulo: "Titanic",
      genero: "Romance / Drama",
      descricao: "A história de amor entre Jack e Rose a bordo do famoso navio que naufragou em 1912."
    },
    {
      id: 7,
      img: "https://upload.wikimedia.org/wikipedia/pt/b/b0/Avatar-Teaser-Poster.jpg",
      titulo: "Avatar",
      genero: "Ficção Científica / Aventura",
      descricao: "Em Pandora, um ex-fuzileiro descobre uma cultura alienígena e luta para protegê-la."
    },
    {
      id: 8,
      img: "https://irs.www.warnerbros.com.br/keyart-jpeg/movies/media/browser/Batman_The_Dark_Knight_keyart.jpg",
      titulo: "O Cavaleiro das Trevas",
      genero: "Ação / Crime",
      descricao: "Batman enfrenta o Coringa, um criminoso caótico que desafia a moralidade e a ordem de Gotham."
    },
  ];

  return (
    <main className="catalogo">
      <h2>Filmes</h2>
      <div className="cards">
        {filmes.map((f) => (
          <div key={f.id} className="card">
            <img src={f.img} alt={f.titulo} />
            <h3>{f.titulo}</h3>
            <p>{f.genero}</p>
            <p className="card-descricao">{f.descricao}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
