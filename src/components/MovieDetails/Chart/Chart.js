import classes from "./Chart.module.css";
import ProgressCircle from "../../ui/ProgressCircle/ProgressCircle";

const Chart = ({average}) => {
    return (
        <div className={classes.chart}>
            <div className={classes.consensus}>
                <ProgressCircle percent={average}/>
            </div>
            <h3>User <br/> Score</h3>
            <div className={classes.circle}>
                <img
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-159-thumbnails-list-white-c260ea972eebf812289fd3c41d0d2c1dff33ecbcd62be13fba8eeaf9de173789.svg"
                    alt="png"/>
            </div>
            <div className={classes.circle}>
                <img
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-13-heart-white-28d2cc2d6418c5047efcfd2438bfc5d109192671263c270993c05f130cc4584e.svg"
                    alt="png"/>
            </div>
            <div className={classes.circle}>
                <img
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-73-bookmark-white-432e98d550b7e4c80b06272c49475b0db85a60f6fae450420713004b3c9d3ffd.svg"
                    alt="png"/>
            </div>
            <div className={classes.circle}>
                <img
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-49-star-white-5c85220678b312aea9599d5f12ad858a9e7df226de51ef8b6b699023ffeda5fa.svg"
                    alt="png"/>
            </div>
        </div>
    )
}

export default Chart;