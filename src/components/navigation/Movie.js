import NavComponent from "./NavComponent/NavComponent";

const Movie = () => {
    const Way = "/discover/movie?sort_by=popularity.desc&page="

    return(
        <div>
            <NavComponent way={Way} text="Movies"/>
        </div>
    )
}

export default Movie;