import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import MoviePanel from './components/MoviePanel';

const HomePage = (props) => {
    const [searchValue, setSearchValue] = useState('');
    
    const random_url = [
        'https://www.omdbapi.com/?t=game+of+thrones&apikey=4c04f3d8',
        'https://www.omdbapi.com/?t=dark+knight&apikey=4c04f3d8',
        'https://www.omdbapi.com/?t=Doctor+Strange&apikey=4c04f3d8',
        'https://www.omdbapi.com/?t=ready+player+one&apikey=4c04f3d8',
        'https://www.omdbapi.com/?t=Forrest+Gump&apikey=4c04f3d8',
        'https://www.omdbapi.com/?t=free+guy&apikey=4c04f3d8',
        'https://www.omdbapi.com/?t=inception&apikey=4c04f3d8',
        "https://www.omdbapi.com/?t=Don't+Breathe&apikey=4c04f3d8",
        'https://www.omdbapi.com/?t=The+Hangover&apikey=4c04f3d8',
        'https://www.omdbapi.com/?t=Baby+Driver&apikey=4c04f3d8',
        'https://www.omdbapi.com/?t=A+Quiet+Place&apikey=4c04f3d8',
        'https://www.omdbapi.com/?t=Independence+Day&apikey=4c04f3d8',
        
    ];

    const getMovieRequest= async function(searchValue){
        if(searchValue && searchValue!==''){
          const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=4c04f3d8`;
          const response = await fetch(url);
          const responseJSON = await response.json();
          if(responseJSON.Search){
            props.setmovies(responseJSON.Search);
            props.setisPending(false);
            return;
          }
          else if(responseJSON.Response==="False"){
            console.log('no movie found');
            props.setmovies([]);
          }
        }
        else{
          let temp_movies = [];
          for(let i=0; i<random_url.length; i++){
            const response = await fetch(random_url[i]);
            const responseJSON = await response.json();
            temp_movies.push(responseJSON);
          }
          props.setmovies(temp_movies);
          props.setisPending(false);
          return;
        }
    }

    useEffect(
    function(){getMovieRequest(searchValue);}
    ,[searchValue]);

    return ( 
      <div className="home-page">
        <div className= {"content "+(props.selectedMovie?"main-page-side-panel":"main-page")}>
          <Navbar
            haveSearchBox={true}
            searchHistory={props.searchHistory}
            setsearchHistory={props.setsearchHistory}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <MovieList 
            isPending={props.isPending} 
            heading={"Movies"}
            movies={props.movies} 
            favorite={props.favorite} 
            HandleClick_favorite={props.HandleClick_favorite} 
            HandleClick_MovieList={props.HandleClick_MovieList}
            searchValue={searchValue}
          />

          <br/>
          {props.favorite && 
            <MovieList
              isPending={props.isPending}
              heading={"Favorites"} 
              movies={props.favorite}  
              favorite={props.favorite}  
              HandleClick_favorite={props.HandleClick_favorite} 
              HandleClick_MovieList={props.HandleClick_MovieList}
            />
          }
      
        </div>
      
        {props.selectedMovie && <MoviePanel selectedMovie={props.selectedMovie} setselectedMovie={props.setselectedMovie}/>}
      </div>
    );
}
 
export default HomePage;