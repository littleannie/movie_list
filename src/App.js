import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

// c19b1da6

const API_URL = "http://www.omdbapi.com?apikey=c19b1da6"

const App = () => {

  const SearchMovie = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`)
    const data = await response.json()

    console.log(data.Search)
  }

  useEffect(() => {
    SearchMovie('Spiderman')
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
    </div>
  )
}

export default App;
