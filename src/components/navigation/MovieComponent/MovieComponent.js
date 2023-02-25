import classes from "./MovieComponent.module.css"
import {Link} from "react-router-dom";
import ProgressCircle from "../../ui/ProgressCircle/ProgressCircle";
import Ellipsis from "../../ui/Ellipsis/Ellipsis";
import {getPosterURL} from "../../../api/PosterUrl";

const MovieComponent = ({item}) => {
    return (
        <Link to={`/movie_detail/${item.id}`}>
                <img src={getPosterURL(item.poster_path)} alt={item.name}/>
            <div className={classes.ellipsis}>
                <Ellipsis/>
            </div>
            <div className={classes.paragraph}>
                <div className={classes.consensus}>
                    <ProgressCircle percent={item.vote_average * 10}/>
                </div>
                <div>
                    <h4>{item.title || item.name}</h4>
                    <p>{item.release_date}</p>
                </div>
            </div>
        </Link>
    );
}

export default MovieComponent;