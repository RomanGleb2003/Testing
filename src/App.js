import React, {useEffect} from "react";
import SearchResults from "./components/SearchResults/SearchResults";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Footer from "./components/Footer/Footer";
import Movie from "./components/navigation/Movie";
import TvShows from "./components/navigation/TvShows";
import Kids from "./components/navigation/Kids";
import Drama from "./components/navigation/Drama";
import TopRated from "./components/navigation/TopRated";
import * as PropTypes from "prop-types";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


function Redirect(props) {
    return null;
}

Redirect.propTypes = {
    from: PropTypes.string,
    to: PropTypes.string
};

function App() {
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");
    useEffect( () => {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        }, 500)
    },[])

    return (
        <div>
            {loading ?
                <ClipLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> : <>
                <Header/>
                <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/search' element={<SearchResults/>}/>
                <Route path='/movie_detail/:id' element={<MovieDetails/>} />
                <Route path="/movie" element={<Movie/>}></Route>
                <Route path="/tv_show" element={<TvShows/>}></Route>
                <Route path="/kids" element={<Kids/>}></Route>
                <Route path="/drama" element={<Drama/>}></Route>
                <Route path="/top" element={<TopRated/>}></Route>
                <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
                <Footer />
                </>
            }
        </div>
    );
}

export default App;
