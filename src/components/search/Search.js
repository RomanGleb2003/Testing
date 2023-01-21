import classes from "./Search.module.css"
import SearchButton from "./SearchButton/SearchButton";
import SearchInput from "./SearchInput/SearchInput";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState('');
    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    let navigate = useNavigate()
    const handleClick = () => {
        navigate({
            pathname: '/search',
            search: 'query='+search,
        })
        setSearch(search);
    };

    return(
        <div className={classes.media_wrapper}>
            <div className={classes.column_wrapper}>
                <div className={classes.content_wrapper}>
                    <div className={classes.title}>
                        <h2>Welcome.</h2>
                        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                    </div>
                    <div className={classes.search}>
                        <SearchInput
                            search={search}
                            handleChange={handleChange}/>
                        <SearchButton handleClick={handleClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;