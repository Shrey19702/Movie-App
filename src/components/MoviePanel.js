const MoviePanel = ({selectedMovie, setselectedMovie}) => {


    return (
        <div className="side-panel">
            <div className="selected-movie-heading">
                <button className="side-panel-close-button" onClick={()=>{setselectedMovie(null)}}>X</button>
                <img className="movie-poster" src={selectedMovie.Poster} alt="movie" />
                <h3>{selectedMovie.Title}</h3>
            </div>
            <div className="selected-movie-content">
                <h3>Released on: {selectedMovie.Released}</h3>                
                <h3>Genre: {selectedMovie.Genre}</h3>
                <h3>Type: {selectedMovie.Type}</h3>
                <h3>Rated: {selectedMovie.Rated}</h3>
                <h3>Runtime: {selectedMovie.Runtime}</h3>
                <h3>Country of Origin: {selectedMovie.Country}</h3>
                <h3>Language: {selectedMovie.Language}</h3>
                <h3>{selectedMovie.Plot}</h3>
            </div>
            
        </div>
    );
}
 
export default MoviePanel;