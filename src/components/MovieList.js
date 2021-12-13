import Slider from "react-slick";
import no_poster from "../assets/images/no_poster.png"

const MovieList = (props) => {

    const isFavorite=function(movie){
        return props.favorite.find((val)=>val['imdbID']===movie['imdbID']);
    }

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            //   initialSlide: 2,
              infinite: false,
              dots: true
            }
          },
        ]
      };

    return ( 
        <div className={(props.align_center?"align-center ":"") +"movie-list-container"}>
            {
                (props.movies.length!==0) 
                &&
                (<div className="movie-list-heading">
                    {props.heading==="Favorites" && <i className={"fas fa-star favorite-heading"}></i>}
                    {props.heading}
                </div>)
            }

            <div className="movie-list" >
                {
                    props.isPending
                    ?
                    (props.heading!=="Favorites" && (<div className="loading"><div className="loading-anim"></div> Loading...</div>))
                    :
                    ((props.movies.length===0 && props.heading!=="Favorites" )?
                        <div className="bad-search"><i className="fas fa-frown-open"></i> SORRY, Couldn't find anything for "{props.searchValue}"</div>
                    :
                    <Slider {...settings}>
                        {props.movies.map((movie, index)=>(
                            <div key={index}>
                                <div 
                                    className="movie-element" 
                                    onClick={()=>{props.HandleClick_MovieList(movie)}}
                                >
                                    <img src={movie.Poster!=='N/A'?movie.Poster: no_poster} alt="movie Not Found"/>
                                    
                                    <div className="movie-element-tag">
                                        <span className="movie-element-text-box">
                                            {movie.Title} 
                                            {'\u00A0'}
                                            {
                                                isFavorite(movie)
                                                ?
                                                <i onClick={()=>{props.HandleClick_favorite(movie,'del')}} className="fas fa-minus-circle is-favorite"></i>
                                                :
                                                <i  onClick={()=>{props.HandleClick_favorite(movie,'add')}} className={"fas fa-star add-favorite"}></i>
                                            }   
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>)
                }
            </div> 
        </div>
    );
}
 
export default MovieList;