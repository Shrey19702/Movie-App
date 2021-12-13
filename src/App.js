import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Mailing from './MalingPage';

function App() {
  const [movies, setmovies] = useState([]);
  const [favorite, setfavorite] = useState([]);
  const [isPending, setisPending] = useState(true);
  const [searchHistory, setsearchHistory] = useState([]);
  const [selectedMovie, setselectedMovie] = useState();

  const HandleClick_MovieList = async function(movie){
    let title=String(movie.Title).replaceAll(' ','+');
    const url = `https://www.omdbapi.com/?t=${title}&apikey=4c04f3d8`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    // console.log(responseJSON);
    if(responseJSON){
      setselectedMovie(responseJSON);

      if(!searchHistory.includes(responseJSON.Title)){
          setsearchHistory([...searchHistory, responseJSON.Title]);
      }
      return;
    }
  }

  const HandleClick_favorite = function(movie, req){
    if(req==='add'){
      console.log('adding to favorite');
      if( !favorite.find((val)=>{return val['imdbID']===movie['imdbID'];})){
        const newFavorites = [...favorite, movie];
        setfavorite(newFavorites);
      }
    }
    else if(req==='del'){
      // console.log('delete');
      const newFavorites = favorite.filter((val)=>val['imdbID']!==movie['imdbID'])
      setfavorite(newFavorites);
    }
      
  }

  return (
    <Router>
      <Routes>
        <Route path='/' 
          element={<HomePage
            movies={movies} setmovies={setmovies}
            favorite={favorite} setfavorite={setfavorite}
            isPending={isPending} setisPending={setisPending}
            searchHistory={searchHistory} setsearchHistory={setsearchHistory}
            selectedMovie={selectedMovie} setselectedMovie={setselectedMovie}
            HandleClick_MovieList={HandleClick_MovieList}
            HandleClick_favorite={HandleClick_favorite}
          />}
        />
        <Route path='/mail' 
          element={<Mailing
            movies={movies} setmovies={setmovies}
            favorite={favorite} setfavorite={setfavorite}
            isPending={isPending} setisPending={setisPending}
            HandleClick_MovieList={HandleClick_MovieList}
            HandleClick_favorite={HandleClick_favorite}
          />}
        />
      </Routes>
    </Router>
  );
}

export default App;
