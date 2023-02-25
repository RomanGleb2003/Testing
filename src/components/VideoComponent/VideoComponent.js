import classes from "./VideoComponent.module.css";
import tmdb from "../../api/Tmdb";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const VideoComponent = () => {
    const [video, setVideo] = useState([])
    const params = useParams();

    const getVideo = async () => {
        const videos = await tmdb.get(`/movie/${params.id}/videos`);
        setVideo(videos.data.results);
    }

    useEffect(() => {
        getVideo();
    }, [])

    return (
        <div>
            <h3 className={classes.h3}>Media</h3>
            <div className={classes.column}>
                <div className={classes.column_video}>
                    <div className={classes.content}>
                        {video && video.length>0 ?
                        video.map((item, index) => {
                            return (
                                <div key={index} className={classes.movie_video}>
                                    < iframe src={`https://www.youtube.com/embed/${item.key}`}
                                             title="Youtube video player"
                                             frameBorder="0"
                                             height="300px"
                                             width="610px"
                                             allow="accelerometer; autoplay;
                                         clipboard - write;
                                         encrypted - media;
                                         gyroscope;
                                         picture - in -picture"
                                             allowFullScreen
                                    ></iframe>
                                </div>
                            )
                        }) : <h3>There is no video for this movie</h3>}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default VideoComponent;