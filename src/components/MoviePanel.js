const MoviePanel = ({selectedMovie, setselectedMovie}) => {


    return (
        <div className="side-panel">
            <div className="selected-movie-heading">
                <button className="side-panel-close-button" onClick={()=>{setselectedMovie(null)}}><span className="font-weight-1000">X</span></button>
                <img className="movie-poster" src={selectedMovie.Poster} alt="movie" />
                <h3>{selectedMovie.Title}</h3>
                <i class="fas fa-sort-down"></i>
            </div>
            <div className="selected-movie-content">
                <h3><span className="font-weight-700">Released on:</span> {selectedMovie.Released}</h3>                
                <h3><span className="font-weight-700">Genre:</span> {selectedMovie.Genre}</h3>
                <h3><span className="font-weight-700">Type:</span> {selectedMovie.Type}</h3>
                <h3><span className="font-weight-700">Rated:</span> {selectedMovie.Rated}</h3>
                <h3><span className="font-weight-700">Runtime:</span> {selectedMovie.Runtime}</h3>
                <h3><span className="font-weight-700">Country of Origin:</span> {selectedMovie.Country}</h3>
                <h3><span className="font-weight-700">Language:</span> {selectedMovie.Language}</h3>
                <h3>{selectedMovie.Plot}</h3>
            </div>
            
        </div>
    );
}
 
export default MoviePanel;