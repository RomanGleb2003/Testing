import classes from "./MovieComponent.module.css"
import {Link} from "react-router-dom";
import ProgressCircle from "../../ui/ProgressCircle/ProgressCircle";
import Ellipsis from "../../ui/Ellipsis/Ellipsis";
import {getPosterURL} from "../../../api/PosterUrl";

const MovieComponent = ({item}) => {
    return (
        <Link to={`/movie_detail/${item.id}`}>
                <img src={item.poster_path <=0 ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a3ec971a-50ed-4cf1-a4ed-1da3c232d2b5/dej43qb-04846a2e-1a28-40b5-adc2-554fdbd5056f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EzZWM5NzFhLTUwZWQtNGNmMS1hNGVkLTFkYTNjMjMyZDJiNVwvZGVqNDNxYi0wNDg0NmEyZS0xYTI4LTQwYjUtYWRjMi01NTRmZGJkNTA1NmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AZqDMbU7ecLhCE9huog5fC2OjTFzFcWckhNb74Fw3tQ"
                    : getPosterURL(item.poster_path)} alt={item.name}/>
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