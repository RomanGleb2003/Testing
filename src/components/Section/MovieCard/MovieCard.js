import classes from "./MovieCard.module.css"
import ProgressCircle from "../../ui/ProgressCircle/ProgressCircle";
import Ellipsis from "../../ui/Ellipsis/Ellipsis";
import {Link} from "react-router-dom";
import {getPosterURL} from "../../../api/PosterUrl";

const MovieCard = (props) => {
    return (
        <div className={classes.movie_card}>
            <div className={classes.movie_content}>
                <Link to={`/movie_detail/${props.id}`} className={classes.column_content}>
                    <div className={classes.movie_img}>
                        <img src={getPosterURL(props.poster_path)} alt={props.name}/>
                        <div className={classes.ellipsis}>
                            <Ellipsis/>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.consensus}>
                            <ProgressCircle percent={props.vote_average * 10}/>
                        </div>
                        <h1>{props.name || props.title}</h1>
                        <p>{props.first_air_date || props.release_date}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MovieCard;