import React from "react";
import SearchResults from "./components/SearchResults/SearchResults";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Footer from "./components/Footer/Footer";
import Movie from "./components/navigation/Movie";
import TvShows from "./components/navigation/TvShows";
import Kids from "./components/navigation/Kids";
import Drama from "./components/navigation/Drama";
import TopRated from "./components/navigation/TopRated";

function App() {
    console.log('bgg')
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<SearchResults/>}/>
                <Route path='/movie_detail/:id' element={<MovieDetails/>} />
                <Route path="/movie" element={<Movie/>}></Route>
                <Route path="/tv_show" element={<TvShows/>}></Route>
                <Route path="/kids" element={<Kids/>}></Route>
                <Route path="/drama" element={<Drama/>}></Route>
                <Route path="/top" element={<TopRated/>}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
