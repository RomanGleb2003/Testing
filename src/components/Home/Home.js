import classes from "./Home.module.css"
import Section from "../Section/Section";
import MovieList from "../Section/MovieList/MovieList";
import {useEffect, useState} from "react";
import tmdb from "../../api/Tmdb";
import {request} from "../../api/Request";
import Search from "../search/Search";
import {RequestTrend} from "../../api/RequestTrend";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import SectionVideo from "../Section/SectionVideo/SectionVideo";
import {RequestTv} from "../../api/RequestTv";

const Home = () => {
    const [films, setFilms] = useState([]);
    const [movie, setMovie] = useState([]);
    const [trend, setTrend] = useState([]);
    const [isVideo, setIsVideo] = useState([]);
    const [sectionToggle, setSectionToggle] = useState({
        first: 'In Theaters',
        second: 'Today',
        third: 'In Theaters'
    })

    const handleToggledValue = (section, selectedValue) => {
        setSectionToggle(prev => ({
                ...prev,
                [section]: selectedValue
            })
        )
    }

    useEffect(() => {
        const fetchMovies = async () => {
            const {data} = await tmdb.get(request[sectionToggle.first])
            setFilms(data.results)
        }
        fetchMovies()
    }, [sectionToggle.first]);

    useEffect(() => {
        const fetchTrend = async () => {
            const {data} = await tmdb.get(RequestTrend[sectionToggle.second])
            setTrend(data.results)
        }
        fetchTrend()
    }, [sectionToggle.second]);

    useEffect(() => {
        const fetchVideo = async () => {
            const {data} = await tmdb(RequestTv[sectionToggle.third])
            setIsVideo(data.results)
        }
        fetchVideo()
    }, [sectionToggle.third]);



    return (
        <div className={classes.home}>
            <Search/>
            <Section
                title="What's Popular"
                items={["In Theaters", "On TV"]}
                onToggle={handleToggledValue.bind(null, 'first')}
            >
                <MovieList films={films}/>
            </Section>

            <div className={classes.section_back}>
                <Section
                    title="Trending"
                    items={["Today", "This Week"]}
                    onToggle={handleToggledValue.bind(null, 'second')}
                >
                    <MovieList films={trend}/>
                </Section>
            </div>
            <div className={classes.background}>
                <Section
                    title="Latest Trailers"
                    items={["In Theaters", "On TV"]}
                    onToggle={handleToggledValue.bind(null, 'third')}
                >
                    <SectionVideo films={isVideo}/>
                </Section>
            </div>
            <LeaderBoard/>
        </div>
    )
}

export default Home;

