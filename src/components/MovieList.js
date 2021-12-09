import Slider from "react-slick";

const MovieList = (props) => {

    const isFavorite=function(movie){
        return props.favorite.find((val)=>val['imdbID']===movie['imdbID']);
    }

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1465,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            //   initialSlide: 2,
              infinite: false,
              dots: true
            }
          },
        ]
      };

    return ( 
        <>
            {(props.heading && props.favorite.length!==0) ?<div className="movie-list-heading"> <i className={"fas fa-star favorite-heading"}></i> {props.heading}</div>:""}

            <div className="movie-list" >
                {
                    props.isPending?
                    (!props.heading && (<div className="loading"><div className="loading-anim"></div> Loading...</div>))
                    :
                    (<Slider {...settings}>
                        {props.movies.map((movie, index)=>(
                            <div key={index}>
                                <div 
                                    className="movie-element" 
                                    onClick={()=>{props.HandleClick_MovieList(movie)}}
                                >
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
                            </div>
                        ))}
                    </Slider>)
                }
            </div> 
        </>
    );
}
 
export default MovieList;