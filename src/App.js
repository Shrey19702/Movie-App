import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import MoviePanel from './components/MoviePanel';

function App() {
  const [Movies, setmovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedMovie, setselectedMovie] = useState();
  const [favorite, setfavorite] = useState([]);
  const [isPending, setisPending] = useState(true);
  const [searchHistory, setsearchHistory] = useState([]);
  

  const random_url = [
    'http://www.omdbapi.com/?t=game+of+thrones&apikey=4c04f3d8',
    'http://www.omdbapi.com/?t=dark+knight&apikey=4c04f3d8',
    'http://www.omdbapi.com/?t=Doctor+Strange&apikey=4c04f3d8',
    'http://www.omdbapi.com/?t=ready+player+one&apikey=4c04f3d8',
    'http://www.omdbapi.com/?t=Forrest+Gump&apikey=4c04f3d8',
    'http://www.omdbapi.com/?t=free+guy&apikey=4c04f3d8',
    'http://www.omdbapi.com/?t=inception&apikey=4c04f3d8',
    "http://www.omdbapi.com/?t=Don't+Breathe&apikey=4c04f3d8",
    'http://www.omdbapi.com/?t=The+Hangover&apikey=4c04f3d8',
    'http://www.omdbapi.com/?t=Baby+Driver&apikey=4c04f3d8',
    'http://www.omdbapi.com/?t=A+Quiet+Place&apikey=4c04f3d8',
    'http://www.omdbapi.com/?t=Independence+Day&apikey=4c04f3d8',
    
  ];

  const getMovieRequest= async function(searchValue){
    if(searchValue && searchValue!==''){
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4c04f3d8`;
      const response = await fetch(url);
      const responseJSON = await response.json();
      if(responseJSON.Search){
        setmovies(responseJSON.Search);
        setisPending(false);
        return;
      }
    }
    else{
      let temp_movies = [];


        for(let i=0; i<random_url.length; i++){
          const response = await fetch(random_url[i]);
          const responseJSON = await response.json();
          temp_movies.push(responseJSON);
        }
      setmovies(temp_movies);
      setisPending(false);
      return;
    }
  }

  const HandleClick_MovieList = async function(movie){
    let title=String(movie.Title).replaceAll(' ','+');
    const url = `http://www.omdbapi.com/?t=${title}&apikey=4c04f3d8`;
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

  useEffect(
    function(){getMovieRequest(searchValue);}
  ,[searchValue]);

  return (
    <div className="App">
      <div className={selectedMovie?"main-page-side-panel":"main-page"}>
        <Navbar
          searchHistory={searchHistory}
          setsearchHistory={setsearchHistory}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {Movies && <MovieList isPending={isPending} movies={Movies} favorite={favorite} HandleClick_favorite={HandleClick_favorite} HandleClick_MovieList={HandleClick_MovieList} />}
        <br/>
        {favorite && <MovieList isPending={isPending} heading={"Favorites"} movies={favorite} favorite={favorite} HandleClick_favorite={HandleClick_favorite} HandleClick_MovieList={HandleClick_MovieList} />  }
    
      </div>
    
      {selectedMovie && <MoviePanel selectedMovie={selectedMovie} setselectedMovie={setselectedMovie}/>}
    </div>
  );
}

export default App;
