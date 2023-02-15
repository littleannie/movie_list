import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// c19b1da6

const API_URL = "http://www.omdbapi.com?apikey=c19b1da6"

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const SearchMovie = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  useEffect(() => {
    SearchMovie(searchValue)
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder='Search for a movie...'
          value={searchValue}
          onChange={(event) => {setSearchValue(event.target.value)}}
        />
        <img
          src={SearchIcon}
          alt="search-icon"
          onClick={(event) => {SearchMovie(searchValue)}}
        />
      </div>

      { movies?.length > 0
        ? (
        <div className="container">
          {
            movies.map((movie) => (
              <MovieCard movie={movie} />
            ))
          }
        </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  )
}

export default App;
