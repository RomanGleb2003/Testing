import {useLocation} from "react-router-dom";
import React, {useState} from "react";
import tmdb from "../../api/Tmdb";
import {useEffect} from "react";
import AllComponent from "../AllComponent/AllComponent";

const SearchResults = () => {
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState(0);
    const [filtered, setFiltered] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query");
    const getResults = async () => {
       await tmdb.get(`/search/movie?query=${query}&page=`+page)
            .then((response) => {
                setMovie(response.data.results)
                setPagination(response.data.total_pages);
                setFiltered(response.data.results);
            })
    }

    const handleClick = (number)=>{
        setPage(number);
    }

    useEffect(() => {
        getResults();
    }, [query, page]);

    return(
        <div>
            <div>
                <AllComponent
                    text="Search Results"
                    movies={movie}
                    pagination={pagination}
                    handleClick={handleClick}
                    page={page}
                    filtered={filtered}
                    setFiltered={setFiltered}
                />
            </div>
        </div>
    )
}

export default SearchResults;