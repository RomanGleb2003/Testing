import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import tmdb from "../../api/Tmdb";
import classes from "./MovieDetails.module.css";
import VideoComponent from "../VideoComponent/VideoComponent";
import DetailsComponent from "./DetailsComponent/DetailsComponent";

const MovieDetails = () => {
    const [movie, setMovie] = useState([])
    const [genres, setGenres] = useState([])

    const params = useParams()

    const getMovie = async () => {
        const result = await tmdb.get(`tv/${params.id}`);
        setMovie(result.data);
        setGenres(result.data.genres)
    }

    useEffect(() => {
        getMovie()
    }, [`movie/${params.id}`]);

    const average = Math.ceil(movie.vote_average * 1000) / 100

    return (
        <div>
            <div className={classes.movie_back}>
                <DetailsComponent average={average} genres={genres} movie={movie}/>
            </div>
            <section className={classes.section_video}>
                <VideoComponent/>
            </section>
        </div>
    )
}

export default MovieDetails;