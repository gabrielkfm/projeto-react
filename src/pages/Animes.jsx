import "../css/Catalogo.css";

export default function Animes() {
  const animes = [
    {
      id: 1,
      titulo: "Attack on Titan",
      genero: "Ação / Drama",
      img: "https://m.media-amazon.com/images/I/81MOMOykbsL.jpg",
      descricao: "A humanidade luta pela sobrevivência contra gigantes devoradores de humanos em uma guerra épica."
    },
    {
      id: 2,
      titulo: "One Piece",
      genero: "Aventura",
      img: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg",
      descricao: "Monkey D. Luffy e sua tripulação navegam pelos mares em busca do maior tesouro do mundo: o One Piece."
    },
    {
      id: 3,
      titulo: "Naruto",
      genero: "Ação / Fantasia",
      img: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
      descricao: "Naruto Uzumaki sonha em se tornar Hokage enquanto enfrenta vilões e busca aceitação em sua vila."
    },
    {
      id: 4,
      titulo: "Demon Slayer",
      genero: "Ação / Sobrenatural",
      img: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/45/Kimetsu_no_Yaiba_%28capa_do_volume_1%29.png/250px-Kimetsu_no_Yaiba_%28capa_do_volume_1%29.png",
      descricao: "Tanjiro Kamado se torna um caçador de demônios após sua família ser massacrada por criaturas malignas."
    },
    {
      id: 5,
      titulo: "My Hero Academia",
      genero: "Ação / Superpoderes",
      img: "https://m.media-amazon.com/images/M/MV5BY2QzODA5OTQtYWJlNi00ZjIzLThhNTItMDMwODhlYzYzMjA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      descricao: "Em um mundo onde quase todos têm poderes, um jovem sem habilidades luta para se tornar um herói."
    },
    {
      id: 6,
      titulo: "Fullmetal Alchemist: Brotherhood",
      genero: "Ação / Aventura",
      img: "https://upload.wikimedia.org/wikipedia/pt/9/9f/Fullmetal_Alchemist.jpg",
      descricao: "Dois irmãos alquimistas buscam a Pedra Filosofal após um experimento proibido dar terrivelmente errado."
    },
    {
      id: 7,
      titulo: "Death Note",
      genero: "Suspense / Sobrenatural",
      img: "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",
      descricao: "Um estudante encontra um caderno capaz de matar qualquer pessoa cujo nome seja escrito nele."
    },
    {
      id: 8,
      titulo: "Dragon Ball Z",
      genero: "Ação / Aventura",
      img: "https://preview.redd.it/hear-me-out-power-scaling-ruined-such-a-beautiful-manga-v0-ouppnldxew7f1.png?width=640&crop=smart&auto=webp&s=26224726910e66a62513757c726c398802118819",
      descricao: "Goku e seus amigos protegem a Terra de poderosos inimigos enquanto buscam se tornar guerreiros mais fortes."
    },
  ];

  return (
    <main className="catalogo">
      <h2>Animes</h2>
      <div className="cards">
        {animes.map((a) => (
          <div key={a.id} className="card">
            <img src={a.img} alt={a.titulo} />
            <h3>{a.titulo}</h3>
            <p>{a.genero}</p>
            <p className="card-descricao">{a.descricao}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
