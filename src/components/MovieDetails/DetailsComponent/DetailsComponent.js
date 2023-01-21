import classes from "./DetailsComponent.module.css";
import {getPosterURL} from "../../../api/PosterUrl";
import Chart from "../Chart/Chart";
import {getBackURL} from "../../../api/BackUrl";

const DetailsComponent = ({average, genres, movie}) => {
    return (
        <div className={classes.container}>
            <img src={getBackURL(movie.backdrop_path)} alt={movie.name}
                 style={{position: "absolute", height: "700px", zIndex: "-1"}}/>
            <div className={classes.movie_back}>
                <div className={classes.movie_card}>
                    <div className={classes.poster}>
                        <div className={classes.movie_img}>
                            <img src={getPosterURL(movie.poster_path)} alt={movie.name}/>
                            <div className={classes.bottom_movie}>
                                <img src="https://www.themoviedb.org/t/p/original/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg"
                                     alt="logo"/>
                                <div className={classes.end}>
                                    <h4>Now Streaming</h4>
                                    <h4>Watch Now</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.head}>
                            <h1>{movie.name || movie.title}</h1>
                            <time>({movie.first_air_date || movie.release_date})</time>
                        </div>
                        <div className={classes.type}>{genres.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item.name}
                                    <hr/>
                                </div>
                            )
                        })}
                        </div>
                        <div className={classes.actions}>
                            <Chart average={average}/>
                        </div>
                        <div className={classes.info}>
                            <h2>Overview</h2>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsComponent;