import { useState } from 'react'
import './App.css'


function App() {
  const username = 'Maria';
  const [count, setCount] = useState(0);
  const [filmlist, setFilmlist] = useState([
    {
      id: 1,
      name: 'O Poderoso Chefão',
      year: 1972,
      director: 'Francis Ford Coppola',
      isFavorite: true,
    },
    {
      id: 2,
      name: 'Matrix',
      year: 1999,
      director: 'Lana Wachowski, Lilly Wachowski',
      isFavorite: false,
    },
    {
      id: 3,
      name: 'A Origem',
      year: 2010,
      director: 'Christopher Nolan',
      isFavorite: true,
    },
    {
      id: 4,
      name: 'Interestelar',
      year: 2014,
      director: 'Christopher Nolan',
      isFavorite: false,
    },
    {
      id: 5,
      name: 'O Senhor dos Anéis: O Retorno do Rei',
      year: 2003,
      director: 'Peter Jackson',
      isFavorite: false,
    }
  ]
)

  
   
  
  function clicouNoBotao() {
    setCount(count + 1);
  }

  function alternaFavorito(id) {
    const newFilmList = filmlist.map((film) => {
      if (film.id == id) {
        return { ...film, isFavorite: !film.isFavorite };
      }
      return film;
    });
    console.log(newFilmList);
    //alert(`Você clicou aqui ${count} vezes`);
  }

  return (
    <div>
    <p className="hero">Bem-vinda {username}!</p>
    <button onClick={clicouNoBotao}> O contador está em:{count}</button>

    {
    filmlist.map((film) => {
      return (
        <div key={film.id}>
          <p>{film.name} ({film.year}) - {film.director}</p>
          <button onClick={() => alternaFavorito(film.id)}>Favorito </button>
        </div>
      )
      
    })}

    </div>
  )
}

export default App
