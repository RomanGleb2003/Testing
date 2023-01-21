import {useEffect} from "react";
import classes from "./Genres.module.css"

const Genres = ({genre, setFiltered, setGenre, movies}) => {

    useEffect(() => {
        if (genre === 0) {
            setFiltered(movies)
            return;
        }
        const filtered = movies.filter((movie) =>
            movie.genre_ids.includes(genre)
        );
        setFiltered(filtered)
    }, [genre])

    return (
        <div className={classes.buttons}>
            <button className={classes.btn} onClick={() => setGenre(0)}>ALL</button>
            <button className={classes.btn} onClick={() => setGenre(28)}>Action</button>
            <button className={classes.btn} onClick={() => setGenre(12)}>Adventure</button>
            <button className={classes.btn} onClick={() => setGenre(16)}>Animation</button>
            <button className={classes.btn} onClick={() => setGenre(35)}>Comedy</button>
            <button className={classes.btn} onClick={() => setGenre(80)}>Crime</button>
            <button className={classes.btn} onClick={() => setGenre(18)}>Drama</button>
            <button className={classes.btn} onClick={() => setGenre(99)}>Documentary</button>
            <button className={classes.btn} onClick={() => setGenre(10751)}>Family</button>
            <button className={classes.btn} onClick={() => setGenre(14)}>Fantasy</button>
            <button className={classes.btn} onClick={() => setGenre(27)}>Horror</button>
            <button className={classes.btn} onClick={() => setGenre(10402)}>Music</button>
            <button className={classes.btn} onClick={() => setGenre(9648)}>Mystery</button>
            <button className={classes.btn} onClick={() => setGenre(10749)}>Romance</button>
            <button className={classes.btn} onClick={() => setGenre(878)}>Sci-Fi</button>
            <button className={classes.btn} onClick={() => setGenre(10770)}>TV</button>
            <button className={classes.btn} onClick={() => setGenre(53)}>Thriller</button>
        </div>
    )
}

export default Genres;