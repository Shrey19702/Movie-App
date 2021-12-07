const MovieList = (props) => {
    const isFavorite=function(movie){
        return props.favorite.find((val)=>val['imdbID']===movie['imdbID']);
    }
    return ( 
    <div className="movie-list">
        <div className= {'move-left-arrow move-panels '+ (props.heading?(props.favorite.length ?"":"not-visible"):"")}>
            <i className="fas fa-less-than center-align"></i>
        </div>
        {
            props.isPending?
            (!props.heading && (<div className="loading">Loading...<div className="loading-anim"></div></div>))
            :
            (props.movies.map((movie, index)=>(
                <div className="movie-element" key={index} onClick={()=>{props.HandleClick_MovieList(movie)}}>
                    <img src={movie.Poster} alt="movie" />
                    <div className="movie-element-tag">
                        <span className="movie-element-text-box">
                            {movie.Title} 
                            {'\u00A0'}
                            {
                                isFavorite(movie)
                                ?
                                <i onClick={()=>{props.HandleClick_favorite(movie,'del')}} class="fas fa-minus-circle is-favorite"></i>
                                :
                                <i  onClick={()=>{props.HandleClick_favorite(movie,'add')}} className={"fas fa-star add-favorite"}></i>
                            }   
                        </span>
                    </div>
                </div>
            )))
        }
        <div className={"move-right-arrow move-panels "+ (props.heading?(props.favorite.length ?"":"not-visible"):"")}>
                <i className="fas fa-greater-than center-align"></i>
        </div>
    </div> );
}
 
export default MovieList;