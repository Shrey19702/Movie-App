import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import MoviePanel from './components/MoviePanel';

function App() {
  const [Movies, setmovies] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [selectedMovie, setselectedMovie] = useState();

  const getMovieRequest= async function(searchValue){
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4c04f3d8`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    if(responseJSON.Search){
      setmovies(responseJSON.Search);
      return;
    }
    console.log('no response');
  }

  const HandleClick_MovieList = async function(movie){
    let title=String(movie.Title).replaceAll(' ','+');
    const url = `http://www.omdbapi.com/?t=${title}&apikey=4c04f3d8`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    console.log(responseJSON);
    if(responseJSON){
        setselectedMovie(responseJSON);
        return;
    }
  }

  useEffect(
    function(){getMovieRequest(searchValue);}
    , [searchValue]
  );

  return (
    <div className="App">
      <div className={selectedMovie?"main-page-side-panel":"main-page"}>
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
        {Movies && <MovieList movies={Movies} HandleClick={HandleClick_MovieList} />}
      </div>
      {selectedMovie && <MoviePanel selectedMovie={selectedMovie} setselectedMovie={setselectedMovie}/>}
    </div>
  );
}

export default App;
