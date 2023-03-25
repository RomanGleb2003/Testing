import Pagination from "../ui/Pagination/Pagination";
import MovieComponent from "../navigation/MovieComponent/MovieComponent";
import classes from "./AllComponent.module.css";
import Genres from "../Genres/Genres";
import React, {useState} from "react";
import NotFound from "../ui/NotFound/NotFound";
import Loading from "../ui/Loading/Loading";



const AllComponent = (props) => {
    const [genre, setGenre] = useState(0)

    return (
        <div>
            <div className={classes.column_wrapper}>
                <div className={classes.column_content}>
                    <div className={classes.title}>
                        <h2>{props.text}</h2>
                    </div>
                    <div>
                        <Genres movies={props.movies}
                                setGenre={setGenre}
                                genre={genre}
                                setFiltered={props.setFiltered}
                                filtered={props.filtered}
                        />
                    </div>
                    <div className={classes.content}>
                        <div className={classes.section_panel}>
                            <div className={classes.page}>
                                { props.loading ?
                                    <div className={classes.load}><Loading/></div>
                                         :
                                    props.filtered && props.filtered.length > 0 ?
                                        props.filtered.map((item, index) => {
                                            return (
                                                <div key={index} className={classes.card}>
                                                    <MovieComponent item={item}/>
                                                </div>
                                            )
                                        }): <NotFound />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                props.pagination && props.pagination > 1 ?
                    <Pagination
                        maxnum={props.pagination}
                        activenum={props.page}
                        handleClick={props.handleClick}/> : ''
            }
        </div>
    )
}

export default AllComponent;
