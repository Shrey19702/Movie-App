const MovieList = (props) => {

    return ( 
    <div className="movie-list">
        <div className="move-left-arrow move-panels">
            <i className="fas fa-less-than center-align"></i>
        </div>
        {
            props.movies.map((movie, index)=>(
                <div className="movie-element" key={index} onClick={()=>{props.HandleClick(movie)}}>
                    <img src={movie.Poster} alt="movie" />
                </div>
            ))
        }
        <div className="move-right-arrow move-panels">
                <i className="fas fa-greater-than center-align"></i>
        </div>
    </div> );
}
 
export default MovieList;