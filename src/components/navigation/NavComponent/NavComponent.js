import {useEffect, useState} from "react";
import tmdb from "../../../api/Tmdb";
import AllComponent from "../../AllComponent/AllComponent";

const NavComponent = (props) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState(0)
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()  =>  {
        const getMovie = async () => {
            const {data} = await tmdb.get(props.way + page)
            setMovies(data.results)
            setPagination(data.total_pages);
            setFiltered(data.results);
            setLoading(false)
            if (loading===true){
                return loading
            }
        }
        getMovie()
    }, [page]);

    const handleClick = (number)=>{
        setPage(number);
    }

    return <AllComponent
        text={props.text}
        movies={movies}
        pagination={pagination}
        handleClick={handleClick}
        page={page}
        setFiltered={setFiltered}
        filtered={filtered}
        loading={loading}
    />;
}

export default NavComponent;