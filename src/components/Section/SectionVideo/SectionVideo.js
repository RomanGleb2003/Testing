import classes from "./SectionVideo.module.css"
import Blur from "../../ui/Blur/Blur";

const SectionVideo = (props) => {
    return (
        <div className={classes.blocks}>
            {
                props.films.map((item, index) =>
                    <div key={index}>
                        <div className={classes.movie_thriller}>
                            < iframe src={`https://www.youtube.com/embed/${item.key}`}
                                     title="Youtube video player"
                                     frameBorder="0"
                                     height="250px"
                                     width="400px"
                                     allow="accelerometer; autoplay;
                                         clipboard - write;
                                         encrypted - media;
                                         gyroscope;
                                         picture - in -picture"
                                     allowFullScreen
                            ></iframe>
                        </div>
                        <div className={classes.content}>
                            <h1>{item.name || item.title}</h1>
                        </div>
                    </div>
                )}
            <Blur/>
        </div>
    )
};

export default SectionVideo;