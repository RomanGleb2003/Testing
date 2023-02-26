import MovieCard from "../MovieCard/MovieCard";
import classes from "./MovieList.module.css"
import {useEffect, useState} from "react";
import tmdb from "../../../api/Tmdb";
import {request} from "../../../api/Request";
import Blur from "../../ui/Blur/Blur";

const MovieList = ({films}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
       const fetchMovies = async () => {
           const {data} = await tmdb.get(request[fetch])
           setMovies(data.results)
       }
       fetchMovies()
    }, [fetch]);

    return(
        <div className={classes.movie_content}>
            {films.map((movie, index) => {
                return(
                    <MovieCard key={index} {...movie} media_type={movie.media_type}/>
                )
            })}
            <div className={classes.scroller_wrap}>
                <Blur />
            </div>
        </div>
    )
}

export default MovieList;